import { Routes, Route } from "react-router-dom";

//Layouts
import PublicLayout from "./components/layouts/PublicLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import ScrollingIconsBar from "@web/utilities/ScrollingIconsBar";

import Header from "@web/Header";
import Navbar from "@web/Navbar";
import Footer from "@web/Footer";

//Web Pages
import WhatWeDo from "@web/pages/WhatWeDo";
import AboutUs from "@web/pages/AboutUs";
import ContactForm from "@web/pages/ContactForm";
import Portfolio from "@web/pages/Portfolio";

//Cards
import Review from "@web/cards/Review";
import Map from "@web/cards/Map";

import "./App.css";

// Dashboard
import DashboardMain from "./components/dashboard/ui/DashboardMain";

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
  );
}

export default App;
