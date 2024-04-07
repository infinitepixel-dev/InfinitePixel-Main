const componentsRegistry = {
  SplashPage: () => import("./components/pages/SplashPage.jsx"),
  CustomCursor: () => import("./components/effects/CustomCursor.jsx"),
  NavigationBar: () => import("./components/corecomponents/NavigationBar.jsx"),
  // Add more components here
};

export default componentsRegistry;
