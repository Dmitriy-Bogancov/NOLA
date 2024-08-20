import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import css from "./SearchPage.module.css";
import { useEffect, useState } from "react";
import { getAllPostApi } from "../../services/https/https";

const SearchPage = () => {
  const location = useLocation();
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

  const handleChangeSearch = ({ target }) => {
    setSearchParams({ search: target.value });
    setQuwery(target.value);
  };

  const searchData = data.filter(({ title }) =>
    title.toLowerCase().trim().includes(quwery.toLowerCase().trim())
  );

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
        {data &&
          searchData?.map(({ category, idx, title }) => (
            <li key={idx} className={css.item}>
              <NavLink to="categories" state={location}>
                <img src="" alt="" className={css.img} />
                <p className={css.description}>{title}</p>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchPage;
