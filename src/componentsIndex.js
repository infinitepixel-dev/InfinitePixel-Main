// // componentsIndex.js

// // export { default as ApiTesting } from "./components/api-testing";
// export { default as Customcursor } from "./components/effects/customcursor";

// export { default as Figure8 } from "./components/effects/figure8";
// // ... any other components you might have

// componentsIndex.js

const componentPaths = {
  Customcursor: "./components/effects/customcursor",
  Figure8: "./components/effects/figure8",
  // ... other components
};

export const getComponent = async (componentName) => {
  const componentPath = componentPaths[componentName];

  if (!componentPath) {
    console.warn(`Path not found for component: ${componentName}`);
    return null;
  }

  try {
    const module = await import(componentPath);
    return module.default;
  } catch (error) {
    // console.clear();
    console.warn(`Component not found: ${componentName}`, error);
    return null;
  }
};
