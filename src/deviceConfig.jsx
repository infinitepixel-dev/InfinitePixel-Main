//Device configuration for different screen sizes
const deviceConfig = [
  //m384
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
              <div className="col-span-7 col-start-2 col-end-7 text-2xl font-bold leading-normal tracking-normal">
                Developing Responsive Websites
                <div className="row-start-3">For Your Brand</div>
              </div>
            </>
          );
        },
        getStartedButton: () => {
          return (
            <div className="self-center col-start-2 col-end-8 row-start-2 mt-8 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800">
              <a href="#paymentInformation">Get Started</a>
            </div>
          );
        },
        // "self-center col-start-2 col-end-8 row-start-2 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-5xl",
        //output getStartedButton as JSX:
        // return (

        servicesGrid:
          "grid grid-cols-1 col-span-6 col-start-2 row-start-5 mt-6",
        serviceItem:
          "m-3 mt-2 text-xl font-bold leading-normal tracking-normal",
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
    },
  },
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
              <div className="col-span-8 col-start-2 col-end-9 text-8xl font-medium leading-tight tracking-normal">
                Developing Responsive Websites
              </div>
              <div className="self-center col-start-3 col-span-4 font-medium text-center row-start-2 text-8xl">
                For Your Brand
              </div>
            </>
          );
        },
        getStartedButton: () => {
          return (
            <div className="self-center col-start-3 col-end-7 row-start-3 mt-0 p-5 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800">
              <a href="#paymentInformation">Get Started</a>
            </div>
          );
        },
        // "self-center col-start-2 col-end-8 row-start-2 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-5xl",
        //output getStartedButton as JSX:
        // return (

        servicesGrid:
          "grid grid-cols-1 col-span-6 col-start-2 row-start-5 mt-6",
        serviceItem:
          "m-3 mt-2 text-xl font-bold leading-normal tracking-normal",
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
    },
  },
  {
    type: "d1440p", // 1440p Desktop
    query: "(max-width: 1920px) and (max-height: 1080px)",
    layout: {
      heroPage: {
        d1440: "just a test",
        heroPageContainer: "relative overflow-hidden h-dvh overscroll-none",
        heroPageElement:
          "grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8",
        heroTitle1:
          "col-span-7 col-start-2 row-start-2 col-end-7 text-5xl font-bold leading-normal tracking-normal text-8xl",
        heroTitle2: "row-start-3",
        getStartedButton:
          "self-center col-start-2 col-span-2 row-start-3  text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-150 bg-violet-600 md:text-2x1 hover:bg-violet-700",
        servicesGrid:
          "grid grid-cols-1 col-span-6 col-start-2 row-start-5 mt-6",
        serviceItem:
          "m-3 mt-2 text-xl font-bold leading-normal tracking-normal",
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
    },
  },
  {
    type: "d2560p", // 2560p Desktop
    query: "(max-width: 2560px) and (max-height: 1440px)",
    layout: {
      heroPage: {
        heroPageContainer: "relative overflow-hidden h-dvh overscroll-none",

        heroPageElement:
          "z-10 grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8 column",

        //return the hero title as JSX:
        heroTitle: () => {
          return (
            <>
              <div className="col-span-7 col-start-2 col-end-7 text-2xl font-bold leading-normal tracking-normal">
                Developing Responsive Websites
                <div className="row-start-3">For Your Brand</div>
              </div>
            </>
          );
        },
        getStartedButton: () => {
          return (
            <div className="self-center col-start-2 col-end-8 row-start-2 mt-8 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800">
              <a href="#paymentInformation">Get Started</a>
            </div>
          );
        },
        // "self-center col-start-2 col-end-8 row-start-2 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-5xl",
        //output getStartedButton as JSX:
        // return (

        servicesGrid:
          "grid grid-cols-1 col-span-6 col-start-2 row-start-5 mt-6",
        serviceItem:
          "m-3 mt-2 text-xl font-bold leading-normal tracking-normal",
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
    },
  },
  {
    type: "d2160p", // 4K Desktop
    query: "(max-width: 3840px) and (max-height: 2160px)",
    layout: {
      heroPage: {
        heroPageContainer: "relative overflow-hidden h-dvh overscroll-none",

        heroPageElement:
          "z-10 grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8 column",

        //return the hero title as JSX:
        heroTitle: () => {
          return (
            <>
              <div className="col-span-7 col-start-2 col-end-7 text-2xl font-bold leading-normal tracking-normal">
                Developing Responsive Websites
                <div className="row-start-3">For Your Brand</div>
              </div>
            </>
          );
        },
        getStartedButton: () => {
          return (
            <div className="self-center col-start-2 col-end-8 row-start-2 mt-8 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800">
              <a href="#paymentInformation">Get Started</a>
            </div>
          );
        },
        // "self-center col-start-2 col-end-8 row-start-2 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-5xl",
        //output getStartedButton as JSX:
        // return (

        servicesGrid:
          "grid grid-cols-1 col-span-6 col-start-2 row-start-5 mt-6",
        serviceItem:
          "m-3 mt-2 text-xl font-bold leading-normal tracking-normal",
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
    },
  },
  // Add other device configurations here, similar to the one above.
];

export default deviceConfig;
