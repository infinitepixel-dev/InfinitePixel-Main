import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Ensure you import PropTypes
import availableComponents from "./availableComponents.json"; // Adjust the path to your JSON file

const FallbackComponent = () => {
  return <div>Component not found</div>;
};

const DynamicComponentLoader = ({ componentName, ...props }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    // Check if the component is listed in the availableComponents JSON
    const componentPath = availableComponents[componentName];

    if (componentPath) {
      // If it's listed, attempt to dynamically import it
      import(componentPath)
        .then((module) => {
          setComponent(() => module.default);
        })
        .catch((error) => {
          console.log(error);
          // If there's an error during import, use the FallbackComponent
          setComponent(FallbackComponent);
        });
    } else {
      // If the component is not listed in the JSON, set the FallbackComponent without attempting the import
      setComponent(FallbackComponent);
    }
  }, [componentName]);

  if (!Component) {
    return null;
  }

  return <Component {...props} />;
};

// Add prop type validation
DynamicComponentLoader.propTypes = {
  componentName: PropTypes.string.isRequired,
};

export default DynamicComponentLoader;
