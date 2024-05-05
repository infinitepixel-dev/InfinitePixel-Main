import React from "react"; // Import React library
import PropTypes from "prop-types"; // Runtime type checking for React props and similar objects.

/* Button takes in the following props:

//Examples:
//Breakpoints for the button
      defaultClass={default_HeroGetStartedButton}
      mobileSMClass={mobileSM_GetStartedButton}
      mobileClass={mobile_GetStartedButton}
      tabletClass={tablet_GetStartedButton}
      tabletXLClass={tabletXL_GetStartedButton}
      laptopClass={laptop_GetStartedButton}
      desktopClass={desktop_GetStartedButton}
      desktopXLClass={desktopXL_GetStartedButton}

//Text to display on the button
      buttonText="Get Started"

//URL or #id to navigate to when button is clicked
      hrefValue="#paymentInformation"
      hrefValue="/someRoute"
*/

function ActionButton({
  defaultClass,
  mobileSMClass,
  mobileClass,
  tabletClass,
  tabletXLClass,
  laptopClass,
  desktopClass,
  desktopXLClass,
  desktopXXLClass,
  buttonText,
  hrefValue,
  onClick,
  animation,
}) {
  const className = `${defaultClass} ${mobileSMClass} ${mobileClass} ${tabletClass} ${tabletXLClass} ${laptopClass} ${desktopClass} ${desktopXLClass} ${desktopXXLClass}`;

  const default_buttonContent = (
    <a
      onClick={onClick}
      href={hrefValue}
      className={`
      ${className}
    `}
    >
      {buttonText}
    </a>
  );

  const animated_buttonContent = (
    <a onClick={onClick} href={hrefValue}>
      {buttonText}
    </a>
  );

  return animation
    ? React.cloneElement(
        animation,
        { className: className },
        animated_buttonContent
      )
    : default_buttonContent;
}

ActionButton.propTypes = {
  defaultClass: PropTypes.string,
  mobileSMClass: PropTypes.string,
  mobileClass: PropTypes.string,
  tabletClass: PropTypes.string,
  tabletXLClass: PropTypes.string,
  laptopClass: PropTypes.string,
  desktopClass: PropTypes.string,
  desktopXLClass: PropTypes.string,
  desktopXXLClass: PropTypes.string,
  buttonText: PropTypes.string,
  hrefValue: PropTypes.string,
  onClick: PropTypes.func,
  animation: PropTypes.element,
};

export default ActionButton;
