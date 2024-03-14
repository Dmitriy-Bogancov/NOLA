import { NavLink } from "react-router-dom";

const LanguagePage = () => {
  return (
    <div>
      {/* <NavLink to={"/main/setting"}>
        <button type="button">BACK</button>
      </NavLink> */}
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
