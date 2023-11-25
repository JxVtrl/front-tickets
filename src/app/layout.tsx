import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"

import { AppProvider } from "@/contexts/contextApi"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "@/styles/globals.css"
import "@/styles/home.css"
import "@/styles/register.css"
import "@/styles/login.css"
import SeatModal from "@/components/SeatModal"

const inter = Inter({ subsets: ["latin"] })

const montserrat = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "NextAuto",
  description: "Sistema de reserva de passagem de ônibus",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <AppProvider>
        <body className={`${inter.className} ${montserrat.className}`}>
          <SeatModal/>
          <Header />
          {children}
          <Footer />
        </body>
      </AppProvider>
    </html>
  )
}
