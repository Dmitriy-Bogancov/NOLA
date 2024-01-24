import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import css from "./SearchPage.module.css";

const SearchPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");
  const handleChangeSearch = ({ target }) => {
    setSearchParams({ search: target.value });
  };

  return (
    <div>
      <form>
        <div className={css.input_container}>
          <label>
            <input
              type="text"
              value={search || ""}
              placeholder="Searching"
              onChange={handleChangeSearch}
              className={css.input}
            />
          </label>

          <svg width="24" height="24" className={css.search_icon}>
            <use></use>
          </svg>
        </div>
      </form>
      <h2 className={css.title}>Categories</h2>

      <ul className={css.list}>
        {[...Array(5)].map((category, idx) => (
          <li key={idx} className={css.item}>
            <NavLink to="categories" state={location}>
              <img src="" alt="" className={css.img} />
              <p className={css.description}>Language</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
