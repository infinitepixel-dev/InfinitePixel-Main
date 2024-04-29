/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import "./navigationBar.css"; // Ensure this path is correct
import logo from "../../assets/logo.svg";
import { NavigationContext } from "../../context/navigationContext";

const SidebarHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    isContactPage,
    isPaymentsPage,
    isAboutPage,
    isHomePage,
    // If you need to set these states from here, you can also destructure setIsContactPage, etc.
  } = useContext(NavigationContext);
  console.clear();
  console.log("isPaymentsPage", isPaymentsPage);
  console.log("isAboutPage", isAboutPage);

  const toggleMenu = () => {
    // console.log("Menu has been", isOpen ? "closed" : "opened");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="grid grid-cols-2 h-svh" id="customNav">
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
          className={`h-svh grid grid-cols-2 grid-rows-10 sidebar z-10 p-3 backdrop-filter backdrop-blur-md transition-all duration-500 ease-in-out col-span-1 col-start-2 ${
            isOpen ? "open" : ""
          }`}
          // if on the payments page change the sidebar background color
          //payments page one color
          //about page another color

          style={{
            backgroundColor: isPaymentsPage
              ? "#4657d743"
              : isAboutPage
                ? "#58b3271d"
                : "",
          }}
        >
          {/* row 1 - BEGIN */}

          {/* row 2 - BEGIN */}
          <div className="row-start-2 content-center">
            <div className="grid gap-4 grid-cols-subgrid containerBG">
              <a href="#" className="block text-lg">
                Home
              </a>
              {/* row 3 */}
              <a href="#" className="block text-lg">
                About
              </a>
              {/* row 4 */}
              <a href="#" className="block text-lg">
                Services
              </a>
              {/* row 5 */}
              <a href="#" className="block text-lg">
                Contact
              </a>
              {/* row 6 */}

              <img
                className="col-start-1 col-end-2 row-start-8 pl-4 scale-100"
                // style={{
                //   transition: "1s ease-in-out",
                // }}
                src={logo}
                alt="Logo"
              />
            </div>
          </div>
          {/* Row 2 - END */}
        </div>
      </div>
    </>
  );
};

export default SidebarHamburger;
