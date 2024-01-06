import { useParams } from "react-router-dom";
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
    </div>
  );
};

export default AdvertiserDetailsPage;
