import { useState } from "react";
import css from "./LoadingPage.module.css";
import { NavLink } from "react-router-dom";
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
// <div>
//   <h1>Welcome to NOLA!</h1>
//   <ul>
//     <li>
//       <NavLink to="/main">
//         <button type="button">continue</button>
//       </NavLink>
//     </li>

//     <li>
//       <NavLink to="/advertiser">
//         <button type="button">Edit AdvertiserPage</button>
//       </NavLink>
//     </li>
//   </ul>
// </div>
