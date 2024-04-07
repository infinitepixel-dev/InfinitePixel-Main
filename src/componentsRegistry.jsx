const componentsRegistry = {
  CustomCursor: () => import("./components/effects/customCursor.jsx"),
  SplashPage: () => import("./components/pages/splashPage.jsx"),
  NavigationBar: () => import("./components/corecomponents/navigationBar.jsx"),
  // Add more components here
};

export default componentsRegistry;
