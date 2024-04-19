import "./App.css";

// Image Assets
// import logo from "./assets/logo.svg";

// eslint-disable-next-line no-unused-vars
import barberShop from "./assets/barberShop.png";

import DynamicComponentLoader from "./dynamicComponentLoader";

function App() {
  let developerMode = true; // Set to false when deploying to production
  let displaySplashPage = true; // Set to true when deploying to production

  // eslint-disable-next-line no-unused-vars
  let currentYear = new Date().getFullYear(); // Current year

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
          {/*NOTE Navigation Bar - Displays the Navigation Bar outside of grid container */}
          <DynamicComponentLoader componentName="NavigationBar" />
          {/* Page 1 */}
          <DynamicComponentLoader componentName="HeroPage" />
          {/* Page 2 */}
          <DynamicComponentLoader componentName="Page2" />

          {/* Page 3 */}
          <DynamicComponentLoader componentName="Page3" />

          {/* Page 4 - footer */}
          <DynamicComponentLoader componentName="Page4" />
        </>
        //!SECTION Main Content Container - BEGIN
      )}
    </>
  );
}

export default App;
