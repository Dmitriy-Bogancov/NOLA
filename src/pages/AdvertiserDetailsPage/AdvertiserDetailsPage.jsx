import { NavLink, useParams } from "react-router-dom";
import css from "./AdvertiserDetailsPage.module.css";

const AdvertiserDetailsPage = () => {
  const { advertiserId } = useParams();

  //  useEffect(() => {
  //     http://${advertiserId}
  // }, [])

  return (
    <div>
      <h1>AdvertiserDetailsPage</h1>

      <p>AVATAR user-{`${advertiserId}`}</p>

      <img src="" alt="" className={css.img} />

      <ul>
        <li>
          <a href="/">LINK</a>
        </li>
        <li>
          <a href="/">LINK</a>
        </li>
        <li>
          <a href="/">LINK</a>
        </li>
      </ul>

      <p>Description</p>

      <button type="button">SAVE</button>
      <NavLink to="/welcome">Enter data later</NavLink>
    </div>
  );
};

export default AdvertiserDetailsPage;
