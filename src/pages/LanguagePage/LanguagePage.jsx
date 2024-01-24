import back from "../../assets/images/back.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const LanguagePage = () => {
  return (
    <div>
      <GoBackButton to="/setting" imgSrc={back} imgAlt="Go back" />
      <h2>Language</h2>
      <ul>
        <li>English</li>
        <li>Ukrainian</li>
        <li>German</li>
        <li>Polish</li>
      </ul>
    </div>
  );
};

export default LanguagePage;
