/* eslint-disable no-unused-vars */
// About Us - Page 2

import { useEffect, useContext, useRef } from "react";
import { NavigationContext } from "../../../context/navigationContext";
import CarouselWithButtons from "../../menus/carousel-with-buttons";

import DynamicComponentLoader from "../../../dynamicComponentLoader";

function AboutSection() {
  const { setIsAboutPage } = useContext(NavigationContext);
  const ref = useRef(null); // Reference to the component's DOM element
  // Intersection Observer to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsAboutPage(entry.isIntersecting);
      },
      {
        root: null, // Using the viewport as the container
        rootMargin: "0px",
        threshold: 0.1, // 10% of the element should be visible
      }
    );

    // Attach the observer to the ref element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [setIsAboutPage]);

  //NOTE - Device Layouts
  //INFO About Us Container
  const default_AboutUsContainer =
    "z-10 grid h-lvh grid-cols-8 overflow-hidden grid-rows-8";
  const mobileSM_AboutUsContainer = "";
  const mobile_AboutUsContainer = "";
  const tablet_AboutUsContainer = "";
  const tabletXL_AboutUsContainer = "";
  const laptop_AboutUsContainer = "";
  const desktop_AboutUsContainer = "";
  const desktopXL_AboutUsContainer = "";
  const desktopXXL_AboutUsContainer = "";

  //INFO About Us Title
  const default_AboutUsTitle =
    "col-span-8 col-start-1 text-md text-center self-center font-bold leading-normal tracking-normal";
  const mobileSM_AboutUsTitle =
    "mobileSM:col-start-2 mobileSM:col-span-6 mobileSM:text-2xl mobileSM:row-start-1 mobileSM:row-span-2";
  const mobile_AboutUsTitle =
    "mobile:col-start-2 mobile:col-span-6 mobile:text-2xl mobile:row-start-1 mobile:row-span-2";
  const tablet_AboutUsTitle = "";
  const tabletXL_AboutUsTitle = "";
  const laptop_AboutUsTitle =
    "laptop:col-start-2 laptop:col-span-5 laptop:text-left laptop:row-start-1 laptop:text-6xl";

  const desktop_AboutUsTitle =
    "desktop:col-start-1 desktop:col-span-5 desktop:text-left desktop:row-start-2 desktop:text-7xl desktop:mx-32 desktop:mb-32";
  const desktopXL_AboutUsTitle = "";
  const desktopXXL_AboutUsTitle = "";

  //INFO About Us Information
  const default_AboutUsInformation =
    "col-start-2 col-span-6 row-span-6text-2xl";
  const mobileSM_AboutUsInformation = "mobileSM:row-start-5";
  const mobile_AboutUsInformation = "mobile:row-start-5";
  const tablet_AboutUsInformation = "";
  const tabletXL_AboutUsInformation = "";
  const laptop_AboutUsInformation = "laptop:row-start-3";
  const desktop_AboutUsInformation =
    "desktop:col-start-1 desktop:row-start-3 desktop:col-span-4 desktop:m-32";
  const desktopXL_AboutUsInformation = "";
  const desktopXXL_AboutUsInformation = "";

  //INFO Start Your Project Button
  const default_StartYourProjectButton =
    "self-center col-span-6 p-5 text-4xl leading-none tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 hover:bg-violet-800";
  const mobileSM_StartYourProjectButton =
    "mobileSM:col-start-2 mobileSM:col-span-6 mobileSM:row-start-3 mobileSM:text-2xl row-span-2";
  const mobile_StartYourProjectButton =
    "mobile:col-start-2 mobile:col-span-6 mobile:row-start-3 mobile:text-2xl row-span-2";
  const tablet_StartYourProjectButton = "";
  const tabletXL_StartYourProjectButton = "";
  const laptop_StartYourProjectButton =
    "laptop:col-start-4 laptop:row-start-3 laptop:mt-16 laptop:col-span-2";
  const desktop_StartYourProjectButton =
    " desktop:col-start-2 desktop:row-start-5 desktop:col-span-2";
  const desktopXL_StartYourProjectButton = "";
  const desktopXXL_StartYourProjectButton = "";

  //INFO Carousel
  const default_Carousel =
    "col-start-5 col-span-4 row-start-2 row-span-5 mx-32 h-full carousel carousel-vertical rounded-box";
  const mobileSM_Carousel = "";
  const mobile_Carousel = "";
  const tablet_Carousel = "";
  const tabletXL_Carousel = "";
  const laptop_Carousel =
    "laptop:col-start-1 laptop:col-span-8 laptop:row-start-5 laptop:row-span-3";
  const desktop_Carousel = "";
  const desktopXL_Carousel = "";
  const desktopXXL_Carousel = "";

  return (
    <div ref={ref} className="relative overflow-hidden h-lvh overscroll-none">
      {/* Background image with opacity */}
      {/*TODO Convert JPG TO SVG */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/sectionbg.jpg')] bg-cover bg-center opacity-[.03]"
        style={{
          zIndex: -1,
        }}
      />
      {/* INFO About Us Container */}
      <div
        className={`
        ${default_AboutUsContainer}
        ${mobile_AboutUsContainer}
        ${tablet_AboutUsContainer}
        ${tabletXL_AboutUsContainer}
        ${laptop_AboutUsContainer}
        ${desktop_AboutUsContainer}
        ${desktopXL_AboutUsContainer}
        ${desktopXXL_AboutUsContainer}
        `}
      >
        {/* INFO About Us Title */}
        {/* Add your rows and columns inside the sub-grid */}
        <div
          className={`
          ${default_AboutUsTitle}
          ${mobileSM_AboutUsTitle}
          ${mobile_AboutUsTitle}
          ${tablet_AboutUsTitle}
          ${tabletXL_AboutUsTitle}
          ${laptop_AboutUsTitle}
          ${desktop_AboutUsTitle}
          ${desktopXL_AboutUsTitle}
          ${desktopXXL_AboutUsTitle}
          `}
        >
          We design and develop modern mobile first websites to solve real
          business problems
        </div>

        {/* INFO About Us Information */}
        <div
          className={`
        ${default_AboutUsInformation}
        ${mobileSM_AboutUsInformation}
        ${mobile_AboutUsInformation}
        ${tablet_AboutUsInformation}
        ${tabletXL_AboutUsInformation}
        ${laptop_AboutUsInformation}
        ${desktop_AboutUsInformation}
        ${desktopXL_AboutUsInformation}
        ${desktopXXL_AboutUsInformation}
        `}
        >
          <p className="information-top">
            If you are just starting a new business, or looking to redesign your
            current website. Infinite Pixel has you covered, our team has a vast
            array of expertise in Design & Implementation, Ecommerce, and
            Marketing/SEO.
          </p>

          <p className="pt-3 mt-2 information-bottom">
            If you are looking to streamline your business, enhance user
            experience, or bring your ideas to life.{" "}
            <span className="text-purple-800">Infinite Pixel </span>
            is here to help your reach your goals.
          </p>
        </div>

        {/* INFO Start Your Project Button */}
        <button
          className={`
          ${default_StartYourProjectButton}
          ${mobileSM_StartYourProjectButton}
          ${mobile_StartYourProjectButton}
          ${tablet_StartYourProjectButton}
          ${tabletXL_StartYourProjectButton}
          ${laptop_StartYourProjectButton}
          ${desktop_StartYourProjectButton}
          ${desktopXL_StartYourProjectButton}
          ${desktopXXL_StartYourProjectButton}
          `}
        >
          Start Your Project
        </button>

        {/*INFO-JSX Carousel */}

        {window.innerWidth > 1024 ? (
          // <DynamicComponentLoader componentName="AboutUsCarousel" />
          <div
            className={`
          ${default_Carousel}
          ${mobileSM_Carousel}
          ${mobile_Carousel}
          ${tablet_Carousel}
          ${tabletXL_Carousel}
          ${laptop_Carousel}
          ${desktop_Carousel}
          ${desktopXL_Carousel}
          ${desktopXXL_Carousel}
          `}
          >
            <CarouselWithButtons />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AboutSection;
