const componentsRegistry = {
  CustomCursor: () => import("./components/effects/customCursor.jsx"),
  SplashPage: () => import("./components/pages/splashPage.jsx"),
  NavigationBar: () => import("./components/corecomponents/navigationBar.jsx"),
  HeroPage: () => import("./components/pages/heroPage.jsx"),
  Page2: () => import("./components/pages/page2.jsx"),
  // Add more components here
};

export default componentsRegistry;
