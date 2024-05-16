/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./navigationBar.css"; // Ensure this path is correct
import logo from "../../assets/logo.svg";
import { NavigationContext } from "../../context/navigationContext";

const SidebarHamburger = ({ developerMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    isContactPage,
    isPaymentsPage,
    isAboutPage,
    isHomePage,
    // If you need to set these states from here, you can also destructure setIsContactPage, etc.
  } = useContext(NavigationContext);
  // console.clear();
  // console.log("isPaymentsPage", isPaymentsPage);
  // console.log("isAboutPage", isAboutPage);

  const toggleMenu = () => {
    // console.log("Menu has been", isOpen ? "closed" : "opened");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-lvh" id="customNav">
        {/* Hamburger and Logo in the same row using grid */}
        {/* Hamburger Icon */}
        {/* row 1 - BEGIN */}
        <div
          className="absolute z-20 col-span-1 col-start-1 row-start-1 mt-3 left-2 cursor-pointer-left justify-content d-flex w-30 h-30"
          onClick={toggleMenu}
        >
          <div
            className={`bar top-bar m-2 w-7 h-1 duration-500 ${
              isOpen ? "open bg-lime-400" : "bg-rose-500"
            }`}
          ></div>
          <div
            className={`arrow-bar m-2 w-7 h-1 duration-500 ${
              isOpen ? "open" : "bg-purple-700"
            }`}
          >
            <div
              className={`bar middle-bar m-0 h-1 ${
                isOpen ? "open w-4 duration-500 bg-stone-300" : ""
              }`}
            ></div>
          </div>
          <div
            className={`bar bottom-bar m-2 w-7 h-1 duration-500 ${
              isOpen ? "open bg-amber-400" : "bg-sky-300"
            }`}
          ></div>
        </div>
        {/* row 1 - END */}

        <div
          className={`grid grid-cols-2 grid-rows-10 sidebar z-10 p-3 backdrop-filter backdrop-blur-md transition-all duration-500 ease-in-out col-span-1 col-start-2 ${
            isOpen ? "open" : ""
          }`}
          // if on the payments page change the sidebar background color
          //payments page one color
          //about page another color

          style={{
            backgroundColor: isPaymentsPage
              ? "#0000009d"
              : isAboutPage
                ? "#1b1e308a"
                : "",
            //backdrop blur
            backdropFilter: "blur(20px)",
          }}
        >
          {/* row 1 - BEGIN */}

          {/* row 2 - BEGIN */}
          <div className="row-start-2 text-center ml-1">
            <div
              className="containerBG py-10"
              style={{
                // backgroundColor: "#0000008b",
                width: "180px",
                marginLeft: "-16px",
                /* -webkit-mask-image: linear-gradient(to right, black 90%, transparent 100%); */
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 18%, black 88%, transparent 100%)",
                // add to the bottom
                // maskImage:
                //   "linear-gradient(to top, black 90%, transparent 100%)",
                // add to the top

                /* mask-image: linear-gradient(to right, black 99%, transparent 100%); */
              }}
            >
              {/* navigate to / */}

              <a href="#heroPage" className="block text-lg">
                Home
              </a>
              {/* row 3 */}
              <a href="#aboutUs" className="block text-lg">
                About
              </a>
              {/* row 4 */}
              <a href="#paymentInformation" className="block text-lg">
                Pricing
              </a>

              {/* row 5 */}
              <Link to="" className="block text-lg">
                Services
              </Link>

              {/* row 6 */}
              {developerMode ? (
                <Link to="/infini-docs" className="block text-lg">
                  Infini-Docs
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="blur"></div>
          </div>
          <img
            className="col-start-1 col-span-2 row-start-10 pl-1 scale-75"
            // style={{
            //   transition: "1s ease-in-out",
            // }}
            src={logo}
            alt="Logo"
          />
          {/* Row 2 - END */}
        </div>
      </div>
    </>
  );
};

SidebarHamburger.propTypes = {
  developerMode: PropTypes.bool,
};

export default SidebarHamburger;
