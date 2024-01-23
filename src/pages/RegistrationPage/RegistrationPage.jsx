import RegistrationForm from "../../components/RegistrationForm";
import GoogleAndAppleButton from "../../components/GoogleButton/GoogleAndAppleButton";

const RegistrationPage = () => {
  return (
    <div className="container">
      <RegistrationForm />
      <GoogleAndAppleButton />
    </div>
  );
};

export default RegistrationPage;
