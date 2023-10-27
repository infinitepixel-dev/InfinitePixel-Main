import { useState } from "react";
import "./App.css";
import FoodTruckList from "./components/api-testing";
import logo from "./assets/logotest.png";
import CustomCursor from "./components/effects/customcursor";
import Figure8 from "./components/effects/figure8";

function App() {
  const [count, setCount] = useState(0);

  //range of numbers to multiply by
  let random = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //random number generator

  let currentYear = new Date().getFullYear(); //current year

  return (
    <>
      <Figure8 />

      <CustomCursor />
      <div className="App">
        <img src={logo} alt="" />
        <h1>InfinitePixel!</h1>

        <div className="card">
          <button onClick={() => setCount((count) => count + random)}>
            Pixel Counter {count}
          </button>
        </div>

        <h3>© InfinitePixel {currentYear}</h3>

        {/* <FoodTruckList /> */}
      </div>
    </>
  );
}

export default App;
