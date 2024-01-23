import { NavLink, useLocation } from "react-router-dom";
import css from "./SearchCategoriesPage.module.css";

const SearchCategoriesPage = () => {
  const location = useLocation();

  return (
    <div>
      <NavLink to={location.state}>BACK</NavLink>
      <h1 className={css.title}>Subcategory</h1>

      <ul className={css.list}>
        {[...Array(5)].map((subcategory, idx) => (
          <li key={idx} className={css.item}>
            <NavLink to="searchEngineResults" state={location}>
              <p>English</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCategoriesPage;
