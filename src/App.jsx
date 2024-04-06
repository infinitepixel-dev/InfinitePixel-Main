import { useState } from "react";
import "./App.css";

// Image Assets
import logo from "./assets/logo.svg";
import barberShop from "./assets/barberShop.png";

import DynamicComponentLoader from "./dynamicComponentLoader";

function App() {
  const [count, setCount] = useState(0);
  let developerMode = true; // Set to false when deploying to production
  let displaySplashPage = true; // Set to true when deploying to production

  let currentYear = new Date().getFullYear(); // Current year

  // Random number generator
  let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

  const displayInfinity = () => {
    for (let i = 0; i < 100; i++) {
      console.log("loop iteration: ", i);
      if (count >= 1000) {
        console.log("Infinity Reached");
        setCount(() => "∞");
      } else if (count < 1000) {
        setCount((count) => count + random);
      }
    }
  };

  return (
    <>
      {/*SECTION Effect Components - BEGIN */}
      {/*NOTE Displays a custom mouse cursor for desktop/mobile */}
      <DynamicComponentLoader componentName="Customcursor" />
      {/*!SECTION Effect Components - BEGIN */}

      {/*SECTION Splashpage - BEGIN */}
      {!developerMode && displaySplashPage ? (
        <>
          <div className="grid grid-cols-6 gap-4 rows-4">
            <div className="col-span-6">
              {/*NOTE Displays the Splashpage component */}
              <DynamicComponentLoader componentName="SplashPage" />
            </div>
          </div>
        </>
      ) : (
        //!SECTION Splashpage - END
        //SECTION Main Content Container - BEGIN
        <>
          {/*NOTE Navigation Bar - Displays the Navigation Bar outside of grid container */}
          <DynamicComponentLoader componentName="NavigationBar" />

          {/*NOTE Main Content Grid Container - BEGIN */}
          <div className="grid grid-cols-6 gap-4 rows-16">
            {/* NOTE Infinite Pixel Logo and heading */}
            <div className="col-span-4 col-start-2 text-center">
              <img
                className="mx-auto"
                src={logo}
                alt="Infinite-Pixel"
                style={{ zIndex: "-1" }}
              />

              <h1 className="text-6xl leading-5">Infinite Pixel!</h1>
            </div>

            <div className="col-span-6 row-span-1 m-10 text-center">
              {/* card to display the barbershop image */}
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6">
                  <h2>Check out what we&apos;ve done!</h2>
                </div>

                <div className="col-span-6">
                  <img
                    src={barberShop}
                    alt="barberShop"
                    className="w-2/4 m-5 mx-auto"
                  />
                </div>
              </div>
            </div>

            {/*NOTE Best Component Ever!!!!! - Takes remaining space on medium screens and one-third on large screens */}
            <div className="col-span-2 col-start-1 ">
              <DynamicComponentLoader
                componentName="Bestcomponent ever!!!!!"
                prop1="blahblahblah"
              />
            </div>

            {/*NOTE Component B and Pixel Counter - Full Row on small screens, full width on medium and two-thirds on large screens */}
            <DynamicComponentLoader componentName="ComponentB" prop1="value1" />

            {/*NOTE Pixel Counter Testing */}
            <div className="content-center md:col-span-2">
              <div className="grid row-span-3 text-center grid-rows-subgrid gap4">
                <div className="mt-4 text-center">
                  <button
                    className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
                    onClick={displayInfinity}
                  >
                    Pixel Counter {count}
                  </button>
                </div>

                <h3 className="text-2xl leading-relaxed">
                  © InfinitePixel {currentYear}
                </h3>
              </div>
            </div>

            {/* Main Content Grid Container - END */}
          </div>
        </>
        //!SECTION Main Content Container - BEGIN
      )}
    </>
  );
}

export default App;
