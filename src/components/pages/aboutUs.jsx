// About Us - Page 2

import { useEffect, useContext, useRef } from "react";
import { NavigationContext } from "../../context/navigationContext";

import DynamicComponentLoader from "../../dynamicComponentLoader";

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
  const defaultAboutUsContainer =
    "z-10 grid h-lvh grid-cols-8 overflow-hidden grid-rows-8";
  const mobileAboutUsContainer = "";
  const tabletAboutUsContainer = "";
  const tabletXLAboutUsContainer = "";
  const laptopAboutUsContainer = "";
  const desktopAboutUsContainer = "";
  const desktopXLAboutUsContainer = "";

  //INFO About Us Title
  const defaultAboutUsTitle =
    "col-span-7 col-start-2 col-end-7 row-start-2 text-5xl text-center self-center font-bold leading-normal tracking-normal";
  const mobileAboutUsTitle =
    "mobile:col-start-2 mobile:col-span-6 mobile:text-2xl mobile:row-start-1 mobile:row-span-2";
  const tabletAboutUsTitle = "";
  const tabletXLAboutUsTitle = "";
  const laptopAboutUsTitle = "";
  const desktopAboutUsTitle = "";
  const desktopXLAboutUsTitle = "";

  //INFO About Us Information
  const defaultAboutUsInformation = "col-start-2 col-span-6 row-span-6text-2xl";
  const mobileAboutUsInformation = "mobile:row-start-5";
  const tabletAboutUsInformation = "";
  const tabletXLAboutUsInformation = "";
  const laptopAboutUsInformation = "";
  const desktopAboutUsInformation = "";
  const desktopXLAboutUsInformation = "";

  //INFO Start Your Project Button
  const defaultStartYourProjectButton =
    "self-center col-span-6 p-5 text-4xl leading-none tracking-tight text-center duration-700 rounded-lg d1440:p-6 d1440:col-start-3 d1440:col-span-2 d1440:row-start-6 galaxyS23Ultra:row-start-6 galaxyS23Ultra:mt-48 xs:mt-36 xs:col-start-2 xs:row-start-7 xl:col-span-3 xl:col-start-2 xl:row-start-7 xl:m-2 drop-shadow-xl text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800";
  const mobileStartYourProjectButton =
    "mobile:col-start-2 mobile:col-span-6 mobile:row-start-3 mobile:text-2xl row-span-2";
  const tabletStartYourProjectButton = "";
  const tabletXLStartYourProjectButton = "";
  const laptopStartYourProjectButton = "";
  const desktopStartYourProjectButton = "";
  const desktopXLStartYourProjectButton = "";

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
        ${defaultAboutUsContainer}
        ${mobileAboutUsContainer}
        ${tabletAboutUsContainer}
        ${tabletXLAboutUsContainer}
        ${laptopAboutUsContainer}
        ${desktopAboutUsContainer}
        ${desktopXLAboutUsContainer}
        `}
      >
        {/* INFO About Us Title */}
        {/* Add your rows and columns inside the sub-grid */}
        <div
          className={`
          ${defaultAboutUsTitle}
          ${mobileAboutUsTitle}
          ${tabletAboutUsTitle}
          ${tabletXLAboutUsTitle}
          ${laptopAboutUsTitle}
          ${desktopAboutUsTitle}
          ${desktopXLAboutUsTitle}
          `}
        >
          We design and develop modern mobile first websites to solve real
          business problems
        </div>

        {/* INFO About Us Information */}
        <div
          className={`
        ${defaultAboutUsInformation}
        ${mobileAboutUsInformation}
        ${tabletAboutUsInformation}
        ${tabletXLAboutUsInformation}
        ${laptopAboutUsInformation}
        ${desktopAboutUsInformation}
        ${desktopXLAboutUsInformation}
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
          ${defaultStartYourProjectButton}
          ${mobileStartYourProjectButton}
          ${tabletStartYourProjectButton}
          ${tabletXLStartYourProjectButton}
          ${laptopStartYourProjectButton}
          ${desktopStartYourProjectButton}
          ${desktopXLStartYourProjectButton}
          `}
        >
          Start Your Project
        </button>

        {/* Carousel */}
        {/* if mobile don't show the carousel */}
        {window.innerWidth > 1024 && (
          <DynamicComponentLoader componentName="AboutUsCarousel" />
        )}
      </div>
    </div>
  );
}

export default AboutSection;
