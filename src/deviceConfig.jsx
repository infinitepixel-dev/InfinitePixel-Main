import { FaCircleCheck, FaUser, FaCheckDouble } from "react-icons/fa6";

//Device configuration for different screen sizes ie. mobile, tablet, desktop, etc.
const deviceConfig = [
  //SECTION Mobile Configurations
  //NOTE m384
  {
    type: "m384", // Galaxy S23 Ultra
    query: "(max-width: 384px) and (max-height: 824px)",
    layout: {
      heroPage: {
        heroPageContainer: "relative overflow-hidden h-dvh overscroll-none",

        heroPageElement:
          "z-10 grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8 column",

        //return the hero title as JSX:
        heroTitle: () => {
          return (
            <>
              <div className="col-span-6 col-start-2 px-1 mt-3 text-xl font-bold leading-normal tracking-normal">
                Developing Responsive Websites
                <div className="row-start-2">For Your Brand</div>
              </div>
            </>
          );
        },
        getStartedButton: () => {
          return (
            <a
              href="#paymentInformation"
              className="self-center col-start-2 col-span-6 row-start-2 mt-10 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800"
            >
              Get Started
            </a>
          );
        },
        // "self-center col-start-2 col-end-8 row-start-2 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-5xl",
        //output getStartedButton as JSX:
        // return (

        heroServices: () => {
          return (
            <div className="self-center col-span-6 col-start-2 row-start-5">
              {/* Web Design - Adjusted for responsive behavior */}
              <div className="col-start-1 mt-8 mb-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-base font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 galaxyS23Ultra:text-xl sm:text-xl lg:text-3xl">
                  Web Design
                </div>
                <div className="mt-2 text-sm galaxyS23Ultra:text-sm sm:text-lg lg:text-xl">
                  We create modern and responsive websites that look great on
                  all devices.
                </div>
              </div>

              {/* Data Transfer - Responsive adjustments */}
              <div className="col-start-1 mb-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  Data Transfer
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  We transfer your existing website to a modern platform with
                  ease.
                </div>
              </div>

              {/* SEO - Adjusted for responsive grid */}
              <div className="col-span-2 col-start-3 mb-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  SEO
                </div>
                <div className="mt-2 text-lg leading-7 galaxyS23Ultra:text-sm sm:text-xl lg:text-xl">
                  We help your website rank higher in search engines.
                </div>
              </div>

              {/* Additional Web Design Section if needed, or use for another service */}
              <div className="col-span-2 col-start-3 mb-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  More Web Design
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  Advanced solutions for web design challenges.
                </div>
              </div>
              {/* sub grid end */}
            </div>
          );
        },
        heroBackground: (
          orbRefs,
          backGroundBlurAmount,
          backGroundBorderRadius
        ) => {
          // console.log("orbRefs: ", orbRefs);
          return (
            <>
              <div
                ref={(el) => {
                  if (orbRefs[0]) {
                    orbRefs[0].current = el;
                  }
                }}
                className="absolute col-start-1 row-start-6 orb bg-color1"
                style={{
                  width: "50%",
                  height: "50%",
                  left: "-10%",
                  top: "60%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* lime */}
              <div
                ref={(el) => {
                  if (orbRefs[1]) {
                    orbRefs[1].current = el;
                  }
                }}
                className="absolute col-start-2 row-start-3 orb bg-color2"
                style={{
                  width: "35%",
                  height: "45%",
                  left: "-20%",
                  top: "-12%", // width: "40%", // height: "60%", //
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* sky */}
              <div
                ref={(el) => {
                  if (orbRefs[2]) {
                    orbRefs[2].current = el;
                  }
                }}
                className="absolute orb bg-color3"
                style={{
                  width: "30%",
                  height: "40%",
                  left: "65%",
                  top: "-15%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* violet */}
              <div
                ref={(el) => {
                  if (orbRefs[3]) {
                    orbRefs[3].current = el;
                  }
                }}
                className="absolute orb bg-color4"
                style={{
                  width: "40%",
                  height: "60%",
                  left: "25%",
                  top: "25%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* Yellow */}
              <div
                ref={(el) => {
                  if (orbRefs[4]) {
                    orbRefs[4].current = el;
                  }
                }}
                className="absolute orb bg-color5"
                style={{
                  width: "50%",
                  height: "50%",
                  left: "70%",
                  top: "70%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>

              <div id="blur"></div>
            </>
          );
        },
      },
      navigationBar: {
        navbarElement: "grid w-full h-16 grid-cols-8 overflow-hidden",
        navbarLogo: "col-start-2 col-end-3 self-center",
        navbarMenu: "col-start-4 col-end-7 row-start-1 self-center",
        navbarMenuItem: "ml-4 text-lg font-bold leading-7 tracking-normal",
      },
    },
  },
  //!SECTION Mobile Configurations End
  //SECTION Tablet Configurations
  //NOTE t1440p
  {
    type: "t1440p", // 1440p Tablet
    query: "(max-width: 1237px) and (max-height: 1327px)",
    layout: {
      heroPage: {
        d1440: "just a test",
        heroPageContainer: "relative overflow-hidden h-dvh overscroll-none",
        heroPageElement:
          "grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8",
        heroTitle: () => {
          return (
            <>
              <div className="self-center col-span-6 col-start-2 row-start-1 font-medium leading-tight tracking-normal text-center text-7xl">
                Developing Responsive
              </div>
              <div className="self-center col-span-6 col-start-2 row-start-1 font-medium leading-tight tracking-normal text-center mt-44 text-7xl">
                Websites
              </div>
              <div className="self-center col-span-6 col-start-2 row-start-2 font-medium text-center text-7xl">
                For Your Brand
              </div>
            </>
          );
        },
        getStartedButton: () => {
          return (
            <a
              href="#paymentInformation"
              className="self-center col-start-3 col-end-7 row-start-3 p-5 mt-0 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800"
            >
              Get Started
            </a>
          );
        },
        heroServices: () => {
          return (
            <div className="grid self-center grid-cols-12 col-span-12 col-start-1 row-start-5 ">
              {/* Web Design - Adjusted for responsive behavior */}
              <div className="col-span-3 col-start-1 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-base font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 galaxyS23Ultra:text-xl sm:text-xl lg:text-3xl">
                  Web Design
                </div>
                <div className="mt-2 text-sm galaxyS23Ultra:text-sm sm:text-lg lg:text-xl">
                  We create modern and responsive websites that look great on
                  all devices.
                </div>
              </div>

              {/* Data Transfer - Responsive adjustments */}
              <div className="col-span-3 col-start-4 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  Data Transfer
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  We transfer your existing website to a modern platform with
                  ease.
                </div>
              </div>

              {/* SEO - Adjusted for responsive grid */}
              <div className="col-span-3 col-start-7 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  SEO
                </div>
                <div className="mt-2 text-lg leading-7 galaxyS23Ultra:text-sm sm:text-xl lg:text-xl">
                  We help your website rank higher in search engines.
                </div>
              </div>

              {/* Additional Web Design Section if needed, or use for another service */}
              <div className="col-span-3 col-start-10 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  More Web Design
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  Advanced solutions for web design challenges.
                </div>
              </div>
              {/* sub grid end */}
            </div>
          );
        },
        heroBackground: (
          orbRefs,
          backGroundBlurAmount,
          backGroundBorderRadius
        ) => {
          // console.log("orbRefs: ", orbRefs);
          return (
            <>
              <div
                ref={(el) => {
                  if (orbRefs[0]) {
                    orbRefs[0].current = el;
                  }
                }}
                className="absolute col-start-1 row-start-6 orb bg-color1"
                style={{
                  width: "50%",
                  height: "50%",
                  left: "-10%",
                  top: "60%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* lime */}
              <div
                ref={(el) => {
                  if (orbRefs[1]) {
                    orbRefs[1].current = el;
                  }
                }}
                className="absolute col-start-2 row-start-3 orb bg-color2"
                style={{
                  width: "35%",
                  height: "45%",
                  left: "-20%",
                  top: "-12%", // width: "40%", // height: "60%", //
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* sky */}
              <div
                ref={(el) => {
                  if (orbRefs[2]) {
                    orbRefs[2].current = el;
                  }
                }}
                className="absolute orb bg-color3"
                style={{
                  width: "30%",
                  height: "40%",
                  left: "65%",
                  top: "-15%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* violet */}
              <div
                ref={(el) => {
                  if (orbRefs[3]) {
                    orbRefs[3].current = el;
                  }
                }}
                className="absolute orb bg-color4"
                style={{
                  width: "40%",
                  height: "60%",
                  left: "25%",
                  top: "25%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* Yellow */}
              <div
                ref={(el) => {
                  if (orbRefs[4]) {
                    orbRefs[4].current = el;
                  }
                }}
                className="absolute orb bg-color5"
                style={{
                  width: "50%",
                  height: "50%",
                  left: "70%",
                  top: "70%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>

              <div id="blur"></div>
            </>
          );
        },
      },
      navigationBar: {
        navbarElement: "grid w-full h-16 grid-cols-8 overflow-hidden",
        navbarLogo: "col-start-2 col-end-3 self-center",
        navbarMenu: "col-start-4 col-end-7 row-start-1 self-center",
        navbarMenuItem: "ml-4 text-lg font-bold leading-7 tracking-normal",
      },
    },
  },
  //!SECTION Tablet Configurations End
  //SECTION Desktop Configurations
  //NOTE d1080p
  {
    type: "d1080p", // 1080p Desktop
    query: "(max-width: 1920px) and (max-height: 1080px)",
    layout: {
      heroPage: {
        heroPageContainer: "relative overflow-hidden h-dvh overscroll-none",

        heroPageElement:
          "z-10 grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8 column",

        //return the hero title as JSX:
        heroTitle: () => {
          return (
            <>
              <div className="col-span-8 col-start-2 col-end-9 font-medium leading-tight tracking-normal text-8xl">
                Developing Responsive Websites
              </div>
              <div className="self-center col-span-4 col-start-3 row-start-2 font-medium text-center text-8xl">
                For Your Brand
              </div>
            </>
          );
        },
        getStartedButton: () => {
          return (
            <a
              href="#paymentInformation"
              className="self-center col-start-3 col-end-7 row-start-3 p-5 mt-0 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800"
            >
              Get Started
            </a>
          );
        },
        // "self-center col-start-2 col-end-8 row-start-2 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-5xl",
        //output getStartedButton as JSX:
        // return (

        heroServices: () => {
          return (
            <div className="grid self-center grid-cols-12 col-span-6 col-start-2 row-start-5 ">
              {/* Web Design - Adjusted for responsive behavior */}
              <div className="col-span-2 col-start-3 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-base font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 galaxyS23Ultra:text-xl sm:text-xl lg:text-3xl">
                  Web Design
                </div>
                <div className="mt-2 text-sm galaxyS23Ultra:text-sm sm:text-lg lg:text-xl">
                  We create modern and responsive websites that look great on
                  all devices.
                </div>
              </div>

              {/* Data Transfer - Responsive adjustments */}
              <div className="col-span-2 col-start-5 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  Data Transfer
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  We transfer your existing website to a modern platform with
                  ease.
                </div>
              </div>

              {/* SEO - Adjusted for responsive grid */}
              <div className="col-span-2 col-start-7 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  SEO
                </div>
                <div className="mt-2 text-lg leading-7 galaxyS23Ultra:text-sm sm:text-xl lg:text-xl">
                  We help your website rank higher in search engines.
                </div>
              </div>

              {/* Additional Web Design Section if needed, or use for another service */}
              <div className="col-span-2 col-start-9 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  More Web Design
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  Advanced solutions for web design challenges.
                </div>
              </div>
              {/* sub grid end */}
            </div>
          );
        },
        serviceDescription: "mt-2 text-lg leading-7",
        heroBackground: (
          orbRefs,
          backGroundBlurAmount,
          backGroundBorderRadius
        ) => {
          // console.log("orbRefs: ", orbRefs);
          return (
            <>
              <div
                ref={(el) => {
                  if (orbRefs[0]) {
                    orbRefs[0].current = el;
                  }
                }}
                className="absolute col-start-1 row-start-6 orb bg-color1"
                style={{
                  width: "50%",
                  height: "50%",
                  left: "-10%",
                  top: "60%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* lime */}
              <div
                ref={(el) => {
                  if (orbRefs[1]) {
                    orbRefs[1].current = el;
                  }
                }}
                className="absolute col-start-2 row-start-3 orb bg-color2"
                style={{
                  width: "35%",
                  height: "45%",
                  left: "-20%",
                  top: "-12%", // width: "40%", // height: "60%", //
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* sky */}
              <div
                ref={(el) => {
                  if (orbRefs[2]) {
                    orbRefs[2].current = el;
                  }
                }}
                className="absolute orb bg-color3"
                style={{
                  width: "30%",
                  height: "40%",
                  left: "65%",
                  top: "-15%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* violet */}
              <div
                ref={(el) => {
                  if (orbRefs[3]) {
                    orbRefs[3].current = el;
                  }
                }}
                className="absolute orb bg-color4"
                style={{
                  width: "40%",
                  height: "60%",
                  left: "25%",
                  top: "25%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* Yellow */}
              <div
                ref={(el) => {
                  if (orbRefs[4]) {
                    orbRefs[4].current = el;
                  }
                }}
                className="absolute orb bg-color5"
                style={{
                  width: "50%",
                  height: "50%",
                  left: "70%",
                  top: "70%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>

              <div id="blur"></div>
            </>
          );
        },
      },
      navigationBar: {
        navbarElement: "grid w-full h-16 grid-cols-8 overflow-hidden",
        navbarLogo: "col-start-2 col-end-3 self-center",
        navbarMenu: "col-start-4 col-end-7 row-start-1 self-center",
        navbarMenuItem: "ml-4 text-lg font-bold leading-7 tracking-normal",
      },

      paymentsPage: {
        paymentCardContainer: () => {
          return (
            <div className="items-center justify-center">
              <span className="grid row-start-3 p-2 text-5xl text-center">
                Pricing
              </span>
              <span className="grid row-start-3 p-5 italic text-center text-1xl">
                If you would like a custom quote please contact
                <a
                  href="mailto:info@infinitepixel.dev"
                  className="italic text-red-500 underline hover:text-red-700"
                >
                  info@infinitepixel.dev
                </a>
              </span>
              <div className="grid grid-cols-10 gap-4">
                {/* Card 1 */}
                <div className="col-span-2 col-start-3 row-start-4 p-4 rounded-lg shadow-lg bg-slate-100">
                  <h2 className="mb-4 text-lg font-bold text-center text-sky-800 ">
                    <FaUser className="inline-block mr-1" size={20} />
                    <span>Basic Plan</span>
                  </h2>
                  <div className="mb-4 text-5xl font-bold text-center text-blue-600">
                    $300
                  </div>
                  <ul className="grid grid-cols-6 text-sm grid-rows-10">
                    <li className="flex items-center col-span-4 col-start-2 row-start-2 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800"> Up To 5 Pages</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-3 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Unlimited Revisions</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-4 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-5 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Contact Form</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-6 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <button className="col-span-4 col-start-2 row-span-1 p-2 text-lg font-bold text-white duration-500 bg-blue-600 rounded row-start-8 hover:bg-blue-700">
                      Order Now
                    </button>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="col-span-2 col-start-5 row-start-4 p-3 rounded-lg shadow-lg bg-slate-100">
                  <h2 className="mb-4 text-lg font-bold text-center text-sky-800 ">
                    <FaCheckDouble className="inline-block mr-1" size={20} />
                    <span>Premier Plan</span>
                  </h2>
                  <div className="mb-4 text-5xl font-bold text-center text-blue-600">
                    $1100
                  </div>
                  <ul className="grid grid-cols-6 text-sm grid-rows-9">
                    <li className="flex items-center col-span-4 col-start-2 row-start-2 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800"> Up To 5 Pages</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-3 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Unlimited Revisions</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-4 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-5 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Contact Form</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-6 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <button className="col-span-4 col-start-2 row-span-1 p-2 text-lg font-bold text-white duration-500 bg-blue-600 rounded row-start-8 hover:bg-blue-700">
                      Order Now
                    </button>
                  </ul>
                </div>
                {/* Card 3 */}
                <div className="col-span-2 col-start-7 row-start-4 p-3 rounded-lg shadow-lg bg-slate-100">
                  <h2 className="mb-4 text-lg font-bold text-center text-sky-800 ">
                    <FaUser className="inline-block mr-1" size={20} />
                    <span>Elite Plus</span>
                  </h2>
                  <div className="mb-4 text-5xl font-bold text-center text-blue-600">
                    $2500
                  </div>
                  <ul className="grid grid-cols-6 text-sm grid-rows-9">
                    <li className="flex items-center col-span-4 col-start-2 row-start-2 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800"> Up To 5 Pages</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-3 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Unlimited Revisions</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-4 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-5 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Contact Form</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-6 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <button className="col-span-4 col-start-2 row-span-1 p-2 text-lg font-bold text-white duration-500 bg-blue-600 rounded row-start-8 hover:bg-blue-700">
                      Order Now
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          );
        },
      },
    },
  },
  //NOTE d1440p
  {
    type: "d1440p", // 1440p Desktop
    query: "(max-width: 2560px) and (max-height: 1440px)",
    layout: {
      paymentsPage: {
        paymentCardContainer: () => {
          return (
            <div className="items-center justify-center">
              <span className="grid row-start-3 p-2 text-5xl text-center">
                Pricing
              </span>
              <span className="grid row-start-3 p-5 italic text-center text-1xl">
                If you would like a custom quote please contact
                <a
                  href="mailto:info@infinitepixel.dev"
                  className="italic text-red-500 underline hover:text-red-700"
                >
                  info@infinitepixel.dev
                </a>
              </span>
              <div className="grid grid-cols-10 gap-4">
                {/* Card 1 */}
                <div className="col-span-2 col-start-3 row-start-4 p-4 rounded-lg shadow-lg bg-slate-100">
                  <h2 className="mb-4 text-lg font-bold text-center text-sky-800 ">
                    <FaUser className="inline-block mr-1" size={20} />
                    <span>Basic Plan</span>
                  </h2>
                  <div className="mb-4 text-5xl font-bold text-center text-blue-600">
                    $300
                  </div>
                  <ul className="grid grid-cols-6 text-sm grid-rows-10">
                    <li className="flex items-center col-span-4 col-start-2 row-start-2 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800"> Up To 5 Pages</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-3 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Unlimited Revisions</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-4 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-5 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Contact Form</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-6 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <button className="col-span-4 col-start-2 row-span-1 p-2 text-lg font-bold text-white duration-500 bg-blue-600 rounded row-start-8 hover:bg-blue-700">
                      Order Now
                    </button>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="col-span-2 col-start-5 row-start-4 p-3 rounded-lg shadow-lg bg-slate-100">
                  <h2 className="mb-4 text-lg font-bold text-center text-sky-800 ">
                    <FaCheckDouble className="inline-block mr-1" size={20} />
                    <span>Premier Plan</span>
                  </h2>
                  <div className="mb-4 text-5xl font-bold text-center text-blue-600">
                    $1100
                  </div>
                  <ul className="grid grid-cols-6 text-sm grid-rows-9">
                    <li className="flex items-center col-span-4 col-start-2 row-start-2 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800"> Up To 5 Pages</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-3 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Unlimited Revisions</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-4 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-5 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Contact Form</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-6 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <button className="col-span-4 col-start-2 row-span-1 p-2 text-lg font-bold text-white duration-500 bg-blue-600 rounded row-start-8 hover:bg-blue-700">
                      Order Now
                    </button>
                  </ul>
                </div>
                {/* Card 3 */}
                <div className="col-span-2 col-start-7 row-start-4 p-3 rounded-lg shadow-lg bg-slate-100">
                  <h2 className="mb-4 text-lg font-bold text-center text-sky-800 ">
                    <FaUser className="inline-block mr-1" size={20} />
                    <span>Elite Plus</span>
                  </h2>
                  <div className="mb-4 text-5xl font-bold text-center text-blue-600">
                    $2500
                  </div>
                  <ul className="grid grid-cols-6 text-sm grid-rows-9">
                    <li className="flex items-center col-span-4 col-start-2 row-start-2 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800"> Up To 5 Pages</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-3 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Unlimited Revisions</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-4 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-5 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">Contact Form</span>
                    </li>
                    <li className="flex items-center col-span-4 col-start-2 row-start-6 p-2 mb-2">
                      <span className="icon-span">
                        <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                      </span>
                      <span className="text-sky-800">
                        100% Ownership Rights
                      </span>
                    </li>
                    <button className="col-span-4 col-start-2 row-span-1 p-2 text-lg font-bold text-white duration-500 bg-blue-600 rounded row-start-8 hover:bg-blue-700">
                      Order Now
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          );
        },
      },
      heroPage: {
        d1440: "just a test",
        heroPageContainer: "relative overflow-hidden h-dvh overscroll-none",
        heroPageElement:
          "grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8",
        heroTitle: () => {
          return (
            <>
              <div className="self-center col-span-6 col-start-2 font-medium leading-tight tracking-normal text-center text-8xl">
                Developing Responsive Websites
              </div>
              <div className="self-center col-span-4 col-start-3 row-start-2 font-medium text-center text-8xl">
                For Your Brand
              </div>
            </>
          );
        },
        getStartedButton: () => {
          return (
            <a
              href="#paymentInformation"
              className="self-center col-start-3 col-end-7 row-start-3 p-5 mt-0 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800"
            >
              Get Started
            </a>
          );
        },
        heroServices: () => {
          return (
            <div className="grid self-center grid-cols-12 col-span-6 col-start-2 row-start-5 ">
              {/* Web Design - Adjusted for responsive behavior */}
              <div className="col-span-2 col-start-3 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-base font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 galaxyS23Ultra:text-xl sm:text-xl lg:text-3xl">
                  Web Design
                </div>
                <div className="mt-2 text-sm galaxyS23Ultra:text-sm sm:text-lg lg:text-xl">
                  We create modern and responsive websites that look great on
                  all devices.
                </div>
              </div>

              {/* Data Transfer - Responsive adjustments */}
              <div className="col-span-2 col-start-5 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  Data Transfer
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  We transfer your existing website to a modern platform with
                  ease.
                </div>
              </div>

              {/* SEO - Adjusted for responsive grid */}
              <div className="col-span-2 col-start-7 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  SEO
                </div>
                <div className="mt-2 text-lg leading-7 galaxyS23Ultra:text-sm sm:text-xl lg:text-xl">
                  We help your website rank higher in search engines.
                </div>
              </div>

              {/* Additional Web Design Section if needed, or use for another service */}
              <div className="col-span-2 col-start-9 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  More Web Design
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  Advanced solutions for web design challenges.
                </div>
              </div>
              {/* sub grid end */}
            </div>
          );
        },
        heroBackground: (
          orbRefs,
          backGroundBlurAmount,
          backGroundBorderRadius
        ) => {
          // console.log("orbRefs: ", orbRefs);
          return (
            <>
              <div
                ref={(el) => {
                  if (orbRefs[0]) {
                    orbRefs[0].current = el;
                  }
                }}
                className="absolute col-start-1 row-start-6 orb bg-color1"
                style={{
                  width: "50%",
                  height: "50%",
                  left: "-10%",
                  top: "60%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* lime */}
              <div
                ref={(el) => {
                  if (orbRefs[1]) {
                    orbRefs[1].current = el;
                  }
                }}
                className="absolute col-start-2 row-start-3 orb bg-color2"
                style={{
                  width: "35%",
                  height: "45%",
                  left: "-20%",
                  top: "-12%", // width: "40%", // height: "60%", //
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* sky */}
              <div
                ref={(el) => {
                  if (orbRefs[2]) {
                    orbRefs[2].current = el;
                  }
                }}
                className="absolute orb bg-color3"
                style={{
                  width: "30%",
                  height: "40%",
                  left: "65%",
                  top: "-15%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* violet */}
              <div
                ref={(el) => {
                  if (orbRefs[3]) {
                    orbRefs[3].current = el;
                  }
                }}
                className="absolute orb bg-color4"
                style={{
                  width: "40%",
                  height: "60%",
                  left: "25%",
                  top: "25%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* Yellow */}
              <div
                ref={(el) => {
                  if (orbRefs[4]) {
                    orbRefs[4].current = el;
                  }
                }}
                className="absolute orb bg-color5"
                style={{
                  width: "50%",
                  height: "50%",
                  left: "70%",
                  top: "70%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>

              <div id="blur"></div>
            </>
          );
        },
      },
      navigationBar: {
        navbarElement: "grid w-full h-16 grid-cols-8 overflow-hidden",
        navbarLogo: "col-start-2 col-end-3 self-center",
        navbarMenu: "col-start-4 col-end-7 row-start-1 self-center",
        navbarMenuItem: "ml-4 text-lg font-bold leading-7 tracking-normal",
      },
    },
  },
  //TODO d1440p - mac
  //5120x1440

  //NOTE d2560p
  {
    type: "d2560p", // 2560p Desktop
    query: "(max-width: 3840px) and (max-height: 2560px)",
    layout: {
      heroPage: {
        heroPageContainer: "relative overflow-hidden h-dvh overscroll-none",

        heroPageElement:
          "z-10 grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8 column",

        heroTitle: () => {
          return (
            <>
              <div className="self-center col-span-6 col-start-2 font-medium leading-tight tracking-normal text-center text-8xl">
                Developing Responsive Websites
              </div>
              <div className="self-center col-span-4 col-start-3 row-start-2 font-medium text-center text-8xl">
                For Your Brand
              </div>
            </>
          );
        },
        getStartedButton: () => {
          return (
            <a
              href="#paymentInformation"
              className="self-center col-start-3 col-end-7 row-start-3 p-5 mt-0 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800"
            >
              Get Started
            </a>
          );
        },
        heroServices: () => {
          return (
            <div className="grid self-center grid-cols-12 col-span-6 col-start-2 row-start-5 ">
              {/* Web Design - Adjusted for responsive behavior */}
              <div className="col-span-2 col-start-3 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-base font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 galaxyS23Ultra:text-xl sm:text-xl lg:text-3xl">
                  Web Design
                </div>
                <div className="mt-2 text-sm galaxyS23Ultra:text-sm sm:text-lg lg:text-xl">
                  We create modern and responsive websites that look great on
                  all devices.
                </div>
              </div>

              {/* Data Transfer - Responsive adjustments */}
              <div className="col-span-2 col-start-5 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  Data Transfer
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  We transfer your existing website to a modern platform with
                  ease.
                </div>
              </div>

              {/* SEO - Adjusted for responsive grid */}
              <div className="col-span-2 col-start-7 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  SEO
                </div>
                <div className="mt-2 text-lg leading-7 galaxyS23Ultra:text-sm sm:text-xl lg:text-xl">
                  We help your website rank higher in search engines.
                </div>
              </div>

              {/* Additional Web Design Section if needed, or use for another service */}
              <div className="col-span-2 col-start-9 px-4">
                <hr className="w-full border-t-2 border-gray-300" />
                <div className="mt-2 text-xl font-bold leading-normal tracking-normal galaxyS23Ultra:mt-1 sm:text-2xl lg:text-3xl">
                  More Web Design
                </div>
                <div className="mt-2 text-lg leading-7 sm:text-xl galaxyS23Ultra:text-sm lg:text-xl">
                  Advanced solutions for web design challenges.
                </div>
              </div>
              {/* sub grid end */}
            </div>
          );
        },
        heroBackground: (
          orbRefs,
          backGroundBlurAmount,
          backGroundBorderRadius
        ) => {
          // console.log("orbRefs: ", orbRefs);
          return (
            <>
              <div
                ref={(el) => {
                  if (orbRefs[0]) {
                    orbRefs[0].current = el;
                  }
                }}
                className="absolute col-start-1 row-start-6 orb bg-color1"
                style={{
                  width: "50%",
                  height: "50%",
                  left: "-10%",
                  top: "60%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* lime */}
              <div
                ref={(el) => {
                  if (orbRefs[1]) {
                    orbRefs[1].current = el;
                  }
                }}
                className="absolute col-start-2 row-start-3 orb bg-color2"
                style={{
                  width: "35%",
                  height: "45%",
                  left: "-20%",
                  top: "-12%", // width: "40%", // height: "60%", //
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* sky */}
              <div
                ref={(el) => {
                  if (orbRefs[2]) {
                    orbRefs[2].current = el;
                  }
                }}
                className="absolute orb bg-color3"
                style={{
                  width: "30%",
                  height: "40%",
                  left: "65%",
                  top: "-15%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* violet */}
              <div
                ref={(el) => {
                  if (orbRefs[3]) {
                    orbRefs[3].current = el;
                  }
                }}
                className="absolute orb bg-color4"
                style={{
                  width: "40%",
                  height: "60%",
                  left: "25%",
                  top: "25%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>
              {/* Yellow */}
              <div
                ref={(el) => {
                  if (orbRefs[4]) {
                    orbRefs[4].current = el;
                  }
                }}
                className="absolute orb bg-color5"
                style={{
                  width: "50%",
                  height: "50%",
                  left: "70%",
                  top: "70%",
                  filter: `blur(${backGroundBlurAmount}px)`,
                  borderRadius: `${backGroundBorderRadius}%`,
                  zIndex: "-1",
                }}
              ></div>

              <div id="blur"></div>
            </>
          );
        },
      },
      navigationBar: {
        navbarElement: "grid w-full h-16 grid-cols-8 overflow-hidden",
        navbarLogo: "col-start-2 col-end-3 self-center",
        navbarMenu: "col-start-4 col-end-7 row-start-1 self-center",
        navbarMenuItem: "ml-4 text-lg font-bold leading-7 tracking-normal",
      },
    },
  },
  //!SECTION Desktop Configurations End
  // Add other device configurations here, similar to the one above.
];

export default deviceConfig;
