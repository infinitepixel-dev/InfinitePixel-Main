import { useState } from "react";
import "./App.css";
// import FoodTruckList from "./components/api-testing";
import logo from "./assets/logo.svg";

let developerMode = false; //set to false when deploying to production
let displaySplashPage = true; //set to true when deploying to production

// MUST BE IMPORTED ON ALL COMPONENTS
import DynamicComponentLoader from "./dynamicComponentLoader";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  //range of numbers to multiply by
  let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1; //random number generator

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
          <div className="appContainer">
            {/* <img src={logo} alt="" /> */}
            <div className="container-item">
              <DynamicComponentLoader componentName="SplashPage" />
            </div>
            <div className="container-item">
              <DynamicComponentLoader componentName="Customcursor" />
            </div>
          </div>
        </>
      ) : (
        <div className="appContainer">
          <div className="container-item">
            <DynamicComponentLoader componentName="NavigationBar" />
          </div>

          <div className="container-item">
            <img className="logo" src={logo} alt="Infinite-Pixel" />
            <h1>Infinite Pixel!</h1>
          </div>
          {/* I want my navbar here maybe??? */}

          {/* Pretend Component A is a Feature The client hasn't paid for, but we natively implemented */}
          {/* <DynamicComponentLoader componentName="ComponentA" prop1="value1" /> */}
          {/* Noticed that even though a component above is missing, the application functions as intended */}

          {/* Client paid for this feature 'Figure8' and it displays accordingly */}
          {/* <DynamicComponentLoader componentName="Figure8" /> */}
          <div className="container-item">
            <DynamicComponentLoader componentName="Customcursor" />
          </div>

          <div className="container-item">
            <DynamicComponentLoader
              componentName="Bestcomponent ever!!!!!"
              prop1="blahblahblah"
            />
          </div>

          <div className="container-item">
            <DynamicComponentLoader componentName="ComponentB" prop1="value1" />
            <div className="pixel-counter">
              <button onClick={() => displayInfinity()}>
                Pixel Counter {count}
              </button>
            </div>
          </div>

          <div className="container-item">
            <h3 className="footer">© InfinitePixel {currentYear}</h3>
          </div>
          {/* <FoodTruckList /> */}
        </div>
      )}
      {/* end of component */}
    </>
  );
}

export default App;
