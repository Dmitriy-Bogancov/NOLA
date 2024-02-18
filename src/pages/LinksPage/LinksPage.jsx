import { NavLink, useLocation } from "react-router-dom";

import css from "./LinksPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { useEffect, useState } from "react";

import { deleteLinksApi , getLinksApi } from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";

const LinksPage = () => {
  const location = useLocation()
  const [data, setData] = useState([]);
  const [deletePost, setDeletePost] = useState(false);
  const { token, setToken } = useCustomContext();

  useEffect(() => {
    const getData = (async () => {
      try {
        await getLinksApi(token)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
           setData(data);
           setDeletePost(false)
        });
      } catch (error) {
        console.log(error);
      }
    })();
   }, [token, deletePost]);

  const handleDelete = (id) => {
    setData(data.filter(({ links }) => links !== id));
    deleteLinksApi(token, id);
    setDeletePost(true)
  };

  return (
    <div>
      <GoBackButton to="/main/accountAdverticer/adverticerEdit" imgSrc={back} />
      <form className={css.form}>
        <div>
          <div className={css.input_container}>
            <input type="text" disabled className={css.input} />
            <NavLink to="addLinks" className={css.addLink} state={location}>
              +
            </NavLink>
          </div>
          <ul>
            {data?.map(({ links, name, id }) => (
              <li key={links}>
                <p>{name}</p>
                <a href={links}>{links}</a>
                <button
                  type="button"
                  onClick={() => handleDelete(id)}
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
