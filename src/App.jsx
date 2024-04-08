import "./App.css";

// Image Assets
// import logo from "./assets/logo.svg";
import barberShop from "./assets/barberShop.png";

import DynamicComponentLoader from "./dynamicComponentLoader";

function App() {
  let developerMode = true; // Set to false when deploying to production
  let displaySplashPage = true; // Set to true when deploying to production

  let currentYear = new Date().getFullYear(); // Current year

  return (
    <>
      {/*SECTION Effect Components - BEGIN */}
      {/*NOTE Displays a custom mouse cursor for desktop/mobile */}
      <DynamicComponentLoader componentName="CustomCursor" />
      {/*!SECTION Effect Components - BEGIN */}

      {/*SECTION Splashpage - BEGIN */}
      {!developerMode && displaySplashPage ? (
        <>
          <div className="grid grid-cols-12 gap-4 rows-4">
            <div className="col-span-12">
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
          <div className="grid grid-cols-12 gap-1 h-dvh w-dvw">
            {/* Row 1 */}
            <div className="col-span-6 row-span-1 m-10 text-center">
              {/* card to display the barbershop image */}
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 column">
                  <h2 className="text-center">
                    Check out what we&apos;ve done!
                  </h2>
                </div>

                <div className="col-span-6 column">
                  <img
                    src={barberShop}
                    alt="barberShop"
                    className="w-2/4 m-5 mx-auto"
                  />
                </div>
              </div>
            </div>

            {/*NOTE Best Component Ever!!!!! - Takes remaining space on medium screens and one-third on large screens */}
            <div className="col-span-2 col-start-1 column">
              <DynamicComponentLoader
                className="column"
                componentName="Bestcomponent ever!!!!!"
                prop1="blahblahblah"
              />
            </div>

            {/*NOTE Component B and Pixel Counter - Full Row on small screens, full width on medium and two-thirds on large screens */}
            <DynamicComponentLoader
              className="column"
              componentName="ComponentB"
              prop1="value1"
            />

            {/*NOTE Pixel Counter Testing */}
            <div className="content-center column md:col-span-2">
              <div className="grid row-span-3 text-center grid-rows-subgrid gap4">
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
