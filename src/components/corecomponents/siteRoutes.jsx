import { Routes, Route } from "react-router-dom";
import Home from "../corecomponents/home";
import DeveloperDocs from "../documentation/developerDocs";

function SiteRoutes() {
  // console.log("Site Routes");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/infini-docs" element={<DeveloperDocs />} />
    </Routes>
  );
}

export default SiteRoutes;
