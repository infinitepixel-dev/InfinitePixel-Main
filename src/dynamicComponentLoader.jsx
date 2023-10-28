import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import componentsConfig from "./componentsConfig";

const FallbackComponent = () => {
  return <div>Component not found</div>;
};

const DynamicComponentLoader = ({ componentName, ...props }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const componentPath = componentsConfig[componentName];

    if (componentPath) {
      fetch(componentPath, { method: "HEAD" })
        .then((response) => {
          if (response.ok && response.status === 200) {
            return import(`${componentPath}`);
          } else {
            setComponent(FallbackComponent); // Set the FallbackComponent
            throw new Error(`Component not found: ${componentName}`);
          }
        })
        .then((comp) => {
          setComponent(() => comp.default);
        })
        .catch((error) => {
          console.log("error:", error);
          // Handle other errors if necessary
        });
    } else {
      //   console.warn(`No path found for component: ${componentName}`);
    }
  }, [componentName]);

  if (!Component) {
    return null;
  }

  return <Component {...props} />;
};

DynamicComponentLoader.propTypes = {
  componentName: PropTypes.string.isRequired,
};

export default DynamicComponentLoader;
