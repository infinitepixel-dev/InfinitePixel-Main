import { useState } from "react";
import "./navigationBar.css"; // Ensure this path is correct
import logo from "../../assets/logo.svg";

const SidebarHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu has been", isOpen ? "closed" : "opened");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="grid grid-cols-2" id="customNav">
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
        >
          {/* row 1 - BEGIN */}
          <div className="col-start-1 row-start-1">
            <div className="flex">
              {/* <div className="ml-16" id="logoColBlank"></div> */}
              <div
                className="flex-shrink-0 h-0 mt-0 ml-16 align-top scale-150"
                id="logoCol"
              >
                {/* Removed margin-left as grid places it in the second column */}
                {/*FIXME style if isOpen show img otherwise hide image */}
                {/* <img
                  style={{
                    transition: "5s ease-in-out",
                  }}
                  src={logo}
                  alt="Logo"
                /> */}
              </div>
              {/* flex end */}
            </div>
          </div>
          {/* row 1 - END */}

          {/* row 2 - BEGIN */}
          <div className="row-start-2 content-center">
            <div className="grid gap-4 grid-cols-subgrid ">
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
                className="col-start-1 col-end-2 row-start-8 pl-5 scale-150"
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
