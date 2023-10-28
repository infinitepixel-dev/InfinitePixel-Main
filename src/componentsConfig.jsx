import availableComponents from "./availableComponents.json";

// If you have any static components which are always available and not part of the dynamic scan,
// you can add them here.
const staticComponents = {
  // StaticComponentName: "./path/to/StaticComponent"
};

const componentsConfig = {
  ...staticComponents,
  ...availableComponents,
};
// console.log("componentsConfig:", componentsConfig);
export default componentsConfig;
