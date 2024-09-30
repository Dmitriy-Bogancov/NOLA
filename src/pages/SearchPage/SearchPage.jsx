import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import css from "./SearchPage.module.css";
import { useEffect, useState } from "react";
import { getAllPostApi } from "../../services/https/https";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { ReactComponent as Icon_Searching } from "../../assets/icons/searching.svg";
import { useCustomContext } from "../../services/Context/Context";

const SearchPage = () => {
  const { theme, setTheme } = useCustomContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [quwery, setQuwery] = useState("");

  const search = searchParams.get("search");

  useEffect(() => {
    const getData = (async () => {
      const { data } = await getAllPostApi();
      setData(data);
    })();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleChangeSearch = ({ target }) => {
    setSearchParams({ search: target.value });
    setQuwery(target.value);
  };

  const searchData = data.filter(({ title }) =>
    title.toLowerCase().trim().includes(quwery.toLowerCase().trim())
  );

  return (
    <div>
      <div className={css.top_container} onClick={handleBack}>
        <GoBackButton
          to=""
          imgWidth="50px"
          imgHeight="50px"
          imgAlt="Go back"
          title="Searching"
        />
      </div>
      <form>
        <div className={css.input_container}>
          <label>
            <input
              type="text"
              value={search || ""}
              // placeholder="Searching"
              onChange={handleChangeSearch}
              className={`${css.input}  dark:bg-black dark:border-white dark:text-white`}
            />
          </label>

          <div
            className={`${css.search_icon} ${
              theme === "dark" ? css.iconDark : ""
            }`}
          >
            <Icon_Searching />
          </div>
        </div>
      </form>
      <h2 className={`${css.title} dark:text-white`}>Categories</h2>

      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="categories" state={location}>
            <img src="" alt="banner" className={css.img} />
            <p className={css.description}>Languages</p>
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="categories" state={location}>
            <img src="" alt="banner" className={css.img} />
            <p className={css.description}>IT sphere</p>
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="categories" state={location}>
            <img src="" alt="banner" className={css.img} />
            <p className={css.description}>Sport</p>
          </NavLink>
        </li>
      </ul>
      {/* <ul className={css.list}>
        {data &&
          // banners[0]
          searchData?.map(({ category, idx, title, banners }) => (
            <li key={idx} className={css.item}>
              <NavLink to="categories" state={location}>
                <img src={banners} alt="banner" className={css.img} />
                <p className={css.description}>{title}</p>
              </NavLink>
            </li>
          ))}
      </ul> */}
    </div>
  );
};

export default SearchPage;
