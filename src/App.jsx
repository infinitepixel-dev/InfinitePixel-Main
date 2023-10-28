import { useState } from "react";
import "./App.css";
// import FoodTruckList from "./components/api-testing";
import logo from "./assets/logotest.png";

import DynamicComponentLoader from "./dynamicComponentLoader";

function App() {
  const [count, setCount] = useState(0);

  //range of numbers to multiply by
  let random = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //random number generator

  let currentYear = new Date().getFullYear(); //current year

  return (
    <>
      {/* Pretend Component A is a Feature The client hasn't paid for, but we natively implemented */}
      <DynamicComponentLoader componentName="ComponentA" prop1="value1" />
      {/* Noticed that even though a component above is missing, the application functions as intended */}

      {/* Client paid for this feature 'Figure8' and it displays accordingly */}
      <DynamicComponentLoader componentName="Figure8" />

      <DynamicComponentLoader componentName="Customcursor" />

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
