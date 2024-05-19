import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GoogleLogin } from 'react-google-login';
import css from "./GoogleAndFacebookButton.module.css";

const GoogleOAuthButton = () => {
  const handleSuccess = (response) => {
    console.log("Google login successful", response);
 
  };

  const handleFailure = (error) => {
    console.error("Google login failed", error);
    
  };

  return (
    <GoogleLogin
      clientId="822829836759-lc386epct4tvjun8d918v940adcar9rc.apps.googleusercontent.com"
      buttonText="Continue with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
      className={css.buttonForm}
    />
  );
};

const GoogleAndFacebookButton = () => {
  const handleContinueWithFacebook = () => {
    console.log("Continue with Apple clicked");
  };


  return (
    <div className={css.buttonContainer}>
      <div className={css.separatorLine}></div>
      <div className={`${css.orText} dark:bg-black`}>or</div>

      <button className={css.buttonForm} onClick={handleContinueWithFacebook}>
        <FaFacebook className={css.icon} />
        Continue with Facebook
      </button>

       <GoogleOAuthButton/>
     
    </div>
  );
};

export default GoogleAndFacebookButton;
