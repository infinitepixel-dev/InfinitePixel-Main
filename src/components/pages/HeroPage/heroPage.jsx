/* eslint-disable no-unused-vars */
// Hero - Page 1
import React, { lazy, Suspense, useState, useEffect, useRef } from "react"; // React Library

// import DynamicComponentLoader from "../../../dynamicComponentLoader"; // Dynamic Component Loader

const DynamicComponentLoader = lazy(
  () => import("../../../dynamicComponentLoader")
); // Lazy loaded Dynamic Component Loader
// Lazy load the components
const HeroBackground = lazy(() => import("./heroBackground")); // Lazy loaded Hero Background
const Services = lazy(() => import("./services")); // Lazy loaded Services
const ActionButton = lazy(() => import("../../buttons/actionButton")); // Lazy loaded Action Button
// const FadeIn = lazy(() => import("../../effects/animations/fadeIn")); // Lazy loaded Fade In animation

function HeroPage() {
  //NOTE Used to check if the cursor is in the hero page
  const [inHeroPage, setInHeroPage] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [desktopAnimation, setDesktopAnimation] = useState("");

  const heroRef = useRef(false);

  //Intersection Observer for visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.8 } //0.8 means 80% of the element is visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect(); //disconnect the observer when the component is unmounted
  }, []);

  //if the hero page is left set isVisble to false
  useEffect(() => {
    if (!isVisible) {
      setInHeroPage(false);
    }

    // console.log("isVisible", isVisible);
  }, [isVisible]);

  // Mouse event listeners
  useEffect(() => {
    const hero = document.getElementById("heroPageElement");
    if (hero) {
      const onMouseOver = () => setInHeroPage(false);
      const onMouseLeave = () => setInHeroPage(true);

      hero.addEventListener("mouseover", onMouseOver, { passive: true });
      hero.addEventListener("mouseleave", onMouseLeave, { passive: true });

      return () => {
        hero.removeEventListener("mouseover", onMouseOver);
        hero.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  //#region Page Layout
  //SECTION Device Layouts
  //INFO Hero Container
  const default_HeroContainer =
    "grid grid-cols-12 grid-rows-8 z-10  h-lvh overflow-hidden";
  const mobileSM_HeroContainer = "mobileSM:grid-cols-4 mobileSM:grid-rows-6";
  const mobile_HeroContainer = "";
  const tablet_HeroContainer = "";
  const tabletXL_HeroContainer = "";
  const laptop_HeroContainer = "";
  const desktop_HeroContainer = "";
  const desktopXL_HeroContainer =
    "desktopXL:grid-cols-12 desktopXL:grid-rows-8";
  const desktopXXL_HeroContainer = "";

  //INFO Hero Title
  const default_HeroTitle =
    "col-span-8 col-start-1 text-md text-center self-center font-bold leading-normal tracking-normal";
  const mobileSM_HeroTitle =
    "mobileSM:text-2xl mobileSM:row-start-1 mobileSM:row-span-2 mobileSM:col-span-4 mobileSM:col-start-1 mobileSM:mb-20";
  const mobile_HeroTitle = "mobile:col-start-2 mobile:col-span-2";
  const tablet_HeroTitle = "tablet:col-start-2 tablet:text-xl tablet:mb-10";
  const tabletXL_HeroTitle = "";
  const laptop_HeroTitle = "";
  const desktop_HeroTitle = "";
  const desktopXL_HeroTitle =
    "desktopXL:col-start-2 desktopXL:col-span-5 desktopXL:text-left desktopXL:row-start-2 desktopXL:text-8xl";
  const desktopXXL_HeroTitle = "";

  //INFO Hero Get Started Button
  const default_HeroGetStartedButton =
    "self-center col-start-2 col-span-2 p-5 row-start-2 mb-12 text-3xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800 shadow-xl";
  const mobileSM_GetStartedButton =
    "mobileSM:col-start-1 mobileSM:col-span-4 mobileSM:row-start-2 mobileSM:text-2xl mobileSM:row-span-2 mobileSM:mb-14 mobileSM:mx-16";
  const mobile_GetStartedButton = "";
  const tablet_GetStartedButton =
    "tablet:col-start-2 tablet:col-span-2 tablet:mt-2 tablet:p-2 tablet:text-2xl";
  const tabletXL_GetStartedButton = "";
  const laptop_GetStartedButton = "";
  const desktop_GetStartedButton = "";
  const desktopXL_GetStartedButton =
    "desktopXL:col-start-2 desktopXL:col-span-4 desktopXL:row-start-4 desktopXL:py-6 desktopXL:text-5xl desktopXL:self-center desktopXL:mx-0 desktopXL:mt-32 ";
  const desktopXXL_GetStartedButton = "";
  -72;
  //#endregion

  //!SECTION Device Layouts

  //SECTION JSX Structure
  return (
    <Suspense
      fallback={<div className="self-center text-center">Loading...</div>}
    >
      {" "}
      {/* Provide a fallback while components are loading */}
      <>
        {/*NOTE Custom Cursor */}
        {/* if in the container dislay the cursor otherwise fade it */}
        <DynamicComponentLoader
          componentName="CustomCursor"
          fade={isVisible ? false : true}
        />

        {/*NOTE Background Colors */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "-1", // Ensure this layer is above some elements and below others
            backdropFilter: isVisible ? "blur(125px)" : "blur(0px)",
            transition: "backdrop-filter 0.5s ease-out, opacity 0.5s ease-out",

            overflow: "hidden", //hide excess background
          }}
        />

        <div
          ref={heroRef}
          className={`relative overflow-hidden w-lvh h-lvh overscroll-none`}
        >
          <HeroBackground isVisible={isVisible} />

          {/*INFO-JSX Hero Container */}
          <div
            id="heroPage"
            className={`
          ${default_HeroContainer}
          ${mobileSM_HeroContainer}
          ${mobile_HeroContainer}
          ${tablet_HeroContainer}
          ${tabletXL_HeroContainer}
          ${laptop_HeroContainer}
          ${desktop_HeroContainer}
          ${desktopXL_HeroContainer}
          ${desktopXXL_HeroContainer}
          `}
          >
            <>
              {/*INFO-JSX Hero Title */}
              <div
                className={`
              ${default_HeroTitle}
              ${mobileSM_HeroTitle}
              ${mobile_HeroTitle}
              ${tablet_HeroTitle}
              ${tabletXL_HeroTitle}
              ${laptop_HeroTitle}
              ${desktop_HeroTitle}
              ${desktopXL_HeroTitle}
              ${desktopXXL_HeroTitle}
              `}
              >
                Developing Responsive Websites
                <div className="row-start-2">For Your Brand</div>
              </div>

              {/*INFO-JSX Hero Get Started Button */}
              <ActionButton
                defaultClass={default_HeroGetStartedButton}
                mobileSMClass={mobileSM_GetStartedButton}
                mobileClass={mobile_GetStartedButton}
                tabletClass={tablet_GetStartedButton}
                tabletXLClass={tabletXL_GetStartedButton}
                laptopClass={laptop_GetStartedButton}
                desktopClass={desktop_GetStartedButton}
                desktopXLClass={desktopXL_GetStartedButton}
                desktopXXLClass={desktopXXL_GetStartedButton}
                buttonText="Get Started"
                hrefValue="#paymentInformation"
                animation={
                  <DynamicComponentLoader
                    componentName="FadeIn"
                    duration={3.4}
                    opacityStart={0}
                    opacityEnd={1}
                  />
                }
              />
            </>

            {/* INFO-JSX Services */}
            <Services
              desktopAnimation={desktopAnimation}
              setDesktopAnimation={setDesktopAnimation}
            />
          </div>
        </div>
      </>
    </Suspense>
  );
  //!SECTION - JSX Structure - End
}

export default HeroPage;
