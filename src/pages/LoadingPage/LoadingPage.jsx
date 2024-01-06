import { useState } from "react";
import css from "./LoadingPage.module.css";
import WelcomePage from "../WelcomePage/WelcomePage";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <div>
      {isLoading ? (
        <div className={css.container}>
          <div className={css.logo}>
            <h1>NOLA</h1>
          </div>
        </div>
      ) : (
        <WelcomePage />
      )}
    </div>
  );
};

export default LoadingPage;
