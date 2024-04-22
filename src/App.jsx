import DynamicComponentLoader from "./dynamicComponentLoader";

import "./App.css";

function App() {
  let developerMode = true; // Set to false when deploying to production
  let displaySplashPage = true; // Set to true when deploying to production

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

    // Function to handle scrolling
    function handleScroll(deltaY) {
      if (deltaY > 0) {
        container.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      } else {
        container.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
      }
    }

    // Event listener for mouse wheel
    container.addEventListener("wheel", (e) => {
      e.preventDefault(); // Prevent default wheel behavior
      handleScroll(e.deltaY);
    });

    // Variables for touch event handling
    let startY = 0;
    let touchMove = false;

    // Event listener for touch start
    container.addEventListener("touchstart", (e) => {
      startY = e.touches[0].clientY;
      touchMove = false;
    });

    // Event listener for touch move
    container.addEventListener("touchmove", (e) => {
      e.preventDefault(); // Prevent default touch behavior
      touchMove = true;
    });

    // Event listener for touch end
    container.addEventListener("touchend", (e) => {
      if (touchMove) {
        const endY = e.changedTouches[0].clientY;
        const deltaY = startY - endY;
        handleScroll(deltaY);
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
          <div className="mx-auto container-fluid snap-container">
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
