/* eslint-disable no-unused-vars */
// Payments - Page 3

import { useEffect, useContext, useRef } from "react"
import { NavigationContext } from "../../../context/navigationContext"

import { FaCircleCheck, FaUser, FaCheckDouble } from "react-icons/fa6"

export function PricingCard() {
  const { setIsPaymentsPage } = useContext(NavigationContext)
  const ref = useRef(null) // Reference to the component's DOM element

  useEffect(() => {
    const handleResize = () => {
      // console.clear();
      console.log(window.innerWidth, window.innerHeight)
      //DesktopXL
      if (window.innerWidth > 2280) {
        console.log("Desktop XXL")
        // setDesktopAnimation(true)
      }
      //ALL Other Resolutions under DesktopXL
      else if (window.innerWidth < 1535) {
        // setDesktopAnimation(false)
      }
    }
    handleResize()
  })

  // Intersection Observer to detect when the component is in view
  useEffect(() => {
    const currentRef = ref.current

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsPaymentsPage(entry.isIntersecting)
      },
      {
        root: null, // Using the viewport as the container
        rootMargin: "0px",
        threshold: 0.1, // 10% of the element should be visible
      }
    )

    // Attach the observer to the ref element
    if (currentRef) {
      observer.observe(currentRef)
    }

    // Clean up observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [setIsPaymentsPage])

  //INFO Payments Container

  const default_PaymentsContainer =
    "z-10 grid w-full h-screen grid-cols-8 gap-1 overflow-hidden grid-rows-8 bg-gradient-to-r from-zinc-50 to-zinc-400"
  const mobileSM_PaymentsContainer = "mobileSM:grid-cols-8"
  const mobile_PaymentsContainer = ""
  const tablet_PaymentsContainer = ""
  const tabletXL_PaymentsContainer = ""
  const laptop_PaymentsContainer = ""
  const desktop_PaymentsContainer = ""
  const desktopXL_PaymentsContainer = "desktopXL:grid-cols-10"
  const desktopXXL_PaymentsContainer = ""

  //INFO Payments Title
  const default_PaymentsTitle =
    "row-start-2 p-2 text-2xl text-center font-bold leading-normal tracking-normal text-slate-800"
  const mobileSM_PaymentsTitle =
    "mobileSM:col-start-4 mobileSM:col-span-2 mobileSM:text-2xl mobileSM:row-start-1"
  const mobile_PaymentsTitle = ""
  const tablet_PaymentsTitle = ""
  const tabletXL_PaymentsTitle = ""
  const laptop_PaymentsTitle = ""
  const desktop_PaymentsTitle = ""
  const desktopXL_PaymentsTitle =
    "desktopXL:text-8xl desktopXL:col-start-5 col-span-2 desktopXL:p-5"
  const desktopXXL_PaymentsTitle =
    "desktopXXL:col-start-4 desktopXXL:col-span-4 desktopXXL:text-3x1"

  //INFO Contact Details
  const default_ContactDetails =
    "row-start-2 col-start-2 col-span-8 p-5 italic text-slate-800 self-center text-center text-1xl"
  const mobileSM_ContactDetails =
    "mobileSM:col-start-1 mobileSM:row-start-1 mobileSM:mt-24 mobileSM:mb-0"
  const mobile_ContactDetails = ""
  const tabletContactDetails = ""
  const tabletXL_ContactDetails = ""
  const laptop_ContactDetails = ""
  const desktop_ContactDetails = ""
  const desktopXL_ContactDetails =
    "desktopXL:col-start-2 desktopXL:row-start-1 desktopXL:mt-48"
  const desktopXXL_ContactDetails = ""

  // #region Card 1

  //INFO Card 1 - Container
  const default_Card1Container =
    "grid grid-cols-8 relative grid-rows-4 col-span-8 col-start-2 row-start-2 rounded-lg shadow-lg bg-slate-800 z-10"
  const mobileSM_Card1Container =
    "mobileSM:grid-cols-8 mobileSM:col-start-1 mobileSM:col-span-8 mx-2 mobileSM:row-start-3 row-span-2"
  const mobile_Card1Container = ""

  const tablet_Card1Container = ""
  const tabletXL_Card1Container = ""
  const laptop_Card1Container = ""
  const desktop_Card1Container = ""
  const desktopXL_Card1Container =
    "desktopXL:grid-cols-10 desktop:col-span-2 desktopXL:m-0 desktopXL:p-0 desktopXL:col-start-2 desktopXL:row-start-3 desktopXL:row-span-4"
  const desktopXXL_Card1Container = "desktopXXL:p-0 desktopXXL:m-0"

  //INFO Card 1 - Plan Name
  const default_Card1PlanName = "text-lg font-bold text-center text-slate-800"
  const mobileSM_Card1PlanName =
    "mobileSM:col-start-5 mobileSM:col-span-4 mobileSM:row-start-1"
  const mobile_Card1PlanName = ""
  const tablet_Card1PlanName = ""
  const tabletXL_Card1PlanName = ""
  const laptop_Card1PlanName = ""
  const desktop_Card1PlanName = ""
  const desktopXL_Card1PlanName =
    "desktopXL:col-start-2 desktopXL:p-0 mt-4 desktopXL:row-start-1 desktopXL:col-span-8 desktopXL:text-1xl"
  const desktopXXL_Card1PlanName =
    "desktopXXL:col-start-3 desktopXXL:col-span-6 p-5"

  //INFO Card 1 - Main Price
  const default_Card1MainPrice =
    "mb-4 text-5xl font-bold text-center text-blue-600"
  const mobileSM_Card1MainPrice =
    "mobileSM:col-start-5 mobileSM:col-span-4 mobileSM:row-start-2"
  const mobile_Card1MainPrice = ""
  const tablet_Card1MainPrice = ""
  const tabletXL_Card1MainPrice = ""
  const laptop_Card1MainPrice = ""
  const desktop_Card1MainPrice = ""
  const desktopXL_Card1MainPrice =
    "desktopXL:col-start-2 desktopXL:row-start-2 desktopXL:col-span-8 desktopXL:text-5xl"
  const desktopXXL_Card1MainPrice =
    "desktopXXL:col-start-2 desktopXXL:m-0 desktopXXL:row-start-2 desktopXXL:text-6xl"

  //INFO Card 1 - Features Container
  const default_Card1FeaturesContainer = "text-sm pt-5"
  const mobileSM_Card1FeaturesContainer =
    "mobileSM:col-start-1 mobileSM:mt-3 mobileSM:col-span-4 mobileSM:row-start-1"
  const mobile_Card1FeaturesContainer = ""

  const tablet_Card1FeaturesContainer = ""
  const tabletXL_Card1FeaturesContainer = ""
  const laptop_Card1FeaturesContainer = ""
  const desktop_Card1FeaturesContainer = ""
  const desktopXL_Card1FeaturesContainer =
    "desktopXL:col-start-2 desktopXL:row-start-2 desktopXL:mt-14 desktopXL:col-span-8 desktopXL:text-sm desktopXL:space-y-0"
  const desktopXXL_Card1FeaturesContainer =
    "desktopXXL:col-start-2 desktopXXL:col-span-6 desktopXXL:m-0 desktopXXL:p-0 desktopXXL:row-start-3 desktopXXL:text-base desktopXXL:space-y-2"

  //INFO Card 1 - Button
  const default_Card1Button =
    "self-center p-2 m-3 mb-6 text-lg font-bold text-white duration-500 bg-blue-600 rounded hover:bg-blue-700"
  const mobileSM_Card1Button =
    "mobileSM:col-start-5 mobileSM:col-span-4 mobileSM:row-start-4 mobileSM:row-span-1"
  const mobile_Card1Button = ""
  const tablet_Card1Button = ""
  const tabletXL_Card1Button = ""
  const laptop_Card1Button = ""
  const desktop_Card1Button = ""
  const desktopXL_Card1Button =
    "desktopXL:col-start-2 desktopXL:row-start-8 desktopXL:mb-8 desktopXL:col-span-8 "
  const desktopXXL_Card1Button =
    "desktopXXL:col-start-2 desktopXXL:row-start-6 desktopXXL:hover:drop-shadow-md desktopXXL:hover:drop-shadow-lg"

  // #endregion

  // #region Card 2

  //INFO Card 1 - Container
  const default_Card2Container =
    "grid grid-cols-8 relative grid-rows-4 col-span-8 col-start-2 row-start-2 rounded-lg shadow-lg bg-slate-800 z-10"
  const mobileSM_Card2Container =
    "mobileSM:grid-cols-8 mobileSM:col-start-1 mobileSM:col-span-8 mx-2 mobileSM:row-start-3 row-span-2"
  const mobile_Card2Container = ""

  const tablet_Card2Container = ""
  const tabletXL_Card2Container = ""
  const laptop_Card2Container = ""
  const desktop_Card2Container = ""
  const desktopXL_Card2Container =
    "desktopXL:grid-cols-10 desktop:col-span-2 desktopXL:m-0 desktopXL:p-0 desktopXL:col-start-5 desktopXL:row-start-3 desktopXL:row-span-4"
  const desktopXXL_Card2Container = "desktopXXL:p-0 desktopXXL:m-0"

  //INFO Card 1 - Plan Name
  const default_Card2PlanName = "text-lg font-bold text-center text-slate-800 "
  const mobileSM_Card2PlanName =
    "mobileSM:col-start-5 mobileSM:col-span-4 mobileSM:row-start-1"
  const mobile_Card2PlanName = ""
  const tablet_Card2PlanName = ""
  const tabletXL_Card2PlanName = ""
  const laptop_Card2PlanName = ""
  const desktop_Card2PlanName = ""
  const desktopXL_Card2PlanName =
    "desktopXL:col-start-2 desktopXL:p-0 desktopXL:mt-4 desktopXL:row-start-1 desktopXL:col-span-8 desktopXL:text-1xl"
  const desktopXXL_Card2PlanName =
    "desktopXXL:col-start-3 desktopXXL:col-span-6 p-5"

  //INFO Card 1 - Main Price
  const default_Card2MainPrice =
    "mb-4 text-5xl font-bold text-center text-blue-600"
  const mobileSM_Card2MainPrice =
    "mobileSM:col-start-5 mobileSM:col-span-4 mobileSM:row-start-2"
  const mobile_Card2MainPrice = ""
  const tablet_Card2MainPrice = ""
  const tabletXL_Card2MainPrice = ""
  const laptop_Card2MainPrice = ""
  const desktop_Card2MainPrice = ""
  const desktopXL_Card2MainPrice =
    "desktopXL:col-start-2 desktopXL:row-start-2 desktopXL:col-span-8 desktopXL:text-5xl"
  const desktopXXL_Card2MainPrice =
    "desktopXXL:col-start-2 desktopXXL:m-0 desktopXXL:row-start-2 desktopXXL:text-6xl"

  //INFO Card 1 - Features Container
  const default_Card2FeaturesContainer = "text-sm pt-5"
  const mobileSM_Card2FeaturesContainer =
    "mobileSM:col-start-1 mobileSM:mt-3 mobileSM:col-span-4 mobileSM:row-start-1"
  const mobile_Card2FeaturesContainer = ""

  const tablet_Card2FeaturesContainer = ""
  const tabletXL_Card2FeaturesContainer = ""
  const laptop_Card2FeaturesContainer = ""
  const desktop_Card2FeaturesContainer = ""
  const desktopXL_Card2FeaturesContainer =
    "desktopXL:col-start-2 desktopXL:row-start-2 desktopXL:mt-14 desktopXL:col-span-8 desktopXL:text-sm desktopXL:space-y-0"
  const desktopXXL_Card2FeaturesContainer =
    "desktopXXL:col-start-2 desktopXXL:col-span-6 desktopXXL:m-0 desktopXXL:p-0 desktopXXL:row-start-3 desktopXXL:text-base desktopXXL:space-y-2"

  //INFO Card 1 - Button
  const default_Card2Button =
    "self-center p-2 m-3 mb-6 text-lg font-bold text-white duration-500 bg-blue-600 rounded hover:bg-blue-700"
  const mobileSM_Card2Button =
    "mobileSM:col-start-5 mobileSM:col-span-4 mobileSM:row-start-4 mobileSM:row-span-1"
  const mobile_Card2Button = ""
  const tablet_Card2Button = ""
  const tabletXL_Card2Button = ""
  const laptop_Card2Button = ""
  const desktop_Card2Button = ""
  const desktopXL_Card2Button =
    "desktopXL:col-start-2 desktopXL:row-start-8 desktopXL:mb-8 desktopXL:col-span-8 "
  const desktopXXL_Card2Button =
    "desktopXXL:col-start-2 desktopXXL:row-start-6 desktopXXL:hover:drop-shadow-md desktopXXL:hover:drop-shadow-lg"

  // #endregion

  // #region Card 3

  //INFO Card 1 - Container
  const default_Card3Container =
    "grid grid-cols-8 relative grid-rows-4 col-span-8 col-start-2 row-start-2 rounded-lg shadow-lg bg-slate-800 z-10"
  const mobileSM_Card3Container =
    "mobileSM:grid-cols-8 mobileSM:col-start-1 mobileSM:col-span-8 mx-2 mobileSM:row-start-3 row-span-2"
  const mobile_Card3Container = ""

  const tablet_Card3Container = ""
  const tabletXL_Card3Container = ""
  const laptop_Card3Container = ""
  const desktop_Card3Container = ""
  const desktopXL_Card3Container =
    "desktopXL:grid-cols-10 desktop:col-span-2 desktopXL:m-0 desktopXL:p-0 desktopXL:col-start-8 desktopXL:row-start-3 desktopXL:row-span-4"
  const desktopXXL_Card3Container = "desktopXXL:p-0 desktopXXL:m-0"

  //INFO Card 1 - Plan Name
  const default_Card3PlanName = "text-lg font-bold text-center text-slate-800 "
  const mobileSM_Card3PlanName =
    "mobileSM:col-start-5 mobileSM:col-span-4 mobileSM:row-start-1"
  const mobile_Card3PlanName = ""
  const tablet_Card3PlanName = ""
  const tabletXL_Card3PlanName = ""
  const laptop_Card3PlanName = ""
  const desktop_Card3PlanName = ""
  const desktopXL_Card3PlanName =
    "desktopXL:col-start-2 desktopXL:p-0 mt-4 desktopXL:row-start-1 desktopXL:col-span-8 desktopXL:text-1xl"
  const desktopXXL_Card3PlanName =
    "desktopXXL:col-start-3 desktopXXL:col-span-6 p-5"

  //INFO Card 1 - Main Price
  const default_Card3MainPrice =
    "mb-4 text-5xl font-bold text-center text-blue-600"
  const mobileSM_Card3MainPrice =
    "mobileSM:col-start-5 mobileSM:col-span-4 mobileSM:row-start-2"
  const mobile_Card3MainPrice = ""
  const tablet_Card3MainPrice = ""
  const tabletXL_Card3MainPrice = ""
  const laptop_Card3MainPrice = ""
  const desktop_Card3MainPrice = ""
  const desktopXL_Card3MainPrice =
    "desktopXL:col-start-2 desktopXL:row-start-2 desktopXL:col-span-8 desktopXL:text-5xl"
  const desktopXXL_Card3MainPrice =
    "desktopXXL:col-start-2 desktopXXL:m-0 desktopXXL:row-start-2 desktopXXL:text-6xl"

  //INFO Card 1 - Features Container
  const default_Card3FeaturesContainer = "text-sm pt-5"
  const mobileSM_Card3FeaturesContainer =
    "mobileSM:col-start-1 mobileSM:mt-3 mobileSM:col-span-4 mobileSM:row-start-1"
  const mobile_Card3FeaturesContainer = ""

  const tablet_Card3FeaturesContainer = ""
  const tabletXL_Card3FeaturesContainer = ""
  const laptop_Card3FeaturesContainer = ""
  const desktop_Card3FeaturesContainer = ""
  const desktopXL_Card3FeaturesContainer =
    "desktopXL:col-start-2 desktopXL:row-start-2 desktopXL:mt-14 desktopXL:col-span-8 desktopXL:text-sm desktopXL:space-y-0"
  const desktopXXL_Card3FeaturesContainer =
    "desktopXXL:col-start-2 desktopXXL:col-span-6 desktopXXL:m-0 desktopXXL:p-0 desktopXXL:row-start-3 desktopXXL:text-base desktopXXL:space-y-2"

  //INFO Card 1 - Button
  const default_Card3Button =
    "self-center p-2 m-3 mb-6 text-lg font-bold text-white duration-500 bg-blue-600 rounded hover:bg-blue-700"
  const mobileSM_Card3Button =
    "mobileSM:col-start-5 mobileSM:col-span-4 mobileSM:row-start-4 mobileSM:row-span-1"
  const mobile_Card3Button = ""
  const tablet_Card3Button = ""
  const tabletXL_Card3Button = ""
  const laptop_Card3Button = ""
  const desktop_Card3Button = ""
  const desktopXL_Card3Button =
    "desktopXL:col-start-2 desktopXL:row-start-8 desktopXL:mb-8 desktopXL:col-span-8 "
  const desktopXXL_Card3Button =
    "desktopXXL:col-start-2 desktopXXL:row-start-6 desktopXXL:hover:drop-shadow-md desktopXXL:hover:drop-shadow-lg"

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
        {/*INFO-JSX Payments Container */}
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
        ${desktopXXL_PaymentsContainer}
        `}
        >
          {/*INFO Payments Title */}
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
          ${desktopXXL_PaymentsTitle}
          `}
          >
            Pricing
          </span>

          {/*INFO Contact Details */}
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
          ${desktopXXL_ContactDetails}
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

          {/*INFO-JSX Payment Cards */}
          <>
            {/*INFO-JSX Card 1 */}
            <>
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
            ${desktopXXL_Card1Container}
            `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="100 0 900 278"
                  className="w-full col-start-1 row-span-2 row-start-1 rounded-lg col-span-full"
                  style={{
                    top: "0",
                    left: "0",
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    zIndex: -1,
                  }}
                >
                  <path
                    fill="#cd7f32"
                    fillOpacity="1"
                    d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,160C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
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
              ${desktopXXL_Card1PlanName}
              `}
                >
                  <FaUser className="inline-block mr-1" size={20} />
                  <span>Bronze Plan</span>
                </h2>
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
              ${desktopXXL_Card1MainPrice}
              `}
                >
                  $300
                </div>
                <ul
                  className={`
              ${default_Card1FeaturesContainer}
              ${mobileSM_Card1FeaturesContainer}
              ${mobile_Card1FeaturesContainer}
              ${tablet_Card1FeaturesContainer}
              ${tabletXL_Card1FeaturesContainer}
              ${laptop_Card1FeaturesContainer}
              ${desktop_Card1FeaturesContainer}
              ${desktopXL_Card1FeaturesContainer}
              ${desktopXXL_Card1FeaturesContainer}
              `}
                >
                  {/*INFO-JSX Card 1 - Feature li */}
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200"> Up To 5 Pages</span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200">Unlimited Revisions</span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200 ">
                      All Source Code Provided
                    </span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200">Contact Form</span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200 ">
                      100% Ownership Rights
                    </span>
                  </li>
                </ul>
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
              ${desktopXXL_Card1Button}
              `}
                >
                  Order Now
                </button>
              </div>
            </>

            {/*INFO-JSX Card 2 */}
            <>
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
            ${desktopXXL_Card2Container}
            `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="100 0 900 278"
                  className="w-full col-start-1 row-span-2 row-start-1 rounded-lg col-span-full"
                  style={{
                    top: "0",
                    left: "0",
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    zIndex: -1,
                  }}
                >
                  <path
                    fill="#d3af37"
                    fillOpacity="1"
                    d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,160C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
                <h2
                  className={`
              ${default_Card2PlanName}
              ${mobileSM_Card2PlanName}
              ${mobile_Card2PlanName}
              ${tablet_Card2PlanName}
              ${tabletXL_Card2PlanName}
              ${laptop_Card2PlanName}
              ${desktop_Card2PlanName}
              ${desktopXL_Card2PlanName}
              ${desktopXXL_Card2PlanName}
              `}
                >
                  <FaUser className="inline-block mr-1" size={20} />
                  <span>Gold Plan</span>
                </h2>
                <div
                  className={`
              ${default_Card2MainPrice}
              ${mobileSM_Card2MainPrice}
              ${mobile_Card2MainPrice}
              ${tablet_Card2MainPrice}
              ${tabletXL_Card2MainPrice}
              ${laptop_Card2MainPrice}
              ${desktop_Card2MainPrice}
              ${desktopXL_Card2MainPrice}
              ${desktopXXL_Card2MainPrice}
              `}
                >
                  $300
                </div>
                <ul
                  className={`
              ${default_Card2FeaturesContainer}
              ${mobileSM_Card2FeaturesContainer}
              ${mobile_Card2FeaturesContainer}
              ${tablet_Card2FeaturesContainer}
              ${tabletXL_Card2FeaturesContainer}
              ${laptop_Card2FeaturesContainer}
              ${desktop_Card2FeaturesContainer}
              ${desktopXL_Card2FeaturesContainer}
              ${desktopXXL_Card2FeaturesContainer}
              `}
                >
                  {/*INFO-JSX Card 1 - Feature li */}
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200"> Up To 5 Pages</span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200">Unlimited Revisions</span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200 ">
                      All Source Code Provided
                    </span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200">Contact Form</span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200 ">
                      100% Ownership Rights
                    </span>
                  </li>
                </ul>
                <button
                  className={`
              ${default_Card2Button}
              ${mobileSM_Card2Button}
              ${mobile_Card2Button}
              ${tablet_Card2Button}
              ${tabletXL_Card2Button}
              ${laptop_Card2Button}
              ${desktop_Card2Button}
              ${desktopXL_Card2Button}
              ${desktopXXL_Card2Button}
              `}
                >
                  Order Now
                </button>
              </div>
            </>
            {/*INFO-JSX Card 3 */}
            <>
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
            ${desktopXXL_Card3Container}
            `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="100 0 900 278"
                  className="w-full col-start-1 row-span-2 row-start-1 rounded-lg col-span-full"
                  style={{
                    top: "0",
                    left: "0",
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    zIndex: -1,
                  }}
                >
                  <path
                    fill="#e5e4e2"
                    fillOpacity="1"
                    d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,160C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
                <h2
                  className={`
              ${default_Card3PlanName}
              ${mobileSM_Card3PlanName}
              ${mobile_Card3PlanName}
              ${tablet_Card3PlanName}
              ${tabletXL_Card3PlanName}
              ${laptop_Card3PlanName}
              ${desktop_Card3PlanName}
              ${desktopXL_Card3PlanName}
              ${desktopXXL_Card3PlanName}
              `}
                >
                  <FaUser className="inline-block mr-1" size={20} />
                  <span>Platinum Plan</span>
                </h2>
                <div
                  className={`
              ${default_Card3MainPrice}
              ${mobileSM_Card3MainPrice}
              ${mobile_Card3MainPrice}
              ${tablet_Card3MainPrice}
              ${tabletXL_Card3MainPrice}
              ${laptop_Card3MainPrice}
              ${desktop_Card3MainPrice}
              ${desktopXL_Card3MainPrice}
              ${desktopXXL_Card3MainPrice}
              `}
                >
                  $300
                </div>
                <ul
                  className={`
              ${default_Card3FeaturesContainer}
              ${mobileSM_Card3FeaturesContainer}
              ${mobile_Card3FeaturesContainer}
              ${tablet_Card3FeaturesContainer}
              ${tabletXL_Card3FeaturesContainer}
              ${laptop_Card3FeaturesContainer}
              ${desktop_Card3FeaturesContainer}
              ${desktopXL_Card3FeaturesContainer}
              ${desktopXXL_Card3FeaturesContainer}
              `}
                >
                  {/*INFO-JSX Card 1 - Feature li */}
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200"> Up To 5 Pages</span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200">Unlimited Revisions</span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200 ">
                      All Source Code Provided
                    </span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200">Contact Form</span>
                  </li>
                  <li className="flex items-center p-2 mx-2 desktopXL:p-2 mobile:mb-0 mobile:p-0 ">
                    <span className="icon-span">
                      <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                    </span>
                    <span className="text-slate-200 ">
                      100% Ownership Rights
                    </span>
                  </li>
                </ul>
                <button
                  className={`
              ${default_Card3Button}
              ${mobileSM_Card3Button}
              ${mobile_Card3Button}
              ${tablet_Card3Button}
              ${tabletXL_Card3Button}
              ${laptop_Card3Button}
              ${desktop_Card3Button}
              ${desktopXL_Card3Button}
              ${desktopXXL_Card3Button}
              `}
                >
                  Order Now
                </button>
              </div>
            </>
          </>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default PricingCard
