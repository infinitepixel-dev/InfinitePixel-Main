// export const getComponent = async (componentName) => {
//   let module;

//   try {
//     switch (componentName) {
//       case "SplashPage":
//         module = await import("./components/pages/SplashPage.jsx");
//         break;
//       case "Customcursor":
//         module = await import("./components/effects/customcursor.jsx");
//         break;
//       case "NavigationBar":
//         module = await import("./components/corecomponents/navigationBar.jsx");
//         break;
//       // ... add more cases for other components
//       default:
//         console.warn(`Path not found for component: ${componentName}`);
//         return null;
//     }

//     return module.default;
//   } catch (error) {
//     // console.warn(`Component not found: ${componentName}`, error);
//     return null;
//   }
// };

//REVIEW V3
import componentsRegistry from "./componentsRegistry";

export const getComponent = async (componentName) => {
  try {
    const componentLoader = componentsRegistry[componentName];

    if (!componentLoader) {
      console.warn(`Path not found for component: ${componentName}`);
      return null;
    }

    const module = await componentLoader();
    return module.default;
  } catch (error) {
    console.warn(`Component not found: ${componentName}`, error);
    return null;
  }
};
