const componentsRegistry = {
  CustomCursor: () => import("./components/effects/customCursor.jsx"),
  SplashPage: () => import("./components/pages/SplashPage/splashPage.jsx"),
  NavigationBar: () => import("./components/corecomponents/navigationBar.jsx"),
  HeroPage: () => import("./components/pages/HeroPage/heroPage.jsx"),
  AboutUs: () => import("./components/pages/AboutUs/aboutUs.jsx"),
  AboutUsCarousel: () => import("./components/menus/aboutUs-Carousel.jsx"),
  Payments: () => import("./components/pages/Payments/payments.jsx"),
  FadeIn: () => import("./components/effects/animations/fadeIn.jsx"),
  SiteRoutes: () => import("./components/corecomponents/siteRoutes.jsx"),
  Footer: () => import("./components/pages/Footer/footer.jsx"),
  Portfolio: () => import("../components/pages/Portfolio"),
}

export default componentsRegistry
