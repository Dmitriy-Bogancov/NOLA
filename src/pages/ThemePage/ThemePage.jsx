import back from "../../assets/images/back.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const ThemePage = () => {
  return (
    <div>
      <GoBackButton to="/setting" imgSrc={back} imgAlt="Go back" />
      <h2>Theme</h2>
      <ul>
        <li>Light</li>
        <li>Dark</li>
      </ul>
    </div>
  );
};

export default ThemePage;
