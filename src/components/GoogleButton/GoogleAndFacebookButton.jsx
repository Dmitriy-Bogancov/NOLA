import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from "react-facebook-login";
import { Navigate } from 'react-router-dom'; 
import css from "./GoogleAndFacebookButton.module.css";


const GoogleAndFacebookButton = () => {

  const [redirect, setRedirect] = useState(false); 


  const handleGoogleSuccess = (response) => {
    console.log("Google login successful", response);
    setRedirect(true); 
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login failed", error);
  };

  const handleFacebookSuccess = (response) => {
    console.log("Facebook login successful", response);
    setRedirect(true); 
  };

  const handleFacebookFailure = (error) => {
    console.error("Facebook login failed", error);
  };

  if (redirect) {
    return <Navigate to="/main/accountAdverticer" />; 
  }

  return (
    <div className={css.buttonContainer}>
      <div className={css.separatorLine}></div>
      <div className={css.orText}>or</div>
      <GoogleLogin
         clientId="822829836759-lc386epct4tvjun8d918v940adcar9rc.apps.googleusercontent.com"
         buttonText="Continue with Google"
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        cookiePolicy={'single_host_origin'}
        className={css.buttonForm}
      />
      <FacebookLogin
        appId="366622046395430"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookSuccess}
        onFailure={handleFacebookFailure}
        icon={<FaFacebook />} 
        textButton="Continue with Facebook"
        cssClass={css.facebook} 
      />
    </div>
  );
};

export default GoogleAndFacebookButton;

