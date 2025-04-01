import { Routes, Route } from "react-router-dom"
import Home from "../corecomponents/home"
import DeveloperDocs from "../documentation/developerDocs"
import Portfolio from "../components/pages/Portfolio"

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/infini-docs" element={<DeveloperDocs />} />
      <Route path="/portfolio" element={<Portfolio />} />{" "}
    </Routes>
  )
}

export default SiteRoutes
