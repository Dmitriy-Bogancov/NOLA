import { NavLink, useLocation, useNavigate } from "react-router-dom";
import css from "./SearchCategoriesPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const SearchCategoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

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

      <h1 className={css.title}>Languages</h1>

      <ul className={css.list}>
        {[...Array(5)].map((subcategory, idx) => (
          <li key={idx} className={css.item}>
            <NavLink to="searchEngineResults" state={location}>
              <img src="" alt="" className={css.img} />
              <p className={css.descr}>English</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCategoriesPage;
