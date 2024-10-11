import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import WhatWeDo from "./components/WhatWeDo"
// import CustomCursor from "./components/CustomCursor"

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-sky-950">
      {/* <CustomCursor /> */}
      <Navbar />
      <Header />
      <WhatWeDo />
    </div>
  )
}

export default App
