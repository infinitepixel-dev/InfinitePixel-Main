import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css" // Your global Tailwind CSS or custom styles

import PropTypes from "prop-types"
import Navbar from "@components/Navbar" // Assuming you move Navbar to /src/app/components/Nav.jsx
import Footer from "@components/Footer" // Same for Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Your Website Name", // <-- Update your actual site title
  description: "Your Website Description",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
