import { useEffect, useRef } from "react";
import propTypes from "prop-types";

const HeroBackground = ({ isVisible }) => {
  //   console.log("Hero BG: ", isVisible);

  const backGroundBlurAmount = 50; // Adjusts orbs blur amount
  const backGroundBorderRadius = 50; // Adjusts orbs border radius

  const orbRefs = useRef(Array.from({ length: 5 }, () => ({ current: null })));

  useEffect(() => {
    const moveOrbs = () => {
      orbRefs.current.forEach((ref) => {
        if (ref.current) {
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
};

HeroBackground.propTypes = {
  isVisible: propTypes.bool.isRequired,
};

export default HeroBackground;
