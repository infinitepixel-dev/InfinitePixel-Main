import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "@web/Header"
import Navbar from "@web/Navbar"
import WhatWeDo from "@web/pages/WhatWeDo"
import AboutUs from "@web/pages/AboutUs"
import ContactForm from "@web/pages/ContactForm"
import Map from "@web/cards/Map"
import Footer from "@web/Footer"
import Portfolio from "@web/pages/Portfolio"
import Review from "@web/cards/Review"
import ScrollingIconsBar from "@web/utilities/ScrollingIconsBar"
import WhyCustomWebsite from "@web/pages/WhyCustomWebsite"
import ProjectStats from "@web/pages/ProjectStats"

function App() {
  return (
    <div
      id="app-container"
      className="relative bg-neutral-2 min-h-screen overflow-hidden transition-[margin-right] duration-300 ease-in-out"
    >
      {/* <CustomCursor /> */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <WhatWeDo />
              <Review />
              <ProjectStats />
              <WhyCustomWebsite />
              <ScrollingIconsBar />
              <AboutUs />
              <ContactForm />
              <Map />
            </>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
