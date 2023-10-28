import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getComponent } from "./componentsIndex";

const DynamicComponentLoader = ({ componentName, ...props }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    (async () => {
      const ImportedComponent = await getComponent(componentName);
      setComponent(() => ImportedComponent);
    })();
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
