import { NavLink, useLocation } from "react-router-dom";
import css from "./SearchCategoriesPage.module.css";

const SearchCategoriesPage = () => {
  const location = useLocation();

  return (
    <div>
      <NavLink to={location.state}>BACK</NavLink>
      <h1>Categories</h1>
    </div>
  );
};

export default SearchCategoriesPage;
