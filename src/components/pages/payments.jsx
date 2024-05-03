/* eslint-disable no-unused-vars */
// Payments - Page 3

import { useEffect, useContext, useRef } from "react";
import { NavigationContext } from "../../context/navigationContext";

import { FaCircleCheck, FaUser, FaCheckDouble } from "react-icons/fa6";

export function PricingCard() {
  const { setIsPaymentsPage } = useContext(NavigationContext);
  const ref = useRef(null); // Reference to the component's DOM element

  // Intersection Observer to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsPaymentsPage(entry.isIntersecting);
      },
      {
        root: null, // Using the viewport as the container
        rootMargin: "0px",
        threshold: 0.1, // 10% of the element should be visible
      }
    );

    // Attach the observer to the ref element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [setIsPaymentsPage]);

  //INFO Payments Container

  const default_PaymentsContainer =
    "z-10 grid w-full h-screen grid-cols-8 gap-1 overflow-hidden grid-rows-8";
  const mobileSM_PaymentsContainer = "";
  const mobile_PaymentsContainer = "mobile:grid-cols-8";
  const tablet_PaymentsContainer = "";
  const tabletXL_PaymentsContainer = "";
  const laptop_PaymentsContainer = "";
  const desktop_PaymentsContainer = "";
  const desktopXL_PaymentsContainer = "desktopXL:grid-cols-10";

  //INFO Payments Title
  const default_PaymentsTitle =
    "row-start-2 p-2 text-2xl text-center font-bold leading-normal tracking-normal";
  const mobileSM_PaymentsTitle = "";
  const mobile_PaymentsTitle =
    "mobile:col-start-4 mobile:col-span-2 mobile:text-2xl mobile:row-start-1";
  const tablet_PaymentsTitle = "";
  const tabletXL_PaymentsTitle = "";
  const laptop_PaymentsTitle = "";
  const desktop_PaymentsTitle = "";
  const desktopXL_PaymentsTitle =
    "desktopXL:text-8xl desktopXL:col-start-5 col-span-2 desktopXL:p-5";

  //INFO Contact Details
  const default_ContactDetails =
    "row-start-2 col-start-2 col-span-8 p-5 italic self-center text-center text-1xl";
  const mobileSM_ContactDetails = "";
  const mobile_ContactDetails =
    "mobile:col-start-1 mobile:row-start-1 mobile:mt-24 mobile:mb-0";
  const tabletContactDetails = "";
  const tabletXL_ContactDetails = "";
  const laptop_ContactDetails = "";
  const desktop_ContactDetails = "";
  const desktopXL_ContactDetails =
    "desktopXL:col-start-2 desktopXL:row-start-1 desktopXL:mt-48";

  // #region  Card 1

  //INFO Card 1
  const default_Card1Container =
    "grid grid-cols-8 grid-rows-4 col-span-8 col-start-2 row-start-2 p-4 rounded-lg shadow-lg bg-slate-100";
  const mobileSM_Card1Container = "";
  const mobile_Card1Container =
    "mobile:col-start-1 mobile:p-2 mobile:mx-2 mobile:col-span-8 mobile:row-start-3 row-span-2";
  const tablet_Card1Container = "";
  const tabletXL_Card1Container = "";
  const laptop_Card1Container = "";
  const desktop_Card1Container = "";
  const desktopXL_Card1Container =
    "desktopXL:grid-cols-10 desktop:col-span-2 desktopXL:col-start-2 desktopXL:row-start-3 desktopXL:row-span-4";

  //INFO Card 1 - Plan Name
  const default_Card1PlanName = "text-lg font-bold text-center text-sky-800 ";
  const mobileSM_Card1PlanName =
    "mobile:col-start-5 mobile:col-span-4 mobile:row-start-1";
  const mobile_Card1PlanName = "";
  const tablet_Card1PlanName = "";
  const tabletXL_Card1PlanName = "";
  const laptop_Card1PlanName = "";
  const desktop_Card1PlanName = "";
  const desktopXL_Card1PlanName =
    "desktopXL:col-start-1 desktopXL:row-start-1 desktopXL:col-span-8 desktopXL:text-2xl";

  //INFO Card 1 - Main Price
  const default_Card1MainPrice =
    "mb-4 text-5xl font-bold text-center text-blue-600";
  const mobileSM_Card1MainPrice =
    "mobile:col-start-5 mobile:col-span-4 mobile:row-start-2";
  const mobile_Card1MainPrice = "";
  const tablet_Card1MainPrice = "";
  const tabletXL_Card1MainPrice = "";
  const laptop_Card1MainPrice = "";
  const desktop_Card1MainPrice = "";
  const desktopXL_Card1MainPrice =
    "desktopXL: col-start-2 desktopXL:row-start-2 desktopXL:col-span-8 desktopXL:text-5xl";

  //INFO Card 1 -Features
  const default_Card1Features = "text-sm pt-5";
  const mobile_Card1Features =
    "mobile:col-start-1 mobile:mt-3 mobile:col-span-4 mobile:row-start-1";
  const mobileSM_Card1Features = "";
  const tablet_Card1Features = "";
  const tabletXL_Card1Features = "";
  const laptop_Card1Features = "";
  const desktop_Card1Features = "";
  const desktopXL_Card1Features =
    "desktopXL:col-start-2 desktopXL:row-start-3 desktopXL:col-span-8 desktopXL:text-sm";

  //INFO Card 1 - Button
  const default_Card1Button =
    "self-center p-2 m-3 mb-6 text-lg font-bold text-white duration-500 bg-blue-600 rounded hover:bg-blue-700";
  const mobileSM_Card1Button = "";
  const mobile_Card1Button =
    "mobile:col-start-5 mobile:col-span-4 mobile:row-start-4 mobile:row-span-1";
  const tablet_Card1Button = "";
  const tabletXL_Card1Button = "";
  const laptop_Card1Button = "";
  const desktop_Card1Button = "";
  const desktopXL_Card1Button =
    "desktopXL:col-start-1 desktopXL:row-start-9 desktopXL:mt-14 desktopXL:col-span-8 desktopXL:p-5 desktopXL:text-3xl";
  // #endregion

  // #region Card 2
  //INFO Card 2
  const default_Card2Container =
    "grid grid-cols-8 grid-rows-4 col-span-1 col-start-2 row-start-4 p-4 rounded-lg shadow-lg bg-slate-100";
  const mobileSM_Card2Container = "";
  const mobile_Card2Container =
    "mobile:col-start-1 mobile:p-2 mobile:m-2 mobile:col-span-8 mobile:row-start-5 mobile:row-span-2";
  const tablet_Card2Container = "";
  const tabletXL_Card2Container = "";
  const laptop_Card2Container = "";
  const desktop_Card2Container = "";
  const desktopXL_Card2Container =
    "desktopXL:grid-cols-10 desktop:col-span-2 desktopXL:col-start-5 desktopXL:row-start-3 desktopXL:row-span-4";
  // #endregion

  // #region Card 3

  //INFO Card 3
  const default_Card3Container =
    "grid grid-cols-8 grid-rows-4 col-span-1 col-start-2 row-start-6 p-4 rounded-lg shadow-lg bg-slate-100";
  const mobileSM_Card3Container = "";
  const mobile_Card3Container =
    "mobile:col-start-1 mobile:p-2 mobile:m-2 mobile:col-span-8 mobile:row-start-7 mobile:row-span-2";
  const tablet_Card3Container = "";
  const tabletXL_Card3Container = "";
  const laptop_Card3Container = "";
  const desktop_Card3Container = "";
  const desktopXL_Card3Container =
    "desktopXL:grid-cols-10 desktop:col-span-2 desktopXL:col-start-8 desktopXL:row-start-3 desktopXL:row-span-4";
  // #endregion

  return (
    <>
      <div
        ref={ref}
        className="relative overflow-hidden overscroll-none"
        id="paymentInformation"
      >
        {/* add a bg div? */}
        {/* Background image with opacity */}
        {/* <div className="absolute inset-0 bg-[url('/src/assets/sectionbg.jpg')] bg-cover bg-center opacity-[.03]"> */}
        {/* INFO Payments Container */}
        <div
          className={`
        ${default_PaymentsContainer}
        ${mobileSM_PaymentsContainer}
        ${mobile_PaymentsContainer}
        ${tablet_PaymentsContainer}
        ${tabletXL_PaymentsContainer}
        ${laptop_PaymentsContainer}
        ${desktop_PaymentsContainer}
        ${desktopXL_PaymentsContainer}
        `}
        >
          {/* INFO Payments Title */}
          <span
            className={`
          ${default_PaymentsTitle}
          ${mobileSM_PaymentsTitle}
          ${mobile_PaymentsTitle}
          ${tablet_PaymentsTitle}
          ${tabletXL_PaymentsTitle}
          ${laptop_PaymentsTitle}
          ${desktop_PaymentsTitle}
          ${desktopXL_PaymentsTitle}
          `}
          >
            Pricing
          </span>

          {/* INFO Contact Details */}
          <div
            className={`
          ${default_ContactDetails}
          ${mobileSM_ContactDetails}
          ${mobile_ContactDetails}
          ${tabletContactDetails}
          ${tabletXL_ContactDetails}
          ${laptop_ContactDetails}
          ${desktop_ContactDetails}
          ${desktopXL_ContactDetails}
          `}
          >
            If you would like a custom quote please contact:{" "}
            <a
              href="mailto:info@infinitepixel.dev"
              className="italic text-red-500 underline hover:text-red-700"
            >
              info@infinitepixel.dev
            </a>
          </div>

          {/*INFO Payment Cards */}
          <>
            {/*INFO Card 1 */}
            <div
              className={`
            ${default_Card1Container}
            ${mobileSM_Card1Container}
            ${mobile_Card1Container}
            ${tablet_Card1Container}
            ${tabletXL_Card1Container}
            ${laptop_Card1Container}
            ${desktop_Card1Container}
            ${desktopXL_Card1Container}
            `}
            >
              {/*INFO Card 1 - Plan Name */}
              <h2
                className={`
            ${default_Card1PlanName}
            ${mobileSM_Card1PlanName}
            ${mobile_Card1PlanName}
            ${tablet_Card1PlanName}
            ${tabletXL_Card1PlanName}
            ${laptop_Card1PlanName}
            ${desktop_Card1PlanName}
            ${desktopXL_Card1PlanName}
            `}
              >
                <FaUser className="inline-block mr-1" size={20} />
                <span>Basic Plan</span>
              </h2>
              {/*INFO Card 1 - Main Price */}
              <div
                className={`
            ${default_Card1MainPrice}
            ${mobileSM_Card1MainPrice}
            ${mobile_Card1MainPrice}
            ${tablet_Card1MainPrice}
            ${tabletXL_Card1MainPrice}
            ${laptop_Card1MainPrice}
            ${desktop_Card1MainPrice}
            ${desktopXL_Card1MainPrice}
            `}
              >
                $300
              </div>
              {/*INFO Card 1 -Features */}
              <ul
                className={`
            ${default_Card1Features}
            ${mobileSM_Card1Features}
            ${mobile_Card1Features}
            ${tablet_Card1Features}
            ${tabletXL_Card1Features}
            ${laptop_Card1Features}
            ${desktop_Card1Features}
            ${desktopXL_Card1Features}
            `}
              >
                <li className="flex items-center p-2 mb-2 desktopXL:p-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800"> Up To 5 Pages</span>
                </li>
                <li className="flex items-center p-2 mb-2 desktopXL:p-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Unlimited Revisions</span>
                </li>
                <li className="flex items-center p-2 mb-2 desktopXL:p-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
                <li className="flex items-center p-2 mb-2 desktopXL:p-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Contact Form</span>
                </li>
                <li className="flex items-center p-2 mb-2 desktopXL:p-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
              </ul>
              {/*INFO Card 1 - Button */}
              <button
                className={`
            ${default_Card1Button}
            ${mobileSM_Card1Button}
            ${mobile_Card1Button}
            ${tablet_Card1Button}
            ${tabletXL_Card1Button}
            ${laptop_Card1Button}
            ${desktop_Card1Button}
            ${desktopXL_Card1Button}
            `}
              >
                Order Now
              </button>
            </div>

            {/*INFO Card 2 */}
            <div
              className={`
            ${default_Card2Container}
            ${mobileSM_Card2Container}
            ${mobile_Card2Container}
            ${tablet_Card2Container}
            ${tabletXL_Card2Container}
            ${laptop_Card2Container}
            ${desktop_Card2Container}
            ${desktopXL_Card2Container}
            `}
            >
              <h2 className="mb-4 text-lg font-bold text-center text-sky-800 mobile:col-start-5 mobile:col-span-4 mobile:row-start-1">
                <FaUser className="inline-block mr-1" size={20} />
                <span>Basic Plan</span>
              </h2>
              <div className="mb-4 text-5xl font-bold text-center text-blue-600 mobile:col-start-5 mobile:col-span-4 mobile:row-start-2">
                $300
              </div>
              <ul className="text-sm mobile:col-start-1 mobile:mt-3 mobile:col-span-4 mobile:row-start-1">
                <li className="flex items-center p-2 mb-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800"> Up To 5 Pages</span>
                </li>
                <li className="flex items-center p-2 mb-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Unlimited Revisions</span>
                </li>
                <li className="flex items-center p-2 mb-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
                <li className="flex items-center p-2 mb-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Contact Form</span>
                </li>
                <li className="flex items-center p-2 mb-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
              </ul>
              <button className="self-center p-2 m-4 mb-6 text-lg font-bold text-white duration-500 bg-blue-600 rounded hover:bg-blue-700 mobile:col-start-5 mobile:col-span-4 mobile:row-start-4 mobile:row-span-1 desktopXL:col-start-2 desktopXL:col-span-8 desktopXL:p-5 desktopXL:text-3xl">
                Order Now
              </button>
            </div>

            {/*INFO Card 3 */}
            <div
              className={`
            ${default_Card3Container}
            ${mobileSM_Card3Container}
            ${mobile_Card3Container}
            ${tablet_Card3Container}
            ${tabletXL_Card3Container}
            ${laptop_Card3Container}
            ${desktop_Card3Container}
            ${desktopXL_Card3Container}
            `}
            >
              <h2 className="mb-4 text-lg font-bold text-center text-sky-800 mobile:col-start-5 mobile:col-span-4 mobile:row-start-1">
                <FaUser className="inline-block mr-1" size={20} />
                <span>Basic Plan</span>
              </h2>
              <div className="mb-4 text-5xl font-bold text-center text-blue-600 mobile:col-start-5 mobile:col-span-4 mobile:row-start-2">
                $300
              </div>
              <ul className="text-sm mobile:col-start-1 mobile:mt-3 mobile:col-span-4 mobile:row-start-1">
                <li className="flex items-center p-2 mb-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800"> Up To 5 Pages</span>
                </li>
                <li className="flex items-center p-2 mb-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Unlimited Revisions</span>
                </li>
                <li className="flex items-center p-2 mb-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
                <li className="flex items-center p-2 mb-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Contact Form</span>
                </li>
                <li className="flex items-center p-2 mb-2 mobile:mb-0 mobile:p-0">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
              </ul>
              <button className="self-center p-2 m-4 mb-6 text-lg font-bold text-white duration-500 bg-blue-600 rounded hover:bg-blue-700 mobile:col-start-5 mobile:col-span-4 mobile:row-start-4 mobile:row-span-1 desktopXL:col-start-2 desktopXL:col-span-8 desktopXL:p-5 desktopXL:text-3xl">
                Order Now
              </button>
            </div>
          </>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default PricingCard;
