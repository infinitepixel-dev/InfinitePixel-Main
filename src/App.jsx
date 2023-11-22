import { useState } from "react";
import './components/pages/SplashPage.css'
import DynamicComponentLoader from "./dynamicComponentLoader";
import './app.css';

function App() {

  let currentYear = new Date().getFullYear(); //current year

  return (
    <>
      <DynamicComponentLoader componentName="SplashPage" />
      {/* I want my navbar here maybe??? */}
      {/* Pretend Component A is a Feature The client hasn't paid for, but we natively implemented */}
      {/* <DynamicComponentLoader componentName="ComponentA" prop1="value1" /> */}
      {/* Noticed that even though a component above is missing, the application functions as intended */}

      {/* Client paid for this feature 'Figure8' and it displays accordingly */}
      {/* <DynamicComponentLoader componentName="Figure8" /> */}
      <DynamicComponentLoader componentName="Customcursor" />

      <div className="App">
      </div>
    </>
  );
}

export default App;
