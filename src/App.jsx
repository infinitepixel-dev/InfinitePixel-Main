import { useState } from "react";
import "./App.css";
// import FoodTruckList from "./components/api-testing";
import logo from "./assets/logo_rev2.svg";

import DynamicComponentLoader from "./dynamicComponentLoader";

function App() {
  const [count, setCount] = useState(0);

  //range of numbers to multiply by
  let random = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //random number generator

  let currentYear = new Date().getFullYear(); //current year

  return (
    <>
      {/* Splash Page Component */}
      {/* <DynamicComponentLoader componentName="SplashPage" />
       */}
      <img src={logo} alt="" />
      {/* I want my navbar here maybe??? */}
      <DynamicComponentLoader componentName="NavigationBar" />
      {/* Pretend Component A is a Feature The client hasn't paid for, but we natively implemented */}
      {/* <DynamicComponentLoader componentName="ComponentA" prop1="value1" /> */}
      {/* Noticed that even though a component above is missing, the application functions as intended */}

      {/* Client paid for this feature 'Figure8' and it displays accordingly */}
      {/* <DynamicComponentLoader componentName="Figure8" /> */}

      <DynamicComponentLoader componentName="Customcursor" />

      <div className="App">
        <h1>InfinitePixel!</h1>

        <DynamicComponentLoader
          componentName="Bestcomponent ever!!!!!"
          prop1="blahblahblah"
        />

        <div className="card">
          <button onClick={() => setCount((count) => count + random)}>
            Pixel Counter {count}
          </button>
        </div>
        <DynamicComponentLoader componentName="ComponentB" prop1="value1" />
        <h3>© InfinitePixel {currentYear}</h3>

        {/* <FoodTruckList /> */}
      </div>
    </>
  );
}

export default App;
