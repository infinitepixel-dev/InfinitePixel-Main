import { useRef, useEffect } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

const FadeIn = ({
  children,
  duration,
  opacityStart,
  opacityEnd,
  className,
}) => {
  const elementRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { opacity: opacityStart || 0 }, // Ensure the starting opacity is 0
      {
        duration: duration || 1, // Provide a default duration if not specified
        opacity: opacityEnd || 1, // Animate to full opacity
        ease: "expoScale(1,2,none)",
      }
    );
  }, [duration, opacityStart, opacityEnd]);

  // Set the initial style to opacity 0
  return (
    <div
      className={className}
      ref={elementRef}
      style={{ opacity: opacityStart }}
    >
      {children}
    </div>
  );
};

FadeIn.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  opacityStart: PropTypes.number,
  opacityEnd: PropTypes.number,
  className: PropTypes.string,
};

export default FadeIn;
