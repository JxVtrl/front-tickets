import Map from "@/components/Map"
import { useApp } from "@/contexts/contextApi"
import React, { useEffect, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"

const SelectedMap: React.FC = () => {
  const mapRef = React.useRef<HTMLDivElement>(document.createElement("div"))

  const { selectedRoute } = useApp()

  useEffect(() => {
    const fetchCoords = async () => {
      const { Geocoder } = await new Loader({
        apiKey: "AIzaSyCTCwVmfCP44WUBBvmeXn7lvO1pJ4k5e2U",
        version: "weekly",
      }).importLibrary("geocoding")

      const geocoder = new Geocoder()

      const originAddress = await geocoder.geocode({
        address: selectedRoute?.origem || "",
      })

      const destinationAddress = await geocoder.geocode({
        address: selectedRoute?.destino || "",
      })

      let origin = {
        lat: originAddress.results[0].geometry.location.lat(),
        lng: originAddress.results[0].geometry.location.lng(),
      }

      let destination = {
        lat: destinationAddress.results[0].geometry.location.lat(),
        lng: destinationAddress.results[0].geometry.location.lng(),
      }

      initMap(origin, destination)
    }

    const initMap = async (
      origin: {
        lat: any
        lng: any
      },
      destination: {
        lat: any
        lng: any
      }
    ) => {
      const loader = new Loader({
        apiKey: "AIzaSyCTCwVmfCP44WUBBvmeXn7lvO1pJ4k5e2U",
        version: "weekly",
      })

      const { Map } = await loader.importLibrary("maps")

      const directionsService = new google.maps.DirectionsService()
      const directionsRenderer = new google.maps.DirectionsRenderer()

      const map = new Map(mapRef.current, {
        center: origin,
        zoom: 8,
      })

      directionsRenderer.setMap(map)

      const request = {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      }

      directionsService.route(request, function (result, status) {
        if (status == "OK") {
          directionsRenderer.setDirections(result)
        }
      })
    }

    fetchCoords()
  }, [selectedRoute])

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "100%",
        maxHeight: "300px",
        margin: "24px auto",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      ref={mapRef}
    />
  )
}

export default SelectedMap
