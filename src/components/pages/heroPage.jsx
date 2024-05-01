/* eslint-disable no-unused-vars */
// Hero - Page 1
import { useState, useEffect, useRef } from "react";

import gsap from "gsap";

import DynamicComponentLoader from "../../dynamicComponentLoader";

function HeroPage() {
  //NOTE Used to check if the cursor is in the hero page
  const [inHeroPage, setInHeroPage] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const heroRef = useRef(null);

  function displayBG() {
    return (
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
            zIndex: "-2",
            background: "#eb174c71",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
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
            zIndex: "-2",
            background: "#58b32771",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
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
            zIndex: "-2",
            background: "#6d0ed371",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
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
            zIndex: "-2",
            background: "#0186f271",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
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
            zIndex: "-2",
            background: "#f7c13771",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
          }}
        ></div>
      </>
    );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        setIsVisible(isVisible);
      },
      { threshold: 0.8 } //0.8 means 80% of the element is visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect(); // Cleanup more generically
  }, []);

  //if the hero page is left set isVisble to false
  useEffect(() => {
    if (!isVisible) {
      setInHeroPage(false);
    }

    console.log("isVisible", isVisible);
  }, [isVisible]);

  useEffect(() => {
    const hero = document.getElementById("heroPageElement");
    if (hero) {
      const onMouseOver = () => setInHeroPage(false);
      const onMouseLeave = () => setInHeroPage(true);

      hero.addEventListener("mouseover", onMouseOver, { passive: true });
      hero.addEventListener("mouseleave", onMouseLeave, { passive: true });

      return () => {
        hero.removeEventListener("mouseover", onMouseOver, { passive: true });
        hero.removeEventListener("mouseleave", onMouseLeave, { passive: true });
      };
    }
  }, [inHeroPage]);

  //NOTE Used to move the orbs in the background around the page
  const backGroundBlurAmount = 50; //Adjusts orbs blur amount
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

  //SECTION Device Layouts
  //INFO Hero Container
  const default_HeroContainer =
    "grid grid-cols-12 grid-rows-8 z-10  h-lvh overflow-hidden";
  const mobileSM_HeroContainer = "mobileSM:grid-cols-4 mobileSM:grid-rows-6";
  const mobile_HeroContainer = "mobile:grid-cols-4 mobile:grid-rows-6";
  const tablet_HeroContainer = "";
  const tabletXL_HeroContainer = "";
  const laptop_HeroContainer = "";
  const desktop_HeroContainer = "";
  const desktopXL_HeroContainer =
    "desktopXL:grid-cols-12 desktopXL:grid-rows-8";

  //INFO Hero Title
  const default_HeroTitle =
    "col-span-8 col-start-1 text-md text-center self-center font-bold leading-normal tracking-normal";
  const mobileSM_HeroTitle =
    "mobileSM:text-2xl mobileSM:row-start-1 mobileSM:row-span-2 mobileSM:col-span-4 mobileSM:col-start-1 mobileSM:mb-20";
  const mobile_HeroTitle =
    "mobile:text-2xl mobile:row-start-1 mobile:row-span-2 mobile:col-span-2 mobile:col-start-2 mobile:mb-20";
  const tablet_HeroTitle = "";
  const tabletXL_HeroTitle = "";
  const laptop_HeroTitle = "";
  const desktop_HeroTitle = "";
  const desktopXL_HeroTitle =
    "desktopXL:col-start-2 desktopXL:col-span-5 desktopXL:text-left desktopXL:row-start-2 desktopXL:text-8xl";

  //INFO Hero Get Started Button
  const default_HeroGetStartedButton =
    "self-center col-start-2 col-span-2 p-5 row-start-2 mb-12 text-3xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800 shadow-xl";
  const mobileSM_GetStartedButton =
    "mobileSM:col-start-1 mobileSM:col-span-4 mobileSM:row-start-2 mobileSM:text-2xl mobileSM:row-span-2 mobileSM:mb-14 mobileSM:mx-16";

  const mobile_GetStartedButton =
    "mobile:col-start-1 mobile:col-span-4 mobile:row-start-2 mobile:text-2xl mobile:row-span-2 mobile:mb-14 mobile:mx-16";
  const tablet_GetStartedButton = "";
  const tabletXL_GetStartedButton = "";
  const laptop_GetStartedButton = "";
  const desktop_GetStartedButton = "";
  const desktopXL_GetStartedButton =
    "desktopXL:col-start-2 desktopXL:col-span-4 desktopXL:row-start-3 desktopXL:py-6 desktopXL:text-5xl desktopXL:self-center desktopXL:mx-0 desktopXL:mt-64 ";

  //INFO Hero Services
  const default_HeroServicesContainer =
    "grid grid-cols-12 self-center text-center col-start-1 col-span-12 row-start-4";
  const mobileSM_HeroServicesContainer =
    "mobileSM:grid-cols-4 mobileSM:col-span-4 mobileSM:row-start-4 mobileSM:row-span-2 mobileSM:mx-4 mobileSM:gap-4";

  const mobile_HeroServicesContainer =
    "mobile:grid-cols-4 mobile:col-span-4 mobile:row-start-4 mobile:row-span-2 mobile:mx-4 mobile:gap-4";
  const tablet_HeroServicesContainer = "";
  const tabletXL_HeroServicesContainer = "";
  const laptop_HeroServicesContainer = "";
  const desktop_HeroServicesContainer = "";
  const desktopXL_HeroServicesContainer =
    "desktopXL:grid-cols-12 desktopXL:col-span-12 desktopXL:row-start-6 desktopXL:self-center desktopXL:mt-0";

  //INFO Web Services
  const default_webServicesContainer = "col-start-2 col-span-2";
  const mobileSM_webServicesContainer =
    "mobileSM:col-start-1 mobileSM:col-span-2 mobileSM:row-start-2";
  const mobile_webServicesContainer =
    "mobile:col-start-1 mobile:col-span-2 mobile:row-start-2";
  const tablet_webServicesContainer = "";
  const tabletXL_webServicesContainer = "";
  const laptop_webServicesContainer = "";
  const desktop_WebServicesContainer = "";
  const desktopXL_WebServicesContainer =
    "desktopXL:col-start-1 desktopXL:col-span-3 desktopXL:row-start-1 desktopXL:mx-20";

  //NOTE Web Services Animations
  const webDRef1 = useRef(null);
  const webhrRef1 = useRef(null);

  useEffect(() => {
    // console.log("Animating...");
    gsap.fromTo(
      webDRef1.current,
      {
        x: "-100%", // Start off screen
        opacity: 0, // Start with 0 opacity
      },
      {
        delay: 0.5, // Delay of 0.5 seconds
        duration: 5.0, // Duration of the animation in seconds
        x: "0%", // End at the intended position
        opacity: 1, // End with full opacity
        ease: "power3.out", // Type of easing
      }
    );

    gsap.fromTo(
      webhrRef1.current,
      {
        x: "-100%", // Start off screen
        opacity: 0, // Start with 0 opacity
      },
      {
        delay: 0.8, // Delay of 0.5 seconds
        duration: 4.0, // Duration of the animation in seconds
        x: "0%", // End at the intended position
        opacity: 1, // End with full opacity
        ease: "power3.out", // Type of easing
      }
    );
  }, []);

  //INFO Data Transfer Services
  const default_dataTransferContainer = "col-start-5 col-span-2";
  const mobileSM_dataTransferContainer =
    "mobileSM:col-start-3 mobileSM:col-span-2 mobileSM:row-start-2";
  const mobile_dataTransferContainer =
    "mobile:col-start-3 mobile:col-span-2 mobile:row-start-2";
  const tablet_dataTransferContainer = "";
  const tabletXL_dataTransferContainer = "";
  const laptop_dataTransferContainer = "";
  const desktop_dataTransferContainer = "";
  const desktopXL_dataTransferContainer =
    "desktopXL:col-start-4 desktopXL:col-span-3 desktopXL:row-start-1 desktopXL:mx-20";

  //NOTE Data Transfer Services Animations
  const webDRef2 = useRef(null);
  const webhrRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      webDRef2.current,
      {
        x: "200%", // Start off screen
        opacity: 0, // Start with 0 opacity
      },
      {
        delay: 0.5, // Delay of 0.5 seconds
        duration: 4.2, // Duration of the animation in seconds
        x: "0%", // End at the intended position
        opacity: 1, // End with full opacity
        ease: "power3.out", // Type of easing
      }
    );

    gsap.fromTo(
      webhrRef2.current,
      {
        x: "200%", // Start off screen
        opacity: 0, // Start with 0 opacity
      },
      {
        delay: 0.5, // Delay of 0.5 seconds
        duration: 4.2, // Duration of the animation in seconds
        x: "0%", // End at the intended position
        opacity: 1, // End with full opacity
        ease: "power3.out", // Type of easing
      }
    );
  }, []);

  //INFO SEO Services
  const default_SEOContainer = "col-start-3 col-span-2 ";
  const mobileSM_SEOContainer =
    "mobileSM:col-start-1 mobileSM:col-span-2 mobileSM:row-start-4";
  const mobile_SEOContainer =
    "mobile:col-start-1 mobile:col-span-2 mobile:row-start-4";
  const tablet_SEOContainer = "";
  const tabletXL_SEOContainer = "";
  const laptop_SEOContainer = "";
  const desktop_SEOContainer = "";
  const desktopXL_SEOContainer =
    "desktopXL:col-start-7 desktopXL:col-span-3 desktopXL:row-start-1 desktopXL:mx-20";

  //NOTE SEO Services Animations
  const webDRef3 = useRef(null);
  const webhrRef3 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      webDRef3.current,
      {
        x: "-100%", // Start off screen
        opacity: 0, // Start with 0 opacity
      },
      {
        delay: 0.5, // Delay of 0.5 seconds
        duration: 4.2, // Duration of the animation in seconds
        x: "0%", // End at the intended position
        opacity: 1, // End with full opacity
        ease: "power3.out", // Type of easing
      }
    );

    gsap.fromTo(
      webhrRef3.current,
      {
        x: "-100%", // Start off screen
        opacity: 0, // Start with 0 opacity
      },
      {
        delay: 0.5, // Delay of 0.5 seconds
        duration: 4.2, // Duration of the animation in seconds
        x: "0%", // End at the intended position
        opacity: 1, // End with full opacity
        ease: "power3.out", // Type of easing
      }
    );
  }, []);

  //INFO Additional Web Design Services
  const default_additionalWebDesignContainer = "col-span-2 col-start-4";
  const mobileSM_additionalWebDesignContainer =
    "mobileSM:col-start-3 mobileSM:col-span-2 mobileSM:row-start-4";
  const mobile_additionalWebDesignContainer =
    "mobile:col-start-3 mobile:col-span-2 mobile:row-start-4";
  const tablet_additionalWebDesignContainer = "";
  const tabletXL_additionalWebDesignContainer = "";
  const laptop_additionalWebDesignContainer = "";
  const desktop_additionalWebDesignContainer = "";
  const desktopXL_additionalWebDesignContainer =
    "desktopXL:col-start-10 desktopXL:col-span-3 desktopXL:row-start-1 desktopXL:mx-20";

  //NOTE Additional Web Design Services Animations
  const webDRef4 = useRef(null);
  const webhrRef4 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      webDRef4.current,
      {
        x: "200%", // Start off screen
        opacity: 0, // Start with 0 opacity
      },
      {
        delay: 0.8, // Delay of 0.5 seconds
        duration: 4.0, // Duration of the animation in seconds
        x: "0%", // End at the intended position
        opacity: 1, // End with full opacity
        ease: "power3.out", // Type of easing
      }
    );

    gsap.fromTo(
      webhrRef4.current,
      {
        x: "200%", // Start off screen
        opacity: 0, // Start with 0 opacity
      },
      {
        delay: 0.5, // Delay of 0.5 seconds
        duration: 5.0, // Duration of the animation in seconds
        x: "0%", // End at the intended position
        opacity: 1, // End with full opacity
        ease: "power3.out", // Type of easing
      }
    );
  }, []);
  //!SECTION Device Layouts

  //SECTION JSX Structure
  return (
    <>
      {/*NOTE Custom Cursor */}
      {/* if in the container dislay the cursor otherwise fade it */}
      <DynamicComponentLoader componentName="CustomCursor" fade={inHeroPage} />

      {/*NOTE Background Colors */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-1", // Ensure this layer is above some elements and below others
          backdropFilter: isVisible ? "blur(50px)" : "blur(0px)",
          transition: "backdrop-filter 0.5s ease-out, opacity 0.5s ease-out",

          overflow: "hidden", //hide excess background
        }}
      />

      <div
        ref={heroRef}
        className={`relative overflow-hidden w-lvh h-lvh overscroll-none`}
      >
        {displayBG()}

        {/*INFO Hero Container */}
        <div
          id="heroPageElement"
          className={`
          ${default_HeroContainer}
          ${mobileSM_HeroContainer}
          ${mobile_HeroContainer}
          ${tablet_HeroContainer}
          ${tabletXL_HeroContainer}
          ${laptop_HeroContainer}
          ${desktop_HeroContainer}
          ${desktopXL_HeroContainer}
          `}
        >
          {/*INFO Hero Title */}
          <>
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
              ${default_HeroGetStartedButton}
              ${mobileSM_GetStartedButton}
              ${mobile_GetStartedButton}
              ${tablet_GetStartedButton}
              ${tabletXL_GetStartedButton}
              ${laptop_GetStartedButton}
              ${desktop_GetStartedButton}
              ${desktopXL_GetStartedButton}
              `}
            >
              Get Started
            </a>

            {/* SECTION Services */}
            {/*INFO Hero Services */}
            <div
              className={`
            ${default_HeroServicesContainer}
            ${mobileSM_HeroServicesContainer}
            ${mobile_HeroServicesContainer}
            ${tablet_HeroServicesContainer}
            ${tabletXL_HeroServicesContainer}
            ${laptop_HeroServicesContainer}
            ${desktopXL_HeroServicesContainer}
            `}
            >
              {/*INFO Web Design */}
              <div
                ref={webDRef1}
                className={`
                ${default_webServicesContainer}
                ${mobileSM_webServicesContainer}
                ${mobile_webServicesContainer}
                ${tablet_webServicesContainer}
                ${tabletXL_webServicesContainer}
                ${laptop_webServicesContainer}
                ${desktop_WebServicesContainer}
                ${desktopXL_WebServicesContainer}`}
              >
                <hr ref={webhrRef1} className="border-t-2 border-gray-300" />
                <div className="mt-2 text-3xl font-bold leading-normal tracking-normal mobileSM:text-lg mobile:text-lg">
                  Web Design
                </div>
                <div className="mt-2 text-md mobileSM:text-sm desktopXL:text-2xl">
                  We create modern and responsive websites that look great on
                  all devices.
                </div>

                <div className="col-start-1 col-span-3 mt-4 font-bold desktopXL:text-2xl text-yellow-500">
                  <a href="">{">"} Learn More</a>
                </div>
              </div>

              {/*INFO Data Transfer */}
              <div
                ref={webDRef2}
                className={`
                ${default_dataTransferContainer}
                ${mobileSM_dataTransferContainer}
                ${mobile_dataTransferContainer}
                ${tablet_dataTransferContainer}
                ${tabletXL_dataTransferContainer}
                ${laptop_dataTransferContainer}
                ${desktop_dataTransferContainer}
                ${desktopXL_dataTransferContainer}`}
              >
                <hr ref={webhrRef2} className="border-t-2 border-gray-300" />
                <div className="mt-2 text-3xl font-bold leading-normal tracking-normal mobileSM:text-lg mobile:text-lg">
                  Data Transfer
                </div>
                <div className="mt-2 text-md mobileSM:text-sm desktopXL:text-2xl">
                  We transfer your existing website to a modern platform with
                  ease.
                </div>

                <div className="col-start-1 col-span-3 mt-4 font-bold desktopXL:text-2xl text-purple-500">
                  <a href="">{">"} Learn More</a>
                </div>
              </div>

              {/*INFO SEO */}
              <div
                ref={webDRef3}
                className={`
              ${default_SEOContainer}}
              ${mobileSM_SEOContainer}
              ${mobile_SEOContainer}
              ${tablet_SEOContainer}
              ${tabletXL_SEOContainer}
              ${laptop_SEOContainer}
              ${desktop_SEOContainer}
              ${desktopXL_SEOContainer}
              `}
              >
                <hr ref={webhrRef3} className="border-t-2 border-gray-300" />
                <div className="mt-2 text-3xl font-bold leading-normal tracking-normal mobileSM:text-lg mobile:text-lg">
                  SEO
                </div>
                <div className="mt-2 text-md mobileSM:text-sm desktopXL:text-2xl">
                  We help your website rank higher in search engines.
                </div>

                <div className="col-start-1 col-span-3 mt-4 font-bold desktopXL:text-2xl text-green-500">
                  <a href="">{">"} Learn More</a>
                </div>
              </div>

              {/*INFO Custom Solutions */}
              <div
                ref={webDRef4}
                className={`
                ${default_additionalWebDesignContainer}
                ${mobileSM_additionalWebDesignContainer}
                ${mobile_additionalWebDesignContainer}
                ${tablet_additionalWebDesignContainer}
                ${tabletXL_additionalWebDesignContainer}
                ${laptop_additionalWebDesignContainer}
                ${desktop_additionalWebDesignContainer}
                ${desktopXL_additionalWebDesignContainer}
                `}
              >
                <hr ref={webhrRef4} className="border-t-2 border-gray-300" />
                <div className="mt-2 text-3xl font-bold leading-normal tracking-normal mobileSM:text-lg mobile:text-lg">
                  Custom Solutions
                </div>
                <div className="mt-2 text-md mobileSM:text-sm desktopXL:text-2xl">
                  Advanced, innovative solutions for complex web design
                  challenges.
                </div>

                <div className="col-start-1 col-span-3 mt-4 font-bold desktopXL:text-2xl text-blue-500">
                  <a href="">{">"} Learn More</a>
                </div>
              </div>
            </div>
            {/* !SECTION Services*/}
          </>
        </div>
      </div>
    </>
  );
  //!SECTION - JSX Structure - End
}

export default HeroPage;
