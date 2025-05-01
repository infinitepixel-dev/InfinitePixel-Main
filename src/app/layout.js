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
  title: "Infinite Pixel | Affordable Custom Web Design for Small Businesses",
  description:
    "We specialize in affordable, professional custom web design for small businesses. Our websites are built to look great, work seamlessly, and showcase your brand while helping you reach your business goals.",
  keywords: [
    "web design",
    "small business",
    "affordable websites",
    "Nashville",
    "Lebanon",
    "Tennessee",
    "custom web design",
    "Infinite Pixel",
    "professional websites",
    "e-commerce",
    "business websites",
  ],
  authors: [{ name: "Infinite Pixel" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.infinitepixel.dev"),
  openGraph: {
    title: "Infinite Pixel | Affordable Custom Web Design for Small Businesses",
    description:
      "Infinite Pixel offers affordable and professional custom web design services tailored specifically for small businesses.",
    url: "https://www.infinitepixel.dev",
    siteName: "Infinite Pixel",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infinite Pixel Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Pixel | Affordable Custom Web Design for Small Businesses",
    description:
      "Affordable, professional web design for small businesses. Get a custom site that reflects your brand.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/images/favicon.ico",
  },
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
