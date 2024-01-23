import GoogleAndAppleButton from "../../components/GoogleButton/GoogleAndAppleButton";
import LoginForm from "../../components/LoginForm";

const SignInPage = () => {
  return (
    <div className="container">
      <LoginForm />
      <GoogleAndAppleButton />
    </div>
  );
};

export default SignInPage;
