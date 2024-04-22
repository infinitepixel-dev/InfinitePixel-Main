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

  const backGroundBlurAmount = 100;
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
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 768;
      const maxMovement = isMobile ? 30 : 60; // Maximum pixel movement

      for (let i = 0; i < orbRefs.current.length; i++) {
        const orb = orbRefs.current[i];
        // Generate new positions within a specific pixel range
        const deltaX = (Math.random() * 2 - 1) * maxMovement; // New fixed range instead of percentage
        const deltaY = (Math.random() * 2 - 1) * maxMovement;
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
    <div className="relative overflow-hidden h-dvh overscroll-none">
      {/*NOTE Background Colors */}

      <DynamicComponentLoader componentName="CustomCursor" fade={inHeroPage} />

      {/* randomly move the orbs around the page */}

      {/* only allow the custom cursor component to work inside of heroPage */}

      <>
        {/* rose */}
        <div
          ref={(el) => (orbRef1.current[0] = el)}
          className="absolute col-start-1 row-start-6 orb bg-color1"
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
          className="absolute col-start-2 row-start-3 orb bg-color2"
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
          className="absolute orb bg-color3"
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
          className="absolute orb bg-color4"
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
          className="absolute orb bg-color5"
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

        <div id="blur"></div>
      </>

      {/* Sub-grid for Page 1 */}
      <div
        id="heroPageElement"
        className="z-10 grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8 galaxyS23Ultra:grid-rows-8 column"
      >
        {/* Add your rows and columns inside the sub-grid */}

        <div className="col-span-7 col-start-2 col-end-7 galaxyS23Ultra:col-start-2 galaxyS23Ultra:text-2xl galaxyS23Ultra:col-span-6 lg:mt-[-.7em] row-start-2 text-5xl font-bold leading-normal tracking-normal lg:text-8xl xs:text-5xl xl:row-start-2 xl:col-start-2 xl:col-span-3 xs:row-start-2 xs:mt-[-1.8em]">
          Developing Responsive Websites
          <span className="lg:mt-[10em]"> For Your Brand</span>
        </div>

        {/* Uses self-start and self-end to align within the cells*/}
        <a
          href="#paymentInformation"
          className="self-center col-start-2 col-end-8 row-start-4 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg d1440:text-5xl galaxyS23Ultra:col-start-2 galaxyS23Ultra:col-span-6 galaxyS23Ultra:row-start-2 galaxyS23Ultra:mt-8 d1440:row-start-5 d1440:p-4 d1440:col-span-2 d1440:col-start-2 text-slate-150 bg-violet-600 md:text-2x1 hover:bg-violet-700"
        >
          Get Started
        </a>

        {/* section for Web Design, Data Transfer, SEO, and Web Design */}
        <div className="grid grid-cols-1 col-span-6 col-start-2 row-start-5 galaxyS23Ultra:mt-6 galaxyS23Ultra:row-start-3 d1440:row-start-4 ">
          {/* Web Design - Adjusted for responsive behavior */}
          <div className="xl:m-3 galaxyS23Ultra:mt-0 xs:mt-16 lg:mt-6 xs:row-start-1 xs:col-start-2 xs:col-span-6 sm:col-span-2 lg:row-start-1 lg:col-start-1 lg:col-span-2 xl:col-span-2 xl:row-start-1 xl:col-start-1">
            <hr className="w-full border-t-2 border-gray-300" />
            <div className="mt-2 text-base font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 galaxyS23Ultra:text-xl sm:text-xl lg:text-3xl">
              Web Design
            </div>
            <div className="mt-2 text-sm galaxyS23Ultra:text-sm sm:text-lg lg:text-xl">
              We create modern and responsive websites that look great on all
              devices.
            </div>
          </div>

          {/* Data Transfer - Responsive adjustments */}
          <div className="xl:m-3 xs:mt-6 xs:row-start-2 xs:col-start-2 xs:col-span-6 lg:row-start-1 lg:col-start-5 lg:col-span-2 xl:col-span-2 xl:row-start-1 xl:col-start-3">
            <hr className="w-full border-t-2 border-gray-300" />
            <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
              Data Transfer
            </div>
            <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
              We transfer your existing website to a modern platform with ease.
            </div>
          </div>

          {/* SEO - Adjusted for responsive grid */}
          <div className="xl:m-3 xs:mt-6 xs:row-start-3 xs:col-start-2 xs:col-span-6 sm:col-span-2 lg:row-start-3 lg:col-start-1 lg:col-span-2 xl:col-span-2 xl:row-start-1 xl:col-start-5">
            <hr className="w-full border-t-2 border-gray-300" />
            <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
              SEO
            </div>
            <div className="mt-2 text-lg leading-7 galaxyS23Ultra:text-sm sm:text-xl lg:text-xl">
              We help your website rank higher in search engines.
            </div>
          </div>

          {/* Additional Web Design Section if needed, or use for another service */}
          <div className="xl:m-3 xs:mt-6 xs:row-start-4 xs:col-start-2 xs:col-span-6 sm:col-span-2 lg:row-start-3 lg:col-start-5 lg:col-span-2 xl:col-span-2 xl:row-start-1 xl:col-start-7">
            <hr className="w-full border-t-2 border-gray-300" />
            <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
              More Web Design
            </div>
            <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
              Advanced solutions for web design challenges.
            </div>
          </div>
          {/* sub grid end */}
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
