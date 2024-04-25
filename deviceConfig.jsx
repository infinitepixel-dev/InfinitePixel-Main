//Device configuration for different screen sizes
export const deviceConfig = [
  //m384
  {
    type: "m384", // Galaxy S23 Ultra
    query: "(max-width: 384px) and (max-height: 824px)",
    layout: {
      heroPage: {
        heroPageContainer: "relative overflow-hidden h-dvh overscroll-none",

        heroPageElement:
          "z-10 grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8 column",
        heroTitle:
          "col-span-7 col-start-2 col-end-7 text-5xl font-bold leading-normal tracking-normal text-8xl",
        getStartedButton:
          "self-center col-start-2 col-end-8 row-start-4 text-4xl leading-normal tracking-tight text-center duration-700 rounded-lg text-5xl",
        servicesGrid:
          "grid grid-cols-1 col-span-6 col-start-2 row-start-5 mt-6",
        serviceItem:
          "m-3 mt-2 text-xl font-bold leading-normal tracking-normal",
        serviceDescription: "mt-2 text-lg leading-7",
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
    type: "d1920", // 1080p Desktop
    query: "(max-width: 1920px)",
    layout: {
      paymentPage: {
        paymentsPageContainer: "relative overflow-hidden h-dvh overscroll-none",
        PricingCardContainer: "z-10 grid-cols-3 grid-rows-6",
      },
      heroPage: {
        heroPageElement:
          "z-10 grid w-full h-screen grid-cols-8 overflow-hidden grid-rows-8 column",
        heroTitle:
          "col-span-4 col-start-2 col-end-4 text-4xl font-bold leading-normal tracking-normal",
        getStartedButton:
          "self-center col-start-2 row-start-4 text-4xl col-span-4 leading-normal tracking-tight text-center duration-700 rounded-lg text-slate-150 bg-violet-600 md:text-2x1 hover:bg-violet-700",
        servicesGrid:
          "grid grid-cols-1 col-span-6 col-start-2 row-start-5 mt-6",
        serviceItem:
          "m-3 mt-2 text-xl font-bold leading-normal tracking-normal",
        serviceDescription: "mt-2 text-lg leading-7",
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
    type: "d1080", // 1440p Desktop
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
    type: "d1440", // 2560p Desktop
    query: "(max-width: 2560px) and (max-height: 1440px)",
    layout: {
      heroPage: {
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
]
