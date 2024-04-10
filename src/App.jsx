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
      <DynamicComponentLoader componentName="CustomCursor" />
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

          {/*NOTE Main Content Grid Container - BEGIN */}
          {/* <div className="grid w-screen h-screen grid-cols-12 grid-rows-4 gap-1"> */}
          {/* Page 1 */}
          <div className="relative col-span-12 row-span-1 row-start-1">
            {/* <div id="color1"></div>
              <div id="color2"></div>
              <div id="color3"></div>
              <div id="color4"></div> */}

            <div
              className="absolute bg-color1"
              style={{
                width: "50%",
                height: "50%",
                left: "0%",
                top: "50%",
                filter: "blur(200px)",
                zIndex: "-1",
              }}
            ></div>
            <div
              className="absolute bg-color2"
              style={{
                width: "40%",
                height: "60%",
                left: "20%",
                top: "15%",
                filter: "blur(200px)",
                zIndex: "-1",
              }}
            ></div>
            <div
              className="absolute bg-color3"
              style={{
                width: "30%",
                height: "40%",
                left: "50%",
                top: "5%",
                filter: "blur(200px)",
                zIndex: "-1",
              }}
            ></div>
            <div
              className="absolute bg-color4"
              style={{
                width: "35%",
                height: "45%",
                left: "60%",
                top: "50%",
                filter: "blur(400px)",
                transform: "rotate(-147.52deg)",
                zIndex: "-1",
              }}
            ></div>

            {/* Sub-grid for Page 1 */}
            <div className="z-10 grid grid-cols-12 grid-rows-6 gap-1 overflow-auto column">
              {/* Add your rows and columns inside the sub-grid */}

              <div className="col-span-5 col-start-2 row-start-2">
                <h2 className="text-6xl leading-tight tracking-tighter text-left">
                  Developing Responsive Websites For Your Brand
                </h2>
              </div>
              <div className="content-center col-span-3 col-start-2 row-span-1 row-start-3 mt-14">
                <button
                  className="text-6xl leading-none tracking-tight text-center duration-500 bg-yellow-600 hover:bg-yellow-500"
                  style={{
                    position: "absolute",
                    width: "350px",
                    height: "89px",
                    // left: "148px",
                    // top: "485px",
                    color: "black",
                    borderRadius: "15px",
                  }}
                >
                  Get Started
                </button>
              </div>
              <div className="col-span-2 row-span-2">Content 3</div>
              <div className="col-span-4 row-span-2">Content 4</div>
            </div>
          </div>

          {/* Page 2 */}
          <div className="relative col-span-12 row-span-1 row-start-2">
            {/* Sub-grid for Page 2 */}
            <div className="z-10 grid w-screen h-screen grid-cols-6 grid-rows-4 gap-1 overflow-auto column">
              {/* Define your sub-grid structure here */}
              <div className="col-span-3 row-span-1">Content 1</div>
              <div className="col-span-3 row-span-1">Content 2</div>
              <div className="col-span-2 row-span-2">Content 3</div>
              <div className="col-span-4 row-span-2">Content 4</div>
            </div>
          </div>

          {/* Page 3 */}
          <div className="relative col-span-12 row-span-1 row-start-3">
            {/* Sub-grid for Page 3 */}
            <div className="z-10 grid w-screen h-screen grid-cols-6 grid-rows-4 gap-1 overflow-auto column">
              {/* Define your sub-grid structure here */}
              <div className="col-span-3 row-span-1">Content 1</div>
              <div className="col-span-3 row-span-1">Content 2</div>
              <div className="col-span-2 row-span-2">Content 3</div>
              <div className="col-span-4 row-span-2">Content 4</div>
            </div>
          </div>

          {/* Page 4 */}
          <div className="relative col-span-12 row-span-1 row-start-4">
            {/* Sub-grid for Page 4 */}
            <div className="z-10 grid w-screen h-screen grid-cols-6 grid-rows-4 gap-1 overflow-auto column">
              {/* Define your sub-grid structure here */}
              <div className="col-span-3 row-span-1">Content 1</div>
              <div className="col-span-3 row-span-1">Content 2</div>
              <div className="col-span-2 row-span-2">Content 3</div>
              <div className="col-span-4 row-span-2">Content 4</div>
            </div>
          </div>
          {/* </div> */}

          {/*NOTE - Background Colors */}

          {/*NOTE - Hero Text */}

          {/*NOTE - Hero CTA */}

          {/* NOTE - Information */}

          {/* Row 1 */}
          {/* <div className="col-span-6 row-span-1 m-10 text-center column">
       
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6">
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
            </div> */}

          {/*NOTE Best Component Ever!!!!! - Takes remaining space on medium screens and one-third on large screens */}
          {/* <div className="col-span-2 col-start-1 column">
              <DynamicComponentLoader
                className="column"
                componentName="Bestcomponent ever!!!!!"
                prop1="blahblahblah"
              />
            </div> */}

          {/*NOTE Component B and Pixel Counter - Full Row on small screens, full width on medium and two-thirds on large screens */}
          {/* <DynamicComponentLoader
              className="column"
              componentName="ComponentB"
              prop1="value1"
            /> */}

          {/*NOTE Pixel Counter Testing */}
          {/* <div className="content-center column md:col-span-2">
              <div className="grid row-span-3 text-center grid-rows-subgrid gap4">
                <h3 className="text-2xl leading-relaxed">
                  © InfinitePixel {currentYear}
                </h3>
              </div>
            </div> */}

          {/* Main Content Grid Container - END */}
        </>
        //!SECTION Main Content Container - BEGIN
      )}
    </>
  );
}

export default App;
