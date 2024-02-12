import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { useLocation } from "react-router-dom";

const ContactServicePage = () => {
  const location = useLocation();

  return (
    <div>
      <GoBackButton
        to={`${location.pathname.split("/").slice(0, -1).join("/")}`}
        imgSrc={back}
        imgAlt="Go back"
      />
      ContactServicePage
    </div>
  );
};

export default ContactServicePage;
