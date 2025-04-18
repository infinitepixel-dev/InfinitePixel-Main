
import { Routes, Route } from "react-router-dom"
import PublicLayout from "./components/layouts/PublicLayout"
import DashboardLayout from "./components/layouts/DashboardLayout"
import ScrollingIconsBar from "@web/utilities/ScrollingIconsBar"

import Header from "./components/Header"
import WhatWeDo from "./components/WhatWeDo"
import AboutUs from "./components/AboutUs"
import ContactForm from "./components/ContactForm"
import Map from "./components/Map"
import Portfolio from "./components/pages/Portfolio"
import Review from "./components/Review"
import ScrollingIconsBar from "./components/utility/ScrollingIconsBar"
import Header from "@web/Header"
import Navbar from "@web/Navbar"
import WhatWeDo from "@web/pages/WhatWeDo"
import AboutUs from "@web/pages/AboutUs"
import ContactForm from "@web/pages/ContactForm"
import Map from "@web/cards/Map"
import Footer from "@web/Footer"
import Portfolio from "@web/pages/Portfolio"
import Review from "@web/cards/Review"

import "./App.css"

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
