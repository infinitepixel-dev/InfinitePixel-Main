/* eslint-disable no-unused-vars */
// About Us - Page 2

import { useEffect, useContext, useRef } from "react";
import { NavigationContext } from "../../../context/navigationContext";
import CarouselWithButtons from "../../menus/carousel-with-buttons";

import DynamicComponentLoader from "../../../dynamicComponentLoader";

function Footer() {
  //NOTE - Device Layouts
  //INFO About Us Container
  const default_FooterContainer =
    "z-10 grid h-lvh grid-cols-8 overflow-hidden grid-rows-8";
  const mobileSM_FooterContainer = "";
  const mobile_FooterContainer = "";
  const tablet_FooterContainer = "";
  const tabletXL_FooterContainer = "";
  const laptop_FooterContainer = "";
  const desktop_FooterContainer = "";
  const desktopXL_FooterContainer = "";
  const desktopXXL_FooterContainer = "";

  return (
    <div className="relative overflow-hidden h-lvh overscroll-none">
      {/* Background image with opacity */}
      {/*TODO Convert JPG TO SVG */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/footerbg.webp')] bg-cover bg-center opacity-[.03]"
        style={{
          zIndex: -1,
        }}
      />

      {/* INFO About Us Container */}
      <div
        id="aboutUs"
        className={`
        ${default_FooterContainer}
        ${mobileSM_FooterContainer}
        ${mobile_FooterContainer}
        ${tablet_FooterContainer}
        ${tabletXL_FooterContainer}
        ${laptop_FooterContainer}
        ${desktop_FooterContainer}
        ${desktopXL_FooterContainer}
        ${desktopXXL_FooterContainer}
        `}
      >
        <div className="col-span-8 col-start-1 text-md text-center self-center font-bold leading-normal tracking-normal">
          {" "}
          Footer:
        </div>
      </div>
    </div>
  );
}

export default Footer;
