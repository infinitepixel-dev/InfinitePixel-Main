import { useState } from "react";
import "./App.css";
import FoodTruckList from "./components/api-testing";
import logo from "./assets/logotest.png";
import CustomCursor from "./components/effects/customcursor";

function App() {
  const [count, setCount] = useState(0);

  //range of numbers to multiply by
  let random = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //random number generator

  let currentYear = new Date().getFullYear(); //current year

  return (
    <>
      <CustomCursor />
      <div className="App">
        <img src={logo} alt="" />

        <h1>InfinitePixel!</h1>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + random)}>
          Pixel Counter {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {/* Coming Soon with a copyright symbol */}
        <h3>© InfinitePixel {currentYear}</h3>

        <p>Testing</p>
        <FoodTruckList />
      </p>
    </>
  );
}

export default App;
