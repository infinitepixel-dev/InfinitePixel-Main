//RootClientLayout.jsx
"use client"

import PropTypes from "prop-types"
import { usePathname } from "next/navigation"
import Navbar from "@components/Navbar"
import Footer from "../../../old-react/components/Footer"

export default function RootClientLayout({ children }) {
  const pathname = usePathname()
  const isDashboardRoute = pathname?.startsWith("/dashboard")

  return (
    <>
      {!isDashboardRoute && <Navbar />}
      <main>{children}</main>
      {!isDashboardRoute && <Footer />}
    </>
  )
}

RootClientLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
