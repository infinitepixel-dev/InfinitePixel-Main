import React from "react";
import PropTypes from "prop-types";

//handles passsing true or false to the navigation context
export const NavigationProvider = ({ children }) => {
  const [isContactPage, setIsContactPage] = React.useState(false);
  const [isPaymentsPage, setIsPaymentsPage] = React.useState(false);
  const [isAboutPage, setIsAboutPage] = React.useState(false);
  const [isHomePage, setIsHomePage] = React.useState(false);
  return (
    <NavigationContext.Provider
      value={{
        isContactPage,
        setIsContactPage,
        isPaymentsPage,
        setIsPaymentsPage,
        isAboutPage,
        setIsAboutPage,
        isHomePage,
        setIsHomePage,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

//handles the context for the navigation
export const NavigationContext = React.createContext();
//handles the context for the navigation
