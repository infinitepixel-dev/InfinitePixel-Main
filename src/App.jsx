import { useEffect } from "react";
import DynamicComponentLoader from "./dynamicComponentLoader";
import { logBreakpoints, logActiveBreakpoint } from "./components/breakpoints";
import "./App.css";

function App() {
  let developerMode = true; // Set to false when deploying to production
  let displaySplashPage = true; // Set to true when deploying to production
  useEffect(() => {
    if (developerMode) {
      console.log("Developer Mode is active");
    }
  }, [developerMode]);
  useEffect(() => {
    logBreakpoints(); // Log all breakpoints once
    const handleResize = () => {
      logActiveBreakpoint(); // Log active breakpoint on resize
    };
    handleResize(); // Log active breakpoint on initial load
    window.addEventListener("resize", handleResize); // Log active breakpoint on initial load

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //#region Event Listeners
  //SECTION Event Listeners

  //NOTE Timeout 0.5s
  // Wait for 0.5 seconds before initializing event listeners
  setTimeout(() => {
    // Select all anchor links that link to an ID
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        // The target element to scroll to
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Scroll to the target element smoothly
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const container = document.querySelector(".snap-container");

    //NOTE handleScroll function
    // Function to handle scrolling
    function handleScroll(deltaY) {
      if (deltaY > 0) {
        container.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      } else {
        container.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
      }
    }

    //NOTE mouse wheel/touch event listeners
    // Event listener for mouse wheel
    container.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault(); // Prevent default wheel behavior
        handleScroll(e.deltaY);
      },
      { passive: false }
    );

    // Variables for touch event handling
    let startY = 0;
    let touchMove = false;

    // Event listener for touch start
    container.addEventListener(
      "touchstart",
      (e) => {
        startY = e.touches[0].clientY;
        touchMove = false;
      },
      { passive: false }
    );

    // Event listener for touch move
    container.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault(); // Prevent default touch behavior
        touchMove = true;
      },
      { passive: false }
    );

    // Event listener for touch end
    container.addEventListener(
      "touchend",
      (e) => {
        if (touchMove) {
          const endY = e.changedTouches[0].clientY;
          const deltaY = startY - endY;
          handleScroll(deltaY);
        }
      },
      { passive: false }
    );
  }, 500);
  //!SECTION Event Listeners
  //#endregion

  return (
    <>
      {/*SECTION Splashpage - BEGIN */}
      {!developerMode && displaySplashPage ? (
        <>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              {/*INFO-JSX Displays the Splashpage component */}
              <DynamicComponentLoader componentName="SplashPage" />
            </div>
          </div>
        </>
      ) : (
        //!SECTION Splashpage - END

        //SECTION Main Content Container - BEGIN
        <>
          <div
            className="mx-auto container-fluid snap-container"
            //if device layout is true then overflow-hidden
          >
            <DynamicComponentLoader
              developerMode={developerMode}
              componentName="NavigationBar"
            />

            <DynamicComponentLoader componentName="SiteRoutes" />
          </div>
        </>
      )}

      {/*INFO-JSX Site Routes */}
    </>
    //!SECTION Main Content Container - BEGIN
  );
}

export default App;
