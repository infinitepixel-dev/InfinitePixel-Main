//REVIEW V2 Version 2 of the import loader

export const getComponent = async (componentName) => {
  let module;

  try {
    switch (componentName) {
      case "Customcursor":
        module = await import("./components/effects/customcursor.jsx");
        break;
      case "Figure8":
        module = await import("./components/effects/figure8.jsx");
        break;
      case "NavigationBar":
        module = await import("./components/effects/navigation.jsx");
        break;
      case "SplashPage":
        module = await import("./components/pages/SplashPage.jsx");
        break;
      // ... add more cases for other components
      default:
        console.warn(`Path not found for component: ${componentName}`);
        return null;
    }

    return module.default;
  } catch (error) {
    // console.warn(`Component not found: ${componentName}`, error);
    return null;
  }
};
