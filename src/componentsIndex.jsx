//NOTE Component Loader V3
import componentsRegistry from "./componentsRegistry"

export const getComponent = async (componentName) => {
  //logs the components that are being requested
  // console.log(`Requesting component: ${componentName}`);

  try {
    const componentLoader = componentsRegistry[componentName]

    if (!componentLoader) {
      //logs the path for components that are not found
      console.warn(`Path not found for component: ${componentName}`)
      return null
    }

    const module = await componentLoader()
    return module.default
  } catch (error) {
    //logs the components that are not found
    // console.warn(`Component not found: ${componentName}`, error);
    return null
  }
}
