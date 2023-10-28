import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import availableComponents from "./availableComponents.json"; // Adjust the path to your JSON file

const FallbackComponent = () => {
  return null; //Returns nothing
};

const DynamicComponentLoader = ({ componentName, ...props }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    // Use the JSON to get the path for the component
    const componentPath = availableComponents[componentName];

    if (componentPath) {
      // Construct the import dynamically to prevent Vite from analyzing it at build time
      import(`${componentPath}`)
        .then((module) => {
          setComponent(() => module.default);
        })
        .catch(() => {
          setComponent(() => FallbackComponent);
        });
    } else {
      setComponent(() => FallbackComponent);
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
