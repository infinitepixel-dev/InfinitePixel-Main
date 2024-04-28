/* eslint-disable no-unused-vars */
// Hero - Page 1
import { useState, useEffect, useRef } from "react";

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
  const backGroundBlurAmount = 150; //Adjusts orbs blur amount
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
  const defaultHeroContainer =
    "z-10 grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8 column";
  const mobileHeroContainer = " mobile:grid-cols-4 mobile:grid-rows-6";
  const tabletHeroContainer = "";
  const tabletXLHeroContainer = "";
  const laptopHeroContainer = "";
  const desktopHeroContainer = "";
  const desktopXLHeroContainer = "";

  //INFO Hero Title
  const defaultHeroTitle =
    "col-span-8 col-start-1 text-md text-center self-center font-bold leading-normal tracking-normal";
  const mobileHeroTitle =
    " mobile:text-lg mobile:row-start-1 mobile:col-span-4 mobile:col-start-1";
  const tabletHeroTitle = "";
  const tabletXLHeroTitle = "";
  const laptopHeroTitle = "";
  const desktopHeroTitle = "";
  const desktopXLHeroTitle = "desktopXL:text-6xl desktopXL:row-start-1";

  //INFO Hero Get Started Button
  const defaultHeroGetStartedButton =
    "self-center col-start-2 col-span-6 row-start-2 mb-12 text-3xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800 shadow-xl";
  const mobileGetStartedButton =
    "mobile:col-start-1 mobile:col-span-4 mobile:row-start-2 mobile:mb-16 mobile:mx-16";
  const tabletGetStartedButton = "";
  const tabletXLGetStartedButton = "";
  const laptopGetStartedButton = "";
  const desktopGetStartedButton = "";
  const desktopXLGetStartedButton =
    "desktopXL:col-start-2 desktop:col-span-2 desktopXL:row-start-2 desktopXL:py-6 desktopXL:mt-28 ";

  //INFO Hero Services
  const default_HeroServicesContainer =
    "grid self-center text-center col-start-1 col-span-12 row-start-4";
  const mobile_HeroServicesContainer =
    "mobile:grid-cols-4 mobile:col-span-4 mobile:row-start-4 mobile:mx-4 mobile:gap-12";
  const desktopXL_HeroServicesContainer =
    "desktopXL:grid-cols-11 desktopXL:row-start-4 desktopXL:mt-48";

  //NOTE Web Services
  const default_webServicesContainer = "col-start-1 col-span-2";
  const mobile_webServicesContainer =
    "mobile:col-start-1 mobile:col-span-2 mobile:row-start-2";
  const desktopXL_WebServicesContainer =
    "desktopXL:col-start-1 desktopXL:col-span-2 desktopXL:row-start-1";

  //NOTE Data Transfer Services
  const default_dataTransferContainer = "col-start-3 col-span-2";
  const mobile_dataTransferContainer =
    "mobile:col-start-3 mobile:col-span-2 mobile:row-start-2";
  const desktopXL_dataTransferContainer =
    "desktopXL:col-start-4 desktopXL:col-span-2 desktopXL:row-start-1";

  //NOTE SEO Services
  const default_SEOContainer = "col-start-3 col-span-2 ";
  const mobile_SEOContainer =
    "mobile:col-start-1 mobile:col-span-2 mobile:row-start-4";
  const desktopXL_SEOContainer =
    "desktopXL:col-start-7 desktopXL:col-span-2 desktopXL:row-start-1";

  //NOTE Additional Web Design Services
  const default_additionalWebDesignContainer = "col-span-2 col-start-4";
  const mobile_additionalWebDesignContainer =
    "mobile:col-start-3 mobile:col-span-2 mobile:row-start-4";
  const desktopXL_additionalWebDesignContainer =
    "desktopXL:col-start-10 desktopXL:col-span-2 desktopXL:row-start-1";

  return (
    <>
      <div className={`relative overflow-hidden h-dvh overscroll-none`}>
        {/*NOTE Background Colors */}
        {/* if in the container dislay the cursor otherwise fade it */}
        <DynamicComponentLoader
          componentName="CustomCursor"
          fade={inHeroPage}
        />

        {/* NOTE Background */}
        <>
          {/* Rose Orb */}
          <div
            ref={(el) => {
              if (orbRefs[0]) {
                orbRefs[0].current = el;
              }
            }}
            className="absolute col-start-1 row-start-6 orb bg-color1"
            style={{
              width: "35%",
              height: "50%",
              left: "-15%",
              top: "60%",
              filter: `blur(${backGroundBlurAmount}px)`,
              borderRadius: `${backGroundBorderRadius}%`,
              zIndex: "-1",
              background: "#eb174c",
            }}
          ></div>
          {/* lime Orb */}
          <div
            ref={(el) => {
              if (orbRefs[1]) {
                orbRefs[1].current = el;
              }
            }}
            className="absolute col-start-2 row-start-3 orb bg-color2"
            style={{
              width: "35%",
              height: "50%",
              left: "-15%",
              top: "-12%", // width: "40%", // height: "60%", //
              filter: `blur(${backGroundBlurAmount}px)`,
              borderRadius: `${backGroundBorderRadius}%`,
              zIndex: "-1",
              background: "#58b327",
            }}
          ></div>
          {/* violet Orb */}
          <div
            ref={(el) => {
              if (orbRefs[2]) {
                orbRefs[2].current = el;
              }
            }}
            className="absolute orb bg-color3"
            style={{
              width: "35%",
              height: "50%",
              left: "75%",
              top: "-15%",
              filter: `blur(${backGroundBlurAmount}px)`,
              borderRadius: `${backGroundBorderRadius}%`,
              zIndex: "-1",
              background: "#6d0ed3",
            }}
          ></div>
          {/* sky Orb */}
          <div
            ref={(el) => {
              if (orbRefs[3]) {
                orbRefs[3].current = el;
              }
            }}
            className="absolute orb bg-color4"
            style={{
              width: "50%",
              height: "50%",
              left: "25%",
              top: "25%",
              filter: `blur(${backGroundBlurAmount}px)`,
              borderRadius: `${backGroundBorderRadius}%`,
              zIndex: "-1",
              background: "#0186f2",
            }}
          ></div>
          {/* Yellow Orb */}
          <div
            ref={(el) => {
              if (orbRefs[4]) {
                orbRefs[4].current = el;
              }
            }}
            className="absolute orb bg-color5"
            style={{
              width: "35%",
              height: "50%",
              left: "75%",
              top: "70%",
              filter: `blur(${backGroundBlurAmount}px)`,
              borderRadius: `${backGroundBorderRadius}%`,
              zIndex: "-1",
              background: "#f7c137",
            }}
          ></div>

          <div id="blur"></div>
        </>

        {/*INFO Hero Container */}
        <div
          id="heroPageElement"
          className={`
          ${defaultHeroContainer}
          ${mobileHeroContainer}
          ${tabletHeroContainer}
          ${tabletXLHeroContainer}
          ${laptopHeroContainer}
          ${desktopHeroContainer}
          ${desktopXLHeroContainer}
          `}
        >
          {/*INFO Hero Title */}
          <>
            <div
              className={`
              ${defaultHeroTitle} 
              ${mobileHeroTitle} 
              ${tabletHeroTitle} 
              ${tabletXLHeroTitle} 
              ${laptopHeroTitle} 
              ${desktopHeroTitle} 
              ${desktopXLHeroTitle} 
              `}
            >
              Developing Responsive Websites
              <div className="row-start-2">For Your Brand</div>
            </div>
          </>
          {/*INFO Hero Get Started Button */}
          <>
            <a
              href="#paymentInformation"
              className={`
              ${defaultHeroGetStartedButton}
              ${mobileGetStartedButton}
              ${tabletGetStartedButton}
              ${tabletXLGetStartedButton}
              ${laptopGetStartedButton}
              ${desktopGetStartedButton}
              ${desktopXLGetStartedButton}
              `}
            >
              Get Started
            </a>

            {/* SECTION Services */}
            {/*INFO Hero Services */}
            <div
              className={`
            ${default_HeroServicesContainer}
            ${mobile_HeroServicesContainer}
            ${desktopXL_HeroServicesContainer}
            `}
            >
              <div
                className={`${default_webServicesContainer} ${mobile_webServicesContainer} ${desktopXL_WebServicesContainer}`}
              >
                <hr className="border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal">
                  Web Design
                </div>
                <div className="mt-2 text-md desktopXL:text-3xl">
                  We create modern and responsive websites that look great on
                  all devices.
                </div>
              </div>

              {/* Data Transfer - Responsive adjustments */}
              <div
                className={`${default_dataTransferContainer} ${mobile_dataTransferContainer} ${desktopXL_dataTransferContainer}`}
              >
                <hr className="border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal">
                  Data Transfer
                </div>
                <div className="mt-2 text-md desktopXL:text-3xl">
                  We transfer your existing website to a modern platform with
                  ease.
                </div>
              </div>

              {/* SEO - Adjusted for responsive grid */}
              <div
                className={`
              ${default_SEOContainer}}
              ${mobile_SEOContainer}
              ${desktopXL_SEOContainer}
              `}
              >
                <hr className="border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal">
                  SEO
                </div>
                <div className="mt-2 text-md desktopXL:text-3xl">
                  We help your website rank higher in search engines.
                </div>
              </div>

              {/* Additional Web Design Section if needed, or use for another service */}
              <div
                className={`
                ${default_additionalWebDesignContainer}
                ${mobile_additionalWebDesignContainer}
                ${desktopXL_additionalWebDesignContainer}
                `}
              >
                <hr className="border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal">
                  More Web Design
                </div>
                <div className="mt-2 text-md desktopXL:text-3xl">
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
