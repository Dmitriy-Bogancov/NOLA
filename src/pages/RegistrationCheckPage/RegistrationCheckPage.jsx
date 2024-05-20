import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import css from "./RegistrationCheckPage.module.css";
import registrationCheck from "../../assets/icons/registrationCheck.svg";

const RegistrationCheckPage = ({ setRegistrationCheck }) => {
  return (
    <div>
      <p className={`${css.title} dark:text-white`}>Add an advertisement</p>
      <div className={css.registrationCheck_container}>
        <img src={registrationCheck} alt="registrationCheck" />
        <p className={`${css.description} dark:text-white`}>
          Unfortunately, at the moment you can`t post your ads
        </p>

        <p className={css.authorizationCheck}>
          <NavLink to="/main/authorization" className={css.authorizationLinks}>
            Log in
          </NavLink>
         <span className={`dark:text-white`}> or </span>
          <NavLink
            to="/main/authorization/registration"
            className={css.authorizationLinks}
          >
            create an account
          </NavLink>{" "}
         <span className={`dark:text-white`}>to start posting ads.</span> 
        </p>
      </div>
    </div>
  );
};

export default RegistrationCheckPage;

RegistrationCheckPage.propTypes = {
  setRegistrationCheck: PropTypes.func,
};
