/* eslint-disable no-unused-vars */
// Payments - Page 3

import { useEffect, useContext, useRef } from "react"
import { NavigationContext } from "../../context/navigationContext"

import { FaCircleCheck, FaUser, FaCheckDouble } from "react-icons/fa6"

export function PricingCard() {
  const { setIsPaymentsPage } = useContext(NavigationContext)
  const ref = useRef(null) // Reference to the component's DOM element

  // Intersection Observer to detect when the component is in view
  useEffect(() => {
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
    if (ref.current) {
      observer.observe(ref.current)
    }

    // Clean up observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [setIsPaymentsPage])

  //INFO Payments Container
  const defaultPaymentsContainer =
    "z-10 grid w-full h-screen grid-cols-8 gap-1 overflow-hidden grid-rows-8"
  const mobilePaymentsContainer = "mobile:grid-cols-8"
  const tabletPaymentsContainer = ""
  const tabletXLPaymentsContainer = ""
  const laptopPaymentsContainer = ""
  const desktopPaymentsContainer = ""
  const desktopXLPaymentsContainer = "desktopXL:grid-cols-10"

  //INFO Payments Title
  const defaultPaymentsTitle =
    "row-start-2 p-2 text-2xl text-center font-bold leading-normal tracking-normal"
  const mobilePaymentsTitle =
    "mobile:col-start-4 mobile:col-span-2 mobile:text-2xl mobile:row-start-1"
  const tabletPaymentsTitle = ""
  const tabletXLPaymentsTitle = ""
  const laptopPaymentsTitle = ""
  const desktopPaymentsTitle = ""
  const desktopXLPaymentsTitle = "text-7x1"

  //INFO Contact Details
  const defaultContactDetails =
    "row-start-2 col-start-2 col-span-8 p-5 italic self-center text-center text-1xl"
  const mobileContactDetails = ""
  const tabletContactDetails = ""
  const tabletXLContactDetails = ""
  const laptopContactDetails = ""
  const desktopContactDetails = ""
  const desktopXLContactDetails = ""

  //INFO Card 1
  const defaultCard1Container =
    "grid grid-cols-8 desktopXL:grid-cols-8 desktopXL:grid-rows-10 desktopXL:grid-rows-10 grid-rows-4 col-span-1 col-start-2 row-start-2 p-4 rounded-lg shadow-lg bg-slate-100"
  const mobileCard1Container =
    "mobile:col-start-1 mobile:p-2 mobile:m-2 mobile:col-span-8 mobile:row-start-3 row-span-2"
  const tabletCard1Container = ""
  const tabletXLCard1Container = ""
  const laptopCard1Container = ""
  const desktopCard1Container = ""
  const desktopXLCard1Container =
    "desktopXL:grid-cols-10 desktop:col-span-2 desktopXL:col-start-2 desktopXL:row-span-4"

  //INFO Card 1 - Plan Name
  const defaultCard1PlanName =
    "text-lg font-bold text-center text-sky-800 mobile:col-start-5 mobile:col-span-4 mobile:row-start-1"
  const mobileCard1PlanName = ""
  const tabletCard1PlanName = ""
  const tabletXLCard1PlanName = ""
  const laptopCard1PlanName = ""
  const desktopCard1PlanName = ""
  const desktopXLCard1PlanName =
    "desktopXL:col-start-1 desktopXL:row-start-1 desktopXL:col-span-8 desktopXL:text-2xl"

  //INFO Card 1 - Main Price
  const defaultCard1MainPrice =
    "mb-4 text-5xl font-bold text-center text-blue-600 mobile:col-start-5 mobile:col-span-4 mobile:row-start-2"
  const mobileCard1MainPrice = ""
  const tabletCard1MainPrice = ""
  const tabletXLCard1MainPrice = ""
  const laptopCard1MainPrice = ""
  const desktopCard1MainPrice = ""
  const desktopXLCard1MainPrice =
    "desktopXL: col-start-2 desktopXL:row-start-2 desktopXL:col-span-8 desktopXL:text-5xl"

  //INFO Card 1 -Features
  const defaultCard1Features = "text-sm pt-5"
  const mobileCard1Features =
    "mobile:col-start-1 mobile:mt-3 mobile:col-span-4 mobile:row-start-1"
  const tabletCard1Features = ""
  const tabletXLCard1Features = ""
  const laptopCard1Features = ""
  const desktopCard1Features = ""
  const desktopXLCard1Features =
    "desktopXL:col-start-2 desktopXL:row-start-3 desktopXL:col-span-8 desktopXL:text-sm"

  //INFO Card 1 - Button
  const defaultCard1Button =
    "self-center p-2 m-3 mb-6 text-lg font-bold text-white duration-500 bg-blue-600 rounded hover:bg-blue-700"
  const mobileCard1Button =
    "mobile:col-start-5 mobile:col-span-4 mobile:row-start-4 mobile:row-span-1"
  const tabletCard1Button = ""
  const tabletXLCard1Button = ""
  const laptopCard1Button = ""
  const desktopCard1Button = ""
  const desktopXLCard1Button =
    "desktopXL:col-start-1 desktopXL:row-start-9 desktopXL:mt-14 desktopXL:col-span-8 desktopXL:p-5 desktopXL:text-3xl"

  //INFO Card 2
  const defaultCard2Container =
    "grid grid-cols-8 desktopXL:grid-cols-8 desktopXL:grid-rows-10 desktopXL:grid-rows-10 grid-rows-4 col-span-1 col-start-2 row-start-2 p-4 rounded-lg shadow-lg bg-slate-100"
  const mobileCard2Container =
    "mobile:col-start-1 mobile:p-2 mobile:m-2 mobile:col-span-8 mobile:row-start-5 row-span-2"
  const tabletCard2Container = ""
  const tabletXLCard2Container = ""
  const laptopCard2Container = ""
  const desktopCard2Container = ""
  const desktopXLCard2Container =
    "desktopXL:grid-cols-10 desktop:col-span-2 desktopXL:col-start-5 desktopXL:row-span-4"

  //INFO Card 2 - Plan Name
  const defaultCard2PlanName =
    "text-lg font-bold text-center text-sky-800 mobile:col-start-5 mobile:col-span-4 mobile:row-start-1"
  const mobileCard2PlanName = ""
  const tabletCard2PlanName = ""
  const tabletXLCard2PlanName = ""
  const laptopCard2PlanName = ""
  const desktopCard2PlanName = ""
  const desktopXLCard2PlanName = ""

  //INFO Card 2 - Main Price

  const defaultCard2MainPrice =
    "mb-4 text-5xl font-bold text-center text-blue-600 mobile:col-start-5 mobile:col-span-4 mobile:row-start-2"
  const mobileCard2MainPrice = ""
  const tabletCard2MainPrice = ""
  const tabletXLCard2MainPrice = ""
  const laptopCard2MainPrice = ""
  const desktopCard2MainPrice = ""
  const desktopXLCard2MainPrice = ""

  //INFO Card 3
  const defaultCard3Container =
    "grid grid-cols-8 grid-rows-4 col-span-1 col-start-2 row-start-6 p-4 rounded-lg shadow-lg bg-slate-100"
  const mobileCard3Container =
    "mobile:col-start-1 mobile:p-2 mobile:m-2 mobile:col-span-8 mobile:row-start-7 row-span-2"
  const tabletCard3Container = ""
  const tabletXLCard3Container = ""
  const laptopCard3Container = ""
  const desktopCard3Container = ""
  const desktopXLCard3Container =
    "desktopXL:grid-cols-10 desktop:col-span-2 desktopXL:col-start-8 desktopXL:row-span-4"

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
        ${defaultPaymentsContainer}
        ${mobilePaymentsContainer}
        ${tabletPaymentsContainer}
        ${tabletXLPaymentsContainer}
        ${laptopPaymentsContainer}
        ${desktopPaymentsContainer}
        ${desktopXLPaymentsContainer}
        `}
        >
          {/* INFO Payments Title */}
          <span
            className={`
          ${defaultPaymentsTitle}
          ${mobilePaymentsTitle}
          ${tabletPaymentsTitle}
          ${tabletXLPaymentsTitle}
          ${laptopPaymentsTitle}
          ${desktopPaymentsTitle}
          ${desktopXLPaymentsTitle}
          `}
          >
            Pricing
          </span>

          {/* INFO Contact Details */}
          <div
            className={`
          ${defaultContactDetails}
          ${mobileContactDetails}
          ${tabletContactDetails}
          ${tabletXLContactDetails}
          ${laptopContactDetails}
          ${desktopContactDetails}
          ${desktopXLContactDetails}
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

          {/*INFO Card 1 */}
          <div
            className={`
            ${defaultCard1Container}
            ${mobileCard1Container}
            ${tabletCard1Container}
            ${tabletXLCard1Container}
            ${laptopCard1Container}
            ${desktopCard1Container}
            ${desktopXLCard1Container}
            `}
          >
            {/*INFO Card 1 - Plan Name */}
            <h2
              className={`
            ${defaultCard1PlanName}
            ${mobileCard1PlanName}
            ${tabletCard1PlanName}
            ${tabletXLCard1PlanName}
            ${laptopCard1PlanName}
            ${desktopCard1PlanName}
            ${desktopXLCard1PlanName}
            `}
            >
              <FaUser className="inline-block mr-1" size={20} />
              <span>Basic Plan</span>
            </h2>
            {/*INFO Card 1 - Main Price */}
            <div
              className={`
            ${defaultCard1MainPrice}
            ${mobileCard1MainPrice}
            ${tabletCard1MainPrice}
            ${laptopCard1MainPrice}
            ${desktopCard1MainPrice}
            ${desktopXLCard1MainPrice}
            `}
            >
              $300
            </div>
            {/*INFO Card 1 -Features */}
            <ul
              className={`
            ${defaultCard1Features}
            ${mobileCard1Features}
            ${tabletCard1Features}
            ${tabletXLCard1Features}
            ${laptopCard1Features}
            ${desktopCard1Features}
            ${desktopXLCard1Features}
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
            ${defaultCard1Button}
            ${mobileCard1Button}
            ${tabletCard1Button}
            ${tabletXLCard1Button}
            ${laptopCard1Button}
            ${desktopCard1Button}
            ${desktopXLCard1Button}
            `}
            >
              Order Now
            </button>
          </div>

          {/*INFO Card 2 */}
          <div
            className={`
            ${defaultCard2Container}
            ${mobileCard2Container}
            ${tabletCard2Container}
            ${tabletXLCard2Container}
            ${laptopCard2Container}
            ${desktopCard2Container}
            ${desktopXLCard2Container}
            `}
          >
            <h2
              className={`
            {defaultCard2PlanName}
            {mobileCard2PlanName}
            {tabletCard2PlanName}
            {tabletXLCard2PlanName}
            {laptopCard2PlanName}
            {desktopCard2PlanName}
            {desktopXLCard2PlanName}
            `}
            >
              <FaUser className="inline-block mr-1" size={20} />
              <span>Basic Plan</span>
            </h2>
            <div
              className={`
            {defaultCard2MainPrice}
            {mobileCard2MainPrice}
            {tabletCard2MainPrice}
            {tabletXLCard2MainPrice}
            {laptopCard2MainPrice}
            {desktopCard2MainPrice}
            {desktopXLCard2MainPrice}
            `}
            >
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
            ${defaultCard3Container}
            ${mobileCard3Container}
            ${tabletCard3Container}
            ${tabletXLCard3Container}
            ${laptopCard3Container}
            ${desktopCard3Container}
            ${desktopXLCard3Container}
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
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default PricingCard
