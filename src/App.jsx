import { Routes, Route } from "react-router-dom"
import PublicLayout from "./components/layouts/PublicLayout"
import DashboardLayout from "./components/layouts/DashboardLayout"

import Header from "./components/Header"
import WhatWeDo from "./components/WhatWeDo"
import AboutUs from "./components/AboutUs"
import ContactForm from "./components/ContactForm"
import Map from "./components/Map"
import Portfolio from "./components/pages/Portfolio"
import Review from "./components/Review"
import ScrollingIconsBar from "./components/utility/ScrollingIconsBar"

// Dashboard
import DashboardMain from "./components/dashboard/ui/DashboardMain"

function App() {
  return (
    <Routes>
      {/* Public Site Routes */}
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AboutUs />
              <WhatWeDo />
              <ScrollingIconsBar />
              <Review />
              <ContactForm />
              <Map />
            </>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>

      {/* Dashboard Routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardMain />} />
      </Route>
    </Routes>
  )
}

export default App
