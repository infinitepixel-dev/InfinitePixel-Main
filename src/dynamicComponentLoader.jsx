import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as AllComponents from "./componentsIndex";

const FallbackComponent = () => {
  return <div>Component not found</div>;
};

const DynamicComponentLoader = ({ componentName, ...props }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const ImportedComponent = AllComponents[componentName];

    if (ImportedComponent) {
      setComponent(() => ImportedComponent);
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
