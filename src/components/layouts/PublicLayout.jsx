// src/components/layouts/PublicLayout.jsx
import Navbar from "../Navbar"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-2">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default PublicLayout
