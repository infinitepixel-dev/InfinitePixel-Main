const componentsRegistry = {
  CustomCursor: () => import("./components/effects/customCursor.jsx"),
  SplashPage: () => import("./components/pages/splashPage.jsx"),
  NavigationBar: () => import("./components/corecomponents/navigationBar.jsx"),
  HeroPage: () => import("./components/pages/heroPage.jsx"),
  AboutUs: () => import("./components/pages/aboutUs.jsx"),
  AboutUsCarousel: () => import("./components/menus/aboutUs-Carousel.jsx"),
  Payments: () => import("./components/pages/payments.jsx"),
  // Add more components here
};

export default componentsRegistry;
