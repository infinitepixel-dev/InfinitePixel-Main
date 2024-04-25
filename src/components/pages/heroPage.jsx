// Hero - Page 1
import { useState, useEffect, useRef } from "react";
import "./heroPage.css";

import DynamicComponentLoader from "../../dynamicComponentLoader";
import { useDeviceConfig } from "../../useDeviceLayout"; // Adjust the path as necessary

function HeroPage() {
  const deviceLayout = useDeviceConfig();
  const [inHeroPage, setInHeroPage] = useState(false);

  const orbRefs = useRef(Array.from({ length: 5 }, () => ({ current: null })));
  const backGroundBlurAmount = 100;
  const backGroundBorderRadius = 50;

  useEffect(() => {
    const hero = document.getElementById("heroPageElement");
    if (hero) {
      const onMouseOver = () => setInHeroPage(true);
      const onMouseLeave = () => setInHeroPage(false);

      hero.addEventListener("mouseover", onMouseOver);
      hero.addEventListener("mouseleave", onMouseLeave);

      return () => {
        hero.removeEventListener("mouseover", onMouseOver);
        hero.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

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
            }
          }, 2000);
        }
      });
    };

    const intervalId = setInterval(moveOrbs, 500);
    return () => clearInterval(intervalId);
  }, []);

  //new code
  // console.log(deviceLayout.heroPage);
  return (
    <div className={deviceLayout.heroPage.heroPageContainer}>
      {/*NOTE Background Colors */}

      <DynamicComponentLoader componentName="CustomCursor" fade={inHeroPage} />

      {/* randomly move the orbs around the page */}

      {/* only allow the custom cursor component to work inside of heroPage */}
      {/* deviceLayout.heroPage.heroBackground is a template, return as jsx  */}
      {deviceLayout.heroPage.heroBackground(
        orbRefs,
        backGroundBlurAmount,
        backGroundBorderRadius
      )}

      {/* Sub-grid for Page 1 */}
      <div
        id="heroPageElement"
        className={`${deviceLayout.heroPage.heroPageElement}`}
      >
        {/* Add your rows and columns inside the sub-grid */}

        {deviceLayout.heroPage.heroTitle()}

        {/* Uses self-start and self-end to align within the cells*/}
        {deviceLayout.heroPage.getStartedButton()}

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
