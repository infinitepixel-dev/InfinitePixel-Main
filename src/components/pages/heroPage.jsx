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
        {deviceLayout.heroPage.heroServices()}

        {/* section for the orbs */}
      </div>
    </div>
  );
}

export default HeroPage;
