import { NavLink, useLocation, useSearchParams } from "react-router-dom";
// import css from "./SearchPage.module.css";

const SearchPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");
  const handleChangeSearch = ({ target }) => {
    setSearchParams({ search: target.value });
  };

  return (
    <div>
      <h1>SearchPage</h1>
      <form>
        <label>
          <input
            type="text"
            value={search || ""}
            onChange={handleChangeSearch}
          />
          <NavLink to="categories" state={location}>
            Categories
          </NavLink>
        </label>
      </form>

      <p>Popular catehories</p>
    </div>
  );
};

export default SearchPage;
