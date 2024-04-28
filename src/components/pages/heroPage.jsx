/* eslint-disable no-unused-vars */
// Hero - Page 1
import { useState, useEffect, useRef } from "react";
import "./heroPage.css";

import DynamicComponentLoader from "../../dynamicComponentLoader";

function HeroPage() {
  //NOTE Used to check if the cursor is in the hero page
  const [inHeroPage, setInHeroPage] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("heroPageElement");
    if (hero) {
      const onMouseOver = () => setInHeroPage(false);
      const onMouseLeave = () => setInHeroPage(true);

      hero.addEventListener("mouseover", onMouseOver);
      hero.addEventListener("mouseleave", onMouseLeave);

      return () => {
        hero.removeEventListener("mouseover", onMouseOver);
        hero.removeEventListener("mouseleave", onMouseLeave);
      };
    }

    console.log("In Hero Page:", inHeroPage);
  }, [inHeroPage]);

  //NOTE Used to move the orbs in the background around the page
  const backGroundBlurAmount = 100; //Adjusts orbs blur amount
  const backGroundBorderRadius = 50; //Adjusts orbs border radius

  //Creates an array of references to the orbs
  const orbRefs = useRef(Array.from({ length: 5 }, () => ({ current: null })));

  useEffect(() => {
    const moveOrbs = () => {
      orbRefs.current.forEach((ref) => {
        if (ref.current) {
          // Check if the element exists
          const maxMovement = window.innerWidth < 768 ? 30 : 60;
          const deltaX = (Math.random() * 2 - 1) * maxMovement;
          const deltaY = (Math.random() * 2 - 1) * maxMovement;
          ref.current.style.left = `${parseFloat(ref.current.style.left || 0) + deltaX}px`;
          ref.current.style.top = `${parseFloat(ref.current.style.top || 0) + deltaY}px`;
          ref.current.style.transform = `scale(${2 + Math.random() * 0.1})`;

          setTimeout(() => {
            if (ref.current) {
              ref.current.style.transform = "scale(1)";
              //zindex -1
            }
          }, 2000);
        }
      });
    };

    const intervalId = setInterval(moveOrbs, 500);
    return () => clearInterval(intervalId);
  }, []);

  //NOTE - Device Layouts
  //INFO Hero Container
  const mobileHeroContainer = "";
  const tabletHeroContainer = "";
  const tabletXLHeroContainer = "";
  const laptopHeroContainer = "";
  const desktopHeroContainer = "";
  const desktopXLHeroContainer = "";
  //INFO Hero Title
  const mobileHeroTitle =
    "mobile:text-lg mobile:mt-0 mobile:mb-2 mobile:text-center mobile:self-center mobile:font-bold mobile:leading-normal mobile:tracking-normal";
  const tabletHeroTitle =
    "tablet:text-2xl tablet:mt-0 tablet:mb-2 tablet:text-center tablet:self-center tablet:font-bold tablet:leading-normal tablet:tracking-normal";
  const tabletXLHeroTitle =
    "tabletXL:text-3xl tabletXL:mt-0 tabletXL:mb-2 tabletXL:text-center tabletXL:self-center tabletXL:font-bold tabletXL:leading-normal tabletXL:tracking-normal";
  const laptopHeroTitle = "";
  const desktopHeroTitle = "";
  const desktopXLHeroTitle = "";
  //INFO Hero Get Started Button
  const mobileGetStartedButton = "";
  const tabletGetStartedButton = "";
  const tabletXLGetStartedButton = "";
  const laptopGetStartedButton = "";
  const desktopGetStartedButton = "";
  const desktopXLGetStartedButton = "";
  //INFO Hero Services
  const mobileHeroServices = "";
  const tabletHeroServices = "";
  const tabletXLHeroServices = "";
  const laptopHeroServices = "";
  const desktopHeroServices = "";
  const desktopXLHeroServices = "";

  return (
    <>
      <div
        className={`relative overflow-hidden h-dvh overscroll-none ${mobileHeroContainer}`}
      >
        {/*NOTE Background Colors */}
        {/* if in the container dislay the cursor otherwise fade it */}
        <DynamicComponentLoader
          componentName="CustomCursor"
          fade={inHeroPage}
        />

        {/* NOTE Background */}
        <>
          <div
            ref={(el) => {
              if (orbRefs[0]) {
                orbRefs[0].current = el;
              }
            }}
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
            ref={(el) => {
              if (orbRefs[1]) {
                orbRefs[1].current = el;
              }
            }}
            className="absolute col-start-2 row-start-3 orb bg-color2"
            style={{
              width: "35%",
              height: "45%",
              left: "-20%",
              top: "-12%", // width: "40%", // height: "60%", //
              filter: `blur(${backGroundBlurAmount}px)`,
              borderRadius: `${backGroundBorderRadius}%`,
              zIndex: "-1",
            }}
          ></div>
          {/* sky */}
          <div
            ref={(el) => {
              if (orbRefs[2]) {
                orbRefs[2].current = el;
              }
            }}
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
            ref={(el) => {
              if (orbRefs[3]) {
                orbRefs[3].current = el;
              }
            }}
            className="absolute orb bg-color4"
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
          {/* Yellow */}
          <div
            ref={(el) => {
              if (orbRefs[4]) {
                orbRefs[4].current = el;
              }
            }}
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

        {/*INFO Hero Container */}
        <div
          id="heroPageElement"
          className="z-10 grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8 column"
        >
          {/*INFO Hero Title */}
          <>
            <div
              className={`col-span-6 col-start-2 px-1 mt-0 mb-2 text-md text-center self-center font-bold leading-normal tracking-normal ${mobileHeroTitle} ${tabletHeroTitle} ${tabletXLHeroTitle} ${laptopHeroTitle} ${desktopHeroTitle} ${desktopXLHeroTitle}`}
            >
              Developing Responsive Websites
              <div className="row-start-2">For Your Brand</div>
            </div>
          </>
          {/*INFO Hero Get Started Button */}
          <>
            <a
              href="#paymentInformation"
              className="self-center col-start-2 col-span-6 row-start-2 mb-12 text-3xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800"
            >
              Get Started
            </a>

            {/* SECTION Services */}
            {/*INFO Hero Services */}
            <div className="self-center col-span-6 col-start-2 row-start-5">
              <div className="col-start-1 mt-8 mb-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-base font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 galaxyS23Ultra:text-xl sm:text-xl lg:text-3xl">
                  Web Design
                </div>
                <div className="mt-2 text-sm">
                  We create modern and responsive websites that look great on
                  all devices.
                </div>
              </div>

              {/* Data Transfer - Responsive adjustments */}
              <div className="col-start-1 mb-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  Data Transfer
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  We transfer your existing website to a modern platform with
                  ease.
                </div>
              </div>

              {/* SEO - Adjusted for responsive grid */}
              <div className="col-span-2 col-start-3 mb-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  SEO
                </div>
                <div className="mt-2 text-lg leading-7 galaxyS23Ultra:text-sm sm:text-xl lg:text-xl">
                  We help your website rank higher in search engines.
                </div>
              </div>

              {/* Additional Web Design Section if needed, or use for another service */}
              <div className="col-span-2 col-start-3 mb-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  More Web Design
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  Advanced solutions for web design challenges.
                </div>
              </div>
            </div>
            {/* !SECTION Services - End*/}
          </>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
