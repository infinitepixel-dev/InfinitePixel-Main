// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DeviceLayoutProvider } from "./useDeviceLayout.jsx";
import deviceConfig from "./deviceConfig.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <React.StrictMode> */}
    <DeviceLayoutProvider deviceConfig={deviceConfig}>
      <App />
    </DeviceLayoutProvider>
    {/* </React.StrictMode> */}
  </>
);
