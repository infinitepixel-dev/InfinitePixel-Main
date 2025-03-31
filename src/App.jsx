import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";
import Footer from "./components/Footer";
// import CustomCursor from "./components/CustomCursor"

function App() {
  return (
    <div
      id="app-container"
      className="relative bg-neutral-2 min-h-screen overflow-hidden transition-[margin-right] duration-300 ease-in-out"
    >
      {/* <CustomCursor /> */}
      <Navbar />
      <Header />
      <WhatWeDo />
      <AboutUs />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
