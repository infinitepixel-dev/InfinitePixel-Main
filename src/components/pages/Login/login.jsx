/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

//INFO Google OAuth related components and function imports
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google"; // Correctly import the function
import { jwtDecode } from "jwt-decode";

//INFO Importing Apple OAuth related components and functions (not implemented yet)
import { appleAuthHelpers } from "react-apple-signin-auth";
// https://www.npmjs.com/package/react-apple-signin-auth
// console.log("Apple Auth Helpers:", appleAuthHelpers);

import ActionButton from "../../buttons/actionButton";

//INFO Client ID and allow emails are stored in an environment variable
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const allowedEmails = import.meta.env.VITE_ALLOWED_EMAILS;
const allowedEmailList = allowedEmails.split(","); //Converts the allowEmails to an array

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const isEmailAllowed = (email) => allowedEmailList.includes(email);

  //INFO Function to decode JWT token from Google OAuth
  const decodeJWT = (jwt) => {
    try {
      return jwtDecode(jwt);
    } catch (error) {
      console.error("Error decoding JWT:", error);
      return null;
    }
  };

  //INFO Handler for successful login
  const handleLoginSuccess = async (response) => {
    // console.log("Login Success:", response);
    const decodedResp = decodeJWT(response.credential);
    localStorage.setItem("token", response.credential);
    if (isEmailAllowed(decodedResp.email)) {
      // If email is allowed, proceed to set user info and indicate logged in status
      setUser(decodedResp);
      setIsLoggedIn(true);
    } else {
      // If email is not allowed, handle accordingly, e.g., showing an error message

      handleLogout(); // Optionally logout immediately
    }
  };

  //INFO Handler for failed login
  const handleLoginFailure = (error) => {
    console.log("Login Failed:", error);
    if (error.details) {
      console.error("Error details:", error.details);
    }
  };

  //INFO Handler for logout
  const handleLogout = () => {
    googleLogout();
    console.log("Logged out successfully");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null); // Clear user data on logout
  };

  //INFO Effect to check if user is logged in based on token in local storage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setIsLoggedIn(true);
      setUser(decodedToken);
    }
  }, [isLoggedIn]);

  return (
    <>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <div className="col-start-11 col-span-2 mt-16 row-start-1 text-center self-center">
          {isLoggedIn ? (
            //INFO-JSX If user is logged in, display user info and logout button
            <>
              <div className="grid mt-2 mr-4">
                <div className="text-center">
                  <h2>User Info</h2>
                  <p>Name: {user ? user.name : ""}</p>
                  <div className="flex justify-center mb-0">
                    <img
                      className=""
                      src={user ? user.picture : ""}
                      alt="Profile"
                    />
                  </div>
                </div>
                <ActionButton
                  defaultClass={
                    "bg-green-500 p-2 m-1 self-center rounded-md font-bold text-2xl text-neutral-900"
                  }
                  onClick={handleLogout}
                  buttonText={"Logout"}
                />
              </div>
            </>
          ) : (
            //INFO-JSX If user is not logged in, display login button
            <>
              <div>Login</div>
              <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginFailure}
                />
              </div>
            </>
          )}
        </div>
      </GoogleOAuthProvider>
    </>
  );
}

export default Login;
