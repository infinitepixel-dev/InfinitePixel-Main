import PropTypes from "prop-types"; // Runtime type checking for React props and similar objects.

function ActionButton({
  defaultClass,
  mobileSMClass,
  mobileClass,
  tabletClass,
  tabletXLClass,
  laptopClass,
  desktopClass,
  desktopXLClass,
  buttonText, //Text to display on the button
  hrefValue, //URL to navigate to when button is clicked
}) {
  return (
    <>
      <a
        href={hrefValue}
        className={`
    ${defaultClass}
    ${mobileSMClass}
    ${mobileClass}
    ${tabletClass}
    ${tabletXLClass}
    ${laptopClass}
    ${desktopClass}
    ${desktopXLClass}
    `}
      >
        {buttonText}
      </a>
    </>
  );
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
  buttonText: PropTypes.string,
  hrefValue: PropTypes.string,
};

export default ActionButton;
