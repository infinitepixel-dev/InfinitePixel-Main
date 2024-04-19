// Hero - Page 1
import { useState, useEffect, useRef } from "react";
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

  const backGroundBlurAmount = 210;
  const backGroundBorderRadius = 50;

  //new code
  const orbRef1 = useRef([]);
  const orbRef2 = useRef([]);
  const orbRef3 = useRef([]);
  const orbRef4 = useRef([]);
  const orbRef5 = useRef([]);

  useEffect(() => {
    // Set initial positions for all orbs, storing them in refs
    const setupOrbs = (orbRefs) => {
      for (let i = 0; i < orbRefs.current.length; i++) {
        const orb = orbRefs.current[i];
        orb.initialLeft = orb.offsetLeft;
        orb.initialTop = orb.offsetTop;
      }
    };

    setupOrbs(orbRef1);
    setupOrbs(orbRef2);
    setupOrbs(orbRef3);
    setupOrbs(orbRef4);
    setupOrbs(orbRef5);

    const moveOrbs = (orbRefs) => {
      for (let i = 0; i < orbRefs.current.length; i++) {
        const orb = orbRefs.current[i];
        // Generate new positions within 25% of their original position
        const deltaX = (Math.random() * 2 - 1) * 0.5 * orb.initialLeft;
        const deltaY = (Math.random() * 2 - 1) * 0.5 * orb.initialTop;
        orb.style.left = `${orb.initialLeft + deltaX}px`;
        orb.style.top = `${orb.initialTop + deltaY}px`;
        orb.style.transform = `scale(${2 + Math.random() * 0.1})`;
        // return to normal size after 2 seconds
        setTimeout(() => {
          orb.style.transform = "scale(1)";
        }, 2000);
      }
    };

    const intervalId = setInterval(() => {
      moveOrbs(orbRef1);
      moveOrbs(orbRef2);
      moveOrbs(orbRef3);
      moveOrbs(orbRef4);
      moveOrbs(orbRef5);
    }, 500); // Update positions every second

    return () => clearInterval(intervalId);
  }, []);
  //new code

  return (
    <div className="relative overflow-hidden">
      {/*NOTE Background Colors */}

      <DynamicComponentLoader componentName="CustomCursor" fade={inHeroPage} />

      {/* randomly move the orbs around the page */}

      {/* only allow the custom cursor component to work inside of heroPage */}
      {/* rose */}
      <div
        ref={(el) => (orbRef1.current[0] = el)}
        className="orb absolute col-start-1 row-start-6 bg-color1"
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
        ref={(el) => (orbRef2.current[0] = el)}
        className="orb absolute col-start-2 row-start-3 bg-color2"
        style={{
          width: "35%",
          height: "45%",
          left: "-20%",
          top: "-12%",

          // width: "40%",
          // height: "60%",
          // left: "25%",
          // top: "25%",
          filter: `blur(${backGroundBlurAmount}px)`,
          borderRadius: `${backGroundBorderRadius}%`,
          zIndex: "-1",
        }}
      ></div>
      {/* sky */}
      <div
        ref={(el) => (orbRef3.current[0] = el)}
        className="orb absolute bg-color3"
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
        ref={(el) => (orbRef4.current[0] = el)}
        className="orb absolute bg-color4"
        style={{
          // width: "35%",
          // height: "45%",
          // left: "-20%",
          // top: "-12%",

          width: "40%",
          height: "60%",
          left: "25%",
          top: "25%",

          filter: `blur(${backGroundBlurAmount}px)`,
          borderRadius: `${backGroundBorderRadius}%`,
          zIndex: "-1",
        }}
      ></div>
      {/* Yellow */}
      <div
        ref={(el) => (orbRef5.current[0] = el)}
        className="orb absolute bg-color5"
        style={{
          width: "50%",
          height: "50%",
          left: "70%",
          top: "70%",
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
