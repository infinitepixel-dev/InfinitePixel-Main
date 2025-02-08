import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import WhatWeDo from "./components/WhatWeDo"
import Portfolio from "./components/Portfolio"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-hidden bg-neutral-200">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <WhatWeDo />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Jawfane" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
