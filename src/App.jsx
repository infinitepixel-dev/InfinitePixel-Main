import { useState } from "react";
import "./App.css";
// import FoodTruckList from "./components/api-testing";
import logo from "./assets/logo.svg";

let developerMode = false; //set to false when deploying to production
let displaySplashPage = true; //set to true when deploying to production

// MUST BE IMPORTED ON ALL COMPONENTS
import DynamicComponentLoader from "./dynamicComponentLoader";

function App() {
  const [count, setCount] = useState(0);

  //range of numbers to multiply by
  let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1; //random number generator

  // const displayInfinity = () => {
  //   console.log();
  //   let intervalId = setInterval(() => {
  //     setCount((prevCount) => {
  //       if (prevCount + random > 1000) {
  //         console.log("Infinity Reached");
  //         clearInterval(intervalId);
  //         return "∞";
  //       }
  //       return prevCount + random;
  //     });
  //   }, 1000);
  // };

  const displayInfinity = () => {
    for (let i = 0; i < 100; i++) {
      console.log("loop iteration: ", i);
      if (count > 1000) {
        console.log("Infinity Reached");
        setCount(() => {
          //remove numbers and output text
          return "∞";
        });
      } else if (count < 1000) {
        //set delay of 1s

        setCount((count) => count + random);
        i++;
      }
    }

    return;
  };

  let currentYear = new Date().getFullYear(); //current year

  return (
    <>
      {/* Splash Page Component */}
      {!developerMode && displaySplashPage ? (
        <>
          production mode:
          {/* <img src={logo} alt="" /> */}
          <DynamicComponentLoader componentName="SplashPage" />
          <DynamicComponentLoader componentName="Customcursor" />
          <div className="App">
            <h3>© InfinitePixel {currentYear}</h3>
          </div>
        </>
      ) : (
        <>
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
              <button onClick={() => displayInfinity()}>
                Pixel Counter {count}
              </button>
            </div>
            <DynamicComponentLoader componentName="ComponentB" prop1="value1" />
            <h3>© InfinitePixel {currentYear}</h3>

            {/* <FoodTruckList /> */}
          </div>
        </>
      )}
      {/* end of component */}
    </>
  );
}

export default App;
