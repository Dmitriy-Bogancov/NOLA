import { NavLink } from "react-router-dom";

import css from "./LinksPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { useEffect, useState } from "react";

import { deleteLinksApi, getLinksApi } from "../../services/https/https";

const LinksPage = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const getData = (async () => {
      const data = await getLinksApi();

      setData(data);
    })();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter(({ links }) => links.links !== id));
    //  deleteLinksApi(id);   
  };

  return (
    <div>
      <GoBackButton to="/main/accountAdverticer/adverticerEdit" imgSrc={back} />
      <form className={css.form}>
        <div>
          <div className={css.input_container}>
            <input type="text" disabled className={css.input} />
            <NavLink to="addLinks" className={css.addLink}>
              +
            </NavLink>
          </div>
          <ul>
            {data.map(({ links }) => (
              <li key={links?.links}>
                <p>{links?.name}</p>
                <a href={links?.links}>{links?.links}</a>
                <button
                  type="button"
                  onClick={() => handleDelete(links?.links)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default LinksPage;
