import { useEffect } from "react";
// import "./SplashPage.css";
// import { Animated } from "react-animated-css";
// import bgImage from "../../../public/nebulaBG.webp";

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
      {/* <div className="flex items-center justify-center min-h-screen p-10 bg-gradient-to-tr to-blue-700 from-indigo-900">
        <div className="w-max">
          <h1 className="pr-5 overflow-hidden text-5xl font-bold text-white border-r-4 animate-typing whitespace-nowrap border-r-white">
            Hello World
          </h1>
        </div>
      </div> */}

      <div className="flex items-center justify-center w-full h-svh bg-slate-900">
        {/* <img
          src={bgImage}
          alt="background"
          className="absolute inset-0 object-cover w-full h-full"
          style={{ zIndex: -1 }}
        /> */}

        <div className="z-10 text-center">
          <div className="pr-1.5 overflow-hidden text-5xl font-bold text-sky-300 border-r-4 animate-typing whitespace-nowrap border-r-white">
            <h1 className="text-6xl font-bold text-white">Infinite Pixel</h1>
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-white">
            <span className="text-rose-500 ">Coming Soon</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default SplashPage;
