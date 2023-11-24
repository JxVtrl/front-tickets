import React from "react"
import Image from "next/image"

export default function Banner() {
  return (
    <div className="banner-container">
      <Image
        src={require("@/assets/banner-home.svg")}
        alt="Banner principal da home"
        width={1920}
        height={600}
        priority={true}
      />
    </div>
  )
}
