/*
In order for a component to be used, the physical data must be present.
Regardless all components will be listed here, and mapped out accordingly.

The dynamicComponentLoader will handle the mapping of the components.
If a component is not found, it will simply not be rendered.
*/

//REVIEW v1
//Defines the list of all components.
// const componentPaths = {
//   Customcursor: true,
//   Figure8: true,
//   // ... other components
// };

// export const getComponent = async (componentName) => {
//   if (!componentPaths[componentName]) {
//     console.warn(`Path not found for component: ${componentName}`);
//     return null;
//   }

//   try {
//     // Use a static part in the import path
//     const module = await import(`./components/effects/${componentName}.jsx`);
//     return module.default;
//   } catch (error) {
//     console.warn(`Component not found: ${componentName}`, error);
//     return null;
//   }
// };

//REVIEW V2

export const getComponent = async (componentName) => {
  let module;

  try {
    switch (componentName) {
      case "Customcursor":
        module = await import("./components/effects/Customcursor.jsx");
        break;
      case "Figure8":
        module = await import("./components/effects/Figure8.jsx");
        break;
      // ... add more cases for other components
      default:
        console.warn(`Path not found for component: ${componentName}`);
        return null;
    }

    return module.default;
  } catch (error) {
    console.warn(`Component not found: ${componentName}`, error);
    return null;
  }
};
