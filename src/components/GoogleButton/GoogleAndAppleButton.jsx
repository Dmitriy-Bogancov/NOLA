import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import css from "./GoogleAndAppleButton.module.css";

const GoogleAndAppleButton = () => {
  const handleContinueWithApple = () => {
    console.log("Continue with Apple clicked");
  };

  const handleContinueWithGoogle = () => {
    console.log("Continue with Google clicked");
  };

  return (
    <div className={css.buttonContainer}>
      <div className={css.separatorLine}></div>
      <div className={`${css.orText} dark:bg-black`}>or</div>

      <button className={css.buttonForm} onClick={handleContinueWithApple}>
        <FaApple className={css.icon} />
        Continue with Apple
      </button>

      <button className={css.buttonForm} onClick={handleContinueWithGoogle}>
        <FcGoogle className={css.icon} />
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleAndAppleButton;
