import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/CustomCursor"

function App() {
  return (
    <div className="min-h-screen bg-sky-950">
      <CustomCursor />
      <Navbar />
      <Header />
    </div>
  )
}

export default App
