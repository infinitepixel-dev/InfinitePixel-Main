// layout.js
"use client"

import { useEffect } from "react"

import "./globals.css"
import RootClientLayout from "@components/RootClientLayout"
import { ReCaptchaProvider } from "next-recaptcha-v3"
import { useTheme } from "@hooks/useTheme"
import { metadata } from "./layout-metadata"

export default function RootLayout({ children }) {
  const { theme } = useTheme()

  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme
    }
  }, [theme])

  return (
    <html lang="en">
      <body>
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY}
        >
          <RootClientLayout>{children}</RootClientLayout>
        </ReCaptchaProvider>
      </body>
    </html>
  )
}
