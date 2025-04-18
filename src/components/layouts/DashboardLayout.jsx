// src/components/layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex w-full h-screen">
      <Outlet />
    </div>
  )
}

export default DashboardLayout
