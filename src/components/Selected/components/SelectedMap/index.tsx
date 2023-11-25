import { useApp } from "@/contexts/contextApi"
import React, { useEffect } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import { googleLoader } from "@/utils/google"

const SelectedMap: React.FC = () => {
  const mapRef = React.useRef<HTMLDivElement>(document.createElement("div"))

  const [mapError, setMapError] = React.useState(false)
  const { selectedRoute } = useApp()

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
    const { Map } = await googleLoader.importLibrary("maps")

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

    const service = new google.maps.DistanceMatrixService()

    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (!response) return console.log("error")

        if (status !== "OK") {
          alert("Error was: " + status)
        } else {
          const duration = response.rows[0].elements[0].duration?.text
          const durationElement = document.getElementById("duration")

          if (durationElement) durationElement.innerHTML = duration || ""
        }
      }
    )
  }

  const fetchCoords = async () => {
    try {
      const { Geocoder } = await googleLoader.importLibrary("geocoding")

      const geocoder = new Geocoder()

      const originAddress = await geocoder.geocode({
        address: selectedRoute?.origem,
      })
      const destinationAddress = await geocoder.geocode({
        address: selectedRoute?.destino,
      })

      initMap(
        {
          lat: originAddress.results[0].geometry.location.lat(),
          lng: originAddress.results[0].geometry.location.lng(),
        },
        {
          lat: destinationAddress.results[0].geometry.location.lat(),
          lng: destinationAddress.results[0].geometry.location.lng(),
        }
      )
    } catch (err) {
        setMapError(true)
        console.log(err)
    }
  }

  useEffect(() => {
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
