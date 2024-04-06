import { useEffect } from "react";
// import "./SplashPage.css";
import { Animated } from "react-animated-css";
import bgImage from "../../../public/nebulaBG.webp";

function SplashPage() {
  useEffect(() => {
    const headings = document.querySelectorAll("h1");

    headings.forEach(function (heading) {
      heading.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "animate__duration-5s",
        "animate__delay-1s"
      );
    });
  }, []); // Add an empty dependency array if you only want this effect to run once

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <img
          src={bgImage}
          alt="background"
          className="absolute inset-0 object-cover w-full h-full"
          style={{ zIndex: -1 }}
        />
        <div className="z-10 text-center">
          <Animated
            animationIn="fadeIn"
            animationInDuration={5000}
            animationInDelay={1000}
            isVisible={true}
          >
            <h1 className="text-4xl font-bold text-white">Infinite Pixel</h1>
          </Animated>
          <Animated
            animationIn="fadeIn"
            animationInDuration={5000}
            animationInDelay={2000}
            isVisible={true}
          >
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Coming Soon
            </h2>
          </Animated>
        </div>
      </div>
    </>
  );
}

export default SplashPage;
