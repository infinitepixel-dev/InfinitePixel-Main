import { useRef, useEffect } from "react"; // React Hooks
import gsap from "gsap"; // Animation Library
import PropTypes from "prop-types"; // Runtime type checking for React props and similar objects.

/* eslint-disable no-unused-vars */
function Services({ desktopAnimation, setDesktopAnimation }) {
  //#region Services
  //SECTION Services

  //INFO Services Container
  const default_HeroServicesContainer =
    "grid grid-cols-12 self-center text-center col-start-1 col-span-12 row-start-4";
  const mobileSM_HeroServicesContainer =
    "mobileSM:grid-cols-4 mobileSM:col-span-4 mobileSM:row-start-4 mobileSM:row-span-2 mobileSM:mx-4 mobileSM:gap-4";

  const mobile_HeroServicesContainer = "mobile:gap-4";
  const tablet_HeroServicesContainer =
    "tablet:row-start-4 tablet:gap-2 tablet:mt-2";
  const tabletXL_HeroServicesContainer = "";
  const laptop_HeroServicesContainer = "";
  const desktop_HeroServicesContainer = "";
  const desktopXL_HeroServicesContainer =
    "desktopXL:grid-cols-12 desktopXL:col-span-12 desktopXL:row-start-6 desktopXL:gap-4 desktopXL:self-center desktopXL:mt-0";
  const desktopXXL_HeroServicesContainer = "";

  //INFO Web Design
  const default_webServicesContainer = "col-start-2 col-span-2";
  const mobileSM_webServicesContainer =
    "mobileSM:col-start-1 mobileSM:col-span-2 mobileSM:row-start-2";
  const mobile_webServicesContainer = "";
  const tablet_webServicesContainer = "";
  const tabletXL_webServicesContainer = "";
  const laptop_webServicesContainer = "";
  const desktop_WebServicesContainer = "";
  const desktopXL_WebServicesContainer =
    "desktopXL:col-start-1 desktopXL:col-span-3 desktopXL:row-start-1 desktopXL:mx-20";
  const desktopXXL_WebServicesContainer = "";

  const webDRef1 = useRef(null);
  const webhrRef1 = useRef(null);

  const default_webServiceTitle =
    "mt-2 text-3xl font-bold leading-normal tracking-normal mobileSM:text-lg mobile:text-lg";
  const mobileSM_webServiceTitle = "";
  const mobile_webServiceTitle = "";
  const tablet_webServiceTitle = "tablet:mt-1";
  const tabletXL_webServiceTitle = "";
  const laptop_webServiceTitle = "";
  const desktop_webServiceTitle = "";
  const desktopXL_webServiceTitle = "";
  const desktopXXL_webServiceTitle = "";

  //INFO Data Transfer
  const default_dataTransferContainer = "col-start-5 col-span-2";
  const mobileSM_dataTransferContainer =
    "mobileSM:col-start-3 mobileSM:col-span-2 mobileSM:row-start-2";
  const mobile_dataTransferContainer = "";
  const tablet_dataTransferContainer = "";
  const tabletXL_dataTransferContainer = "";
  const laptop_dataTransferContainer = "";
  const desktop_dataTransferContainer = "";
  const desktopXL_dataTransferContainer =
    "desktopXL:col-start-4 desktopXL:col-span-3 desktopXL:row-start-1 desktopXL:mx-20";
  const desktopXXL_dataTransferContainer = "";

  const webDRef2 = useRef(null);
  const webhrRef2 = useRef(null);

  const default_dataTransferTitle =
    "mt-2 text-3xl font-bold leading-normal tracking-normal mobileSM:text-lg mobile:text-lg";
  const mobileSM_dataTransferTitle = "";
  const mobile_dataTransferTitle = "";
  const tablet_dataTransferTitle = "tablet:mt-1";
  const tabletXL_dataTransferTitle = "";
  const laptop_dataTransferTitle = "";
  const desktop_dataTransferTitle = "";
  const desktopXL_dataTransferTitle = "";
  const desktopXXL_dataTransferTitle = "";

  //INFO SEO
  const default_SEOContainer = "col-start-3 col-span-2 ";
  const mobileSM_SEOContainer =
    "mobileSM:col-start-1 mobileSM:col-span-2 mobileSM:row-start-4";
  const mobile_SEOContainer = "";
  const tablet_SEOContainer = "";
  const tabletXL_SEOContainer = "";
  const laptop_SEOContainer = "";
  const desktop_SEOContainer = "";
  const desktopXL_SEOContainer =
    "desktopXL:col-start-7 desktopXL:col-span-3 desktopXL:row-start-1 desktopXL:mx-20";
  const desktopXXL_SEOContainer = "";

  const webDRef3 = useRef(null);
  const webhrRef3 = useRef(null);

  const default_SEOTitle =
    "mt-2 text-3xl font-bold leading-normal tracking-normal mobileSM:text-lg mobile:text-lg";
  const mobileSM_SEOTitle = "";
  const mobile_SEOTitle = "";
  const tablet_SEOTitle = "tablet:mt-1";
  const tabletXL_SEOTitle = "";
  const laptop_SEOTitle = "";
  const desktop_SEOTitle = "";
  const desktopXL_SEOTitle = "";
  const desktopXXL_SEOTitle = "";

  //INFO Custom Solutions
  const default_additionalWebDesignContainer = "col-span-2 col-start-4";
  const mobileSM_additionalWebDesignContainer =
    "mobileSM:col-start-3 mobileSM:col-span-2 mobileSM:row-start-4";
  const mobile_additionalWebDesignContainer = "";
  const tablet_additionalWebDesignContainer = "";
  const tabletXL_additionalWebDesignContainer = "";
  const laptop_additionalWebDesignContainer = "";
  const desktop_additionalWebDesignContainer = "";
  const desktopXL_additionalWebDesignContainer =
    "desktopXL:col-start-10 desktopXL:col-span-3 desktopXL:row-start-1 desktopXL:mx-20";
  const desktopXXL_additionalWebDesignContainer = "";

  const webDRef4 = useRef(null);
  const webhrRef4 = useRef(null);

  const default_customSolutionsTitle =
    "mt-2 text-3xl font-bold leading-normal tracking-normal mobileSM:text-lg mobile:text-lg";
  const mobileSM_customSolutionsTitle = "";
  const mobile_customSolutionsTitle = "";
  const tablet_customSolutionsTitle = "tablet:mt-1";
  const tabletXL_customSolutionsTitle = "";
  const laptop_customSolutionsTitle = "";
  const desktop_customSolutionsTitle = "";
  const desktopXL_customSolutionsTitle = "";
  const desktopXXL_customSolutionsTitle = "";
  //!SECTION Services - End
  //#endregion

  //#region Animations
  //SECTION Services Animations
  useEffect(() => {
    const handleResize = () => {
      //DesktopXL
      if (window.innerWidth > 1535) {
        setDesktopAnimation(true);
      }
      //ALL Other Resolutions under DesktopXL
      else if (window.innerWidth < 1535) {
        setDesktopAnimation(false);
      }
    };

    handleResize();

    //NOTE Web Services Animations
    if (desktopAnimation || desktopAnimation === false) {
      //
      // } else if (!desktopAnimation) {
      gsap.fromTo(
        webhrRef1.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
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

      gsap.fromTo(
        webDRef1.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
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
    }

    //NOTE Data Transfer Services Animations
    if (desktopAnimation) {
      console.log("Animating...", desktopAnimation);
      gsap.fromTo(
        webhrRef2.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
          x: "0%", // Start off screen
          opacity: 0, // Start with 0 opacity
        },
        {
          delay: 1.5, // Delay of 0.5 seconds
          duration: 10.2, // Duration of the animation in seconds
          x: "0%", // End at the intended position
          y: "0%", // End at the intended position
          opacity: 1, // End with full opacity
          ease: "power3.out", // Type of easing
        }
      );

      gsap.fromTo(
        webDRef2.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
          x: "%", // Start off screen
          y: "300%", // Start off screen
          opacity: 0, // Start with 0 opacity
        },
        {
          delay: 0.5, // Delay of 0.5 seconds
          duration: 4.2, // Duration of the animation in seconds
          x: "0%", // End at the intended position
          y: "0%", // End at the intended position
          opacity: 1, // End with full opacity
          ease: "power3.out", // Type of easing
        }
      );
    } else if (desktopAnimation === false) {
      console.log("Mobile Animating...", desktopAnimation);
      gsap.fromTo(
        webhrRef2.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
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
        webDRef2.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
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
    }

    //NOTE SEO Services Animations
    if (desktopAnimation) {
      gsap.fromTo(
        webhrRef3.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
          x: "0%", // Start off screen
          opacity: 0, // Start with 0 opacity
        },
        {
          delay: 1.5, // Delay of 0.5 seconds
          duration: 10.2, // Duration of the animation in seconds
          x: "0%", // End at the intended position
          y: "0%", // End at the intended position
          opacity: 1, // End with full opacity
          ease: "power3.out", // Type of easing
        }
      );

      gsap.fromTo(
        webDRef3.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
          x: "0%", // Start off screen
          y: "300%", // Start off screen
          opacity: 0, // Start with 0 opacity
        },
        {
          delay: 0.5, // Delay of 0.5 seconds
          duration: 4.2, // Duration of the animation in seconds
          x: "0%", // End at the intended position
          y: "0%", // End at the intended position
          opacity: 1, // End with full opacity
          ease: "power3.out", // Type of easing
        }
      );
    } else if (desktopAnimation === false) {
      gsap.fromTo(
        webhrRef3.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
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
        webDRef3.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
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
    }

    //NOTE Additional Web Design Services Animations
    if (desktopAnimation || desktopAnimation === false) {
      //
      // } else if (!desktopAnimation) {
      gsap.fromTo(
        webhrRef4.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
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

      gsap.fromTo(
        webDRef4.current,
        {
          delay: 0.5, // Delay of 0.5 seconds
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
    }
  }, [desktopAnimation, setDesktopAnimation]);
  //!SECTION Services Animations - End
  //#endregion

  return (
    <div
      className={`
  ${default_HeroServicesContainer}
  ${mobileSM_HeroServicesContainer}
  ${mobile_HeroServicesContainer}
  ${tablet_HeroServicesContainer}
  ${tabletXL_HeroServicesContainer}
  ${laptop_HeroServicesContainer}
  ${desktop_HeroServicesContainer}
  ${desktopXL_HeroServicesContainer}
  ${desktopXXL_HeroServicesContainer}
  `}
    >
      {/*INFO-JSX Web Design */}
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
      ${desktopXL_WebServicesContainer}
      ${desktopXXL_WebServicesContainer}
    `}
      >
        <hr ref={webhrRef1} className="border-t-2 border-gray-300" />
        <div
          className={`
        ${default_webServiceTitle}
        ${mobileSM_webServiceTitle}
        ${mobile_webServiceTitle}
        ${tablet_webServiceTitle}
        ${tabletXL_webServiceTitle}
        ${laptop_webServiceTitle}
        ${desktop_webServiceTitle}
        ${desktopXL_webServiceTitle}
        ${desktopXXL_webServiceTitle}s
        `}
        >
          Web Design
        </div>
        <div className="mt-2 text-md mobileSM:text-sm tablet:mt-1 desktopXL:text-2xl">
          We create modern and responsive websites that look great on all
          devices.
        </div>

        <div className="col-start-1 col-span-3 mt-4 font-bold tablet:mt-2 desktopXL:mt-4 desktopXL:text-2xl text-yellow-500">
          <a href="#">{">"} Learn More</a>
        </div>
      </div>

      {/*INFO-JSX Data Transfer */}
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
      ${desktopXL_dataTransferContainer}
      ${desktopXXL_dataTransferContainer}
      `}
      >
        <hr ref={webhrRef2} className="border-t-2 border-gray-300" />
        <div
          className={`
        ${default_dataTransferTitle}
        ${mobileSM_dataTransferTitle}
        ${mobile_dataTransferTitle}
        ${tablet_dataTransferTitle}
        ${tabletXL_dataTransferTitle}
        ${laptop_dataTransferTitle}
        ${desktop_dataTransferTitle}
        ${desktopXL_dataTransferTitle}
        ${desktopXXL_dataTransferTitle}
        `}
        >
          Data Transfer
        </div>
        <div className="mt-2 text-md mobileSM:text-sm tablet:mt-1 desktopXL:text-2xl">
          We transfer your existing website to a modern platform with ease.
        </div>

        <div className="col-start-1 col-span-3 mt-4 font-bold tablet:mt-2 desktopXL:mt-4 desktopXL:text-2xl text-purple-500">
          <a href="#">{">"} Learn More</a>
        </div>
      </div>

      {/*INFO-JSX SEO */}
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
    ${desktopXXL_SEOContainer}
    `}
      >
        <hr ref={webhrRef3} className="border-t-2 border-gray-300" />
        <div
          className={`
        ${default_SEOTitle}
        ${mobileSM_SEOTitle}
        ${mobile_SEOTitle}
        ${tablet_SEOTitle}
        ${tabletXL_SEOTitle}
        ${laptop_SEOTitle}
        ${desktop_SEOTitle}
        ${desktopXL_SEOTitle}
        ${desktopXXL_SEOTitle}
        `}
        >
          SEO
        </div>
        <div className="mt-2 text-md mobileSM:text-sm tablet:mt-1 desktopXL:text-2xl">
          We help your website rank higher in search engines.
        </div>

        <div className="col-start-1 col-span-3 mt-4 font-bold tablet:mt-2 desktopXL:mt-4 desktopXL:text-2xl text-green-500">
          <a href="#">{">"} Learn More</a>
        </div>
      </div>

      {/*INFO-JSX Custom Solutions */}
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
      ${desktopXXL_additionalWebDesignContainer}
      `}
      >
        <hr ref={webhrRef4} className="border-t-2 border-gray-300" />
        <div
          className={`
        ${default_customSolutionsTitle}
        ${mobileSM_customSolutionsTitle}
        ${mobile_customSolutionsTitle}
        ${tablet_customSolutionsTitle}
        ${tabletXL_customSolutionsTitle}
        ${laptop_customSolutionsTitle}
        ${desktop_customSolutionsTitle}
        ${desktopXL_customSolutionsTitle}
        ${desktopXXL_customSolutionsTitle}
        `}
        >
          Custom Solutions
        </div>
        <div className="mt-2 text-md mobileSM:text-sm tablet:mt-1 desktopXL:text-2xl">
          Advanced, innovative solutions for complex web design challenges.
        </div>

        <div className="col-start-1 col-span-3 mt-4 font-bold tablet:mt-2 desktopXL:mt-4 desktopXL:text-2xl text-blue-500">
          <a href="#">{">"} Learn More</a>
        </div>
      </div>
    </div>
  );
}

Services.propTypes = {
  //desktopAnimation can be boolean or string
  desktopAnimation: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  setDesktopAnimation: PropTypes.func,
};

export default Services;
