import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// contact for passing boolean values to the navbar
import { NavigationProvider } from "./context/navigationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* contact provider */}
    <NavigationProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NavigationProvider>
  </>
);
