import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from 'react-router-dom'; 
import css from "./GoogleAndFacebookButton.module.css";
import {  useGoogleLogin } from "@react-oauth/google";

const GoogleAndFacebookButton = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false); 

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google login successful", tokenResponse);
      setRedirect(true); 
      navigate("/main/accountAdverticer");
    },
    onError: (error) => {
      console.error("Google login failed", error);
    },
  });

  const handleFacebookSuccess = (response) => {
    console.log("Facebook login successful", response);
    setRedirect(true); 
    navigate("/main/accountAdverticer");
  };

  const handleFacebookFailure = (error) => {
    console.error("Facebook login failed", error);
  };

  return (
      <div className={css.buttonContainer}>
        <div className={css.separatorLine}></div>
        <div className={`${css.orText} dark:bg-black`}>or</div>
        <button onClick={() => googleLogin()} className={`${css.buttonForm} dark:bg-black dark:border-white dark:text-white`}>
          <FcGoogle className={css.icon} />
          Continue with Google
        </button>
        <FacebookLogin
          appId="366622046395430"
          autoLoad={false}
          fields="name,email,picture"
          callback={handleFacebookSuccess}
          onFailure={handleFacebookFailure}
          icon={<FaFacebook className={css.icon}/>} 
          textButton="Continue with Facebook"
          cssClass={`${css.buttonForm} dark:bg-black dark:border-white dark:text-white`}
        />
      </div>
  );
};

export default GoogleAndFacebookButton;

// import React, { useState, useEffect } from "react";
// import { FaFacebook } from "react-icons/fa";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import { useNavigate } from "react-router-dom";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import {jwtDecode} from "jwt-decode";
// import css from "./GoogleAndFacebookButton.module.css";
// import { FcGoogle } from "react-icons/fc";

// const GoogleAndFacebookButton = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/main/accountAdverticer");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleGoogleSuccess = (credentialResponse) => {
//     try {
//       const token = jwtDecode(credentialResponse.credential);
//       console.log("Google login successful", token);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error("Failed to decode Google token", error);
//     }
//   };

//   const handleGoogleFailure = (error) => {
//     console.error("Google login failed", error);
//   };

//   const handleFacebookSuccess = (response) => {
//     try {
//       console.log("Facebook login successful", response);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error("Failed to process Facebook response", error);
//     }
//   };

//   const handleFacebookFailure = (error) => {
//     console.error("Facebook login failed", error);
//   };



//   return (
//     <GoogleOAuthProvider clientId="816846792743-3cmg8t2bhfvr19bvu60r65slnrjon8ko.apps.googleusercontent.com">
//     <div className={css.buttonContainer}>
//       <div className={css.separatorLine}></div>
//       <div className={css.orText}>or</div>
//       <GoogleLogin
//   onSuccess={handleGoogleSuccess}
//   onError={handleGoogleFailure}
// >
//   {({ onClick, disabled }) => (
//     <button className={css.buttonForm} onClick={onClick} disabled={disabled}>
//       <FcGoogle className={css.icon} />
//       Continue with Google
//     </button>
//   )}
// </GoogleLogin>
//       <FacebookLogin
//         appId="366622046395430"
//         autoLoad={false}
//         fields="name,email,picture"
//         callback={handleFacebookSuccess}
//         onFailure={handleFacebookFailure}
//         render={renderProps => (
//           <button onClick={renderProps.onClick} className={css.buttonForm}>
//             <FaFacebook className={css.icon} /> Continue with Facebook
//           </button>
//         )}
//       />
//     </div>
//   </GoogleOAuthProvider>
//   );
// };

// export default GoogleAndFacebookButton;


