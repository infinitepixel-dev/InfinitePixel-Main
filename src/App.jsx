import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import WhatWeDo from "./components/WhatWeDo"
import AboutUs from "./components/AboutUs"
import ContactForm from "./components/ContactForm"
import Map from "./components/Map"
import Footer from "./components/Footer"
// import CustomCursor from "./components/CustomCursor"

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-neutral-2 00">
      {/* <CustomCursor /> */}
      <Navbar />
      <Header />
      <WhatWeDo />
      <AboutUs />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  )
}

export default App
