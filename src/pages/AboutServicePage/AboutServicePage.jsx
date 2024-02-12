import { NavLink } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";

const AboutServicePage = () => {
  return (
    <div>
      <GoBackButton to="/main/setting" imgSrc={back} imgAlt="Go back" />
      <p>Text About Service</p>
      <NavLink to="/main/setting/aboutService/contactService">
        <button type="button">Contact service</button>
      </NavLink>
    </div>
  );
};

export default AboutServicePage;
