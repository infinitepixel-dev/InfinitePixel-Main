import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import PropTypes from "prop-types";

// Create a context for the device layout
const DeviceLayoutContext = createContext();

// Custom hook to access the context
// eslint-disable-next-line react-refresh/only-export-components
export const useDeviceConfig = () => {
  return useContext(DeviceLayoutContext);
};

// Provider component
export const DeviceLayoutProvider = ({ children, deviceConfig }) => {
  // Memoizing the getDeviceType function using useCallback
  const getDeviceType = useCallback(() => {
    const matchedDevice = deviceConfig.find((d) => {
      let match = window.matchMedia(d.query).matches;
      if (match) {
        console.log("Matched Device: ", d.type);
      }
      return match;
    });
    // If no specific configuration is found, return the default first configuration
    return matchedDevice ? matchedDevice.layout : deviceConfig[0].layout;
  }, [deviceConfig]); // Adding deviceConfig as a dependency to ensure updates if config changes

  const [deviceLayout, setDeviceLayout] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceLayout(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getDeviceType]); // Ensuring the effect runs only when getDeviceType changes

  console.log();
  return (
    <DeviceLayoutContext.Provider value={deviceLayout}>
      {children}
    </DeviceLayoutContext.Provider>
  );
};

DeviceLayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
  deviceConfig: PropTypes.array.isRequired,
};

export default DeviceLayoutProvider;
