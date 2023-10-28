import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import * as AllComponents from "./componentsIndex";

const FallbackComponent = () => {
  return <div>Component not found</div>;
};

const DynamicComponentLoader = ({ componentName, ...props }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    let importPromise;

    switch (componentName) {
      case "Customcursor":
        importPromise = import("./components/effects/customcursor");
        break;
      case "Figure8":
        importPromise = import("./components/effects/figure8");
        break;
      // ... other components
    }

    if (importPromise) {
      importPromise
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
