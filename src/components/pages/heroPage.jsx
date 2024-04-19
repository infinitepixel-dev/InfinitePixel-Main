// Hero - Page 1
import { useState } from "react";
import "./heroPage.css";

import DynamicComponentLoader from "../../dynamicComponentLoader";

function HeroPage() {
  const [inHeroPage, setinHeroPage] = useState(false);

  //wait for the page to load
  setTimeout(() => {
    let hero = document.getElementById("heroPageElement");

    // //add mouses hover edvent listener to heroPageElement
    hero.addEventListener("mouseover", () => {
      // console.log("mouse over hero page");
      setinHeroPage(false);
    });

    //if the mouse leaves the heroPageElement, set inHeroPage to false
    hero.addEventListener("mouseleave", () => {
      // console.log("mouse left hero page");
      //allow the opacity of the custom cursor to fade out

      setinHeroPage(true);
    });
  }, 1000);

  const backGroundBlurAmount = 400;
  const backGroundBorderRadius = 50;

  return (
    <div className="relative overflow-hidden">
      {/*NOTE Background Colors */}

      <DynamicComponentLoader componentName="CustomCursor" fade={inHeroPage} />

      {/* only allow the custom cursor component to work inside of heroPage */}
      {/* rose */}
      <div
        className="absolute col-start-1 row-start-6 bg-color1"
        style={{
          width: "50%",
          height: "50%",
          left: "-10%",
          top: "60%",
          filter: `blur(${backGroundBlurAmount}px)`,
          borderRadius: `${backGroundBorderRadius}%`,
          zIndex: "-1",
        }}
      ></div>
      {/* lime */}
      <div
        className="absolute col-start-2 row-start-3 bg-color2"
        style={{
          width: "40%",
          height: "60%",
          left: "25%",
          top: "25%",
          filter: `blur(${backGroundBlurAmount}px)`,
          borderRadius: `${backGroundBorderRadius}%`,
          zIndex: "-1",
        }}
      ></div>
      {/* sky */}
      <div
        className="absolute bg-color3"
        style={{
          width: "30%",
          height: "40%",
          left: "65%",
          top: "-15%",
          filter: `blur(${backGroundBlurAmount}px)`,
          borderRadius: `${backGroundBorderRadius}%`,
          zIndex: "-1",
        }}
      ></div>
      {/* violet */}
      <div
        className="absolute bg-color4"
        style={{
          width: "35%",
          height: "45%",
          left: "72%",
          top: "50%",
          filter: `blur(${backGroundBlurAmount}px)`,
          borderRadius: `${backGroundBorderRadius}%`,
          zIndex: "-1",
        }}
      ></div>
      {/* Sub-grid for Page 1 */}
      <div
        id="heroPageElement"
        className="z-10 grid w-full h-screen grid-cols-12 gap-1 mb-8 overflow-auto grid-rows-7 column"
      >
        {/* Add your rows and columns inside the sub-grid */}

        <div className="col-span-6 col-start-2 col-end-5 row-start-2 row-end-4">
          <div className="text-4xl font-bold leading-normal tracking-normal md:text-5xl">
            Developing Responsive Websites <br></br>
            <span className="text-4xl leading-7 md:text-5xl">
              For Your Brand
            </span>
            <button
              className="mt-5 text-5xl leading-normal tracking-tight text-center duration-700 text-slate-150 bg-violet-600 md:text-2x1 hover:bg-violet-700"
              style={{
                position: "relative",
                width: "350px",
                height: "89px",
                borderRadius: "15px",
              }}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* section for Web Design, Data Transfer, SEO, and Web Design */}
        <div className="grid grid-cols-1 col-span-8 col-start-3 row-span-2 row-start-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Web Design */}
          <div className="col-span-2 row-span-2">
            <div className="text-2xl font-bold leading-normal tracking-normal md:text-3xl">
              Web Design
            </div>
            <div className="text-xl leading-7">
              We create modern and responsive websites that look great on all
              devices.
            </div>
          </div>

          {/* Data Transfer */}
          <div className="col-span-2 row-span-2">
            <div className="text-2xl font-bold leading-normal tracking-normal md:text-3xl">
              Data Transfer
            </div>
            <div className="text-xl leading-7">
              We transfer your existing website to a modern platform with ease.
            </div>
          </div>

          {/* SEO */}
          <div className="col-span-2 row-span-2">
            <div className="text-2xl font-bold leading-normal tracking-normal md:text-3xl">
              SEO
            </div>
            <div className="text-xl leading-7">
              We help your website rank higher in search engines.
            </div>
          </div>

          {/* Web Design */}
          <div className="col-span-2 row-span-2">
            <div className="text-2xl font-bold leading-normal tracking-normal md:text-3xl">
              Web Design
            </div>
            <div className="text-xl leading-7">
              We create modern and responsive websites that look great on all
              devices.
            </div>
          </div>
          {/* end of grid */}
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
