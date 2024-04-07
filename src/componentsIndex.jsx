//NOTE Component Loader V3
import componentsRegistry from "./componentsRegistry";

export const getComponent = async (componentName) => {
  console.log(`Requesting component: ${componentName}`); // Debugging line

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
