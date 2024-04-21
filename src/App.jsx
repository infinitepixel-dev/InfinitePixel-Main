import DynamicComponentLoader from "./dynamicComponentLoader";

import "./App.css";

function App() {
  let developerMode = true; // Set to false when deploying to production
  let displaySplashPage = true; // Set to true when deploying to production

  // delay by .05s
  setTimeout(() => {
    document.querySelector(".snap-container").addEventListener("wheel", (e) => {
      e.preventDefault(); // Prevent the default wheel behavior
      const container = e.currentTarget;
      if (e.deltaY > 0) {
        container.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      } else {
        container.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
      }
    });
  }, 500);

  return (
    <>
      {/*SECTION Effect Components - BEGIN */}
      {/*NOTE Displays a custom mouse cursor for desktop/mobile */}

      {/*!SECTION Effect Components - BEGIN */}

      {/*SECTION Splashpage - BEGIN */}
      {!developerMode && displaySplashPage ? (
        <>
          <div className="grid grid-cols-12 gap-4">
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
          <div className="snap-container">
            {/* Navigation Bar - Consider fixing the position if required */}
            <DynamicComponentLoader componentName="NavigationBar" />
            <div className="snap-page">
              <DynamicComponentLoader componentName="HeroPage" />
            </div>
            <div className="snap-page">
              <DynamicComponentLoader componentName="AboutUs" />
            </div>
            <div className="snap-page">
              <DynamicComponentLoader componentName="Payments" />
            </div>
            <div className="snap-page">
              <DynamicComponentLoader componentName="Page4" />{" "}
              {/* Assuming this is your footer */}
            </div>
          </div>
        </>
        //!SECTION Main Content Container - BEGIN
      )}
    </>
  );
}

export default App;
