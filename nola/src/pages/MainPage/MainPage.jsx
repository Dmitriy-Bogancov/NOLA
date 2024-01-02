import { NavLink } from "react-router-dom";
import css from "./MainPage.module.css";

const advertiser = [
  {
    id: "1",
    advertiser: "user-1",
    banner: "BANNER-1",
  },
  {
    id: "2",
    advertiser: "user-2",
    banner: "BANNER-2",
  },
  {
    id: "3",
    advertiser: "user-3",
    banner: "BANNER-3",
  },
  {
    id: "4",
    advertiser: "user-4",
    banner: "BANNER-4",
  },
  {
    id: "5",
    advertiser: "user-5",
    banner: "BANNER-5",
  },
];

const MainPage = () => {
  //  useEffect(() => {
  //       http://
  //   }, [])

  return (
    <div>
      <h1>MainPage</h1>

      {advertiser.map(({ banner, advertiser, id }) => (
        <div key={banner} className={css.container}>
          <NavLink to={`/${id}`}>{`Advertiser Header ${advertiser}`}</NavLink>
          <NavLink to={`${id}`} className={css.link}>
            {banner}
          </NavLink>

          <a href="/" className={css.link}>
            Site/Profile
          </a>

          <button type="button">Save Button</button>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
