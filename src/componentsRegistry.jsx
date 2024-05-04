const componentsRegistry = {
  CustomCursor: () => import("./components/effects/customCursor.jsx"),
  SplashPage: () => import("./components/pages/SplashPage/splashPage.jsx"),
  NavigationBar: () => import("./components/corecomponents/navigationBar.jsx"),
  HeroPage: () => import("./components/pages/HeroPage/heroPage.jsx"),
  AboutUs: () => import("./components/pages/AboutUs/aboutUs.jsx"),
  AboutUsCarousel: () => import("./components/menus/aboutUs-Carousel.jsx"),
  Payments: () => import("./components/pages/Payments/payments.jsx"),
  SiteRoutes: () => import("./components/corecomponents/siteRoutes.jsx"),
  // Add more components here
};

export default componentsRegistry;
