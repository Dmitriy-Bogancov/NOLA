import css from "./AdverticerEditPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { NavLink } from "react-router-dom";

import Button from "../../components/Button";
import { useEffect, useState } from "react";
import {
  getAccountApi,
  postAccoutApi,
  putAccoutApi,
} from "../../services/https/https";

const AdverticerEditPage = () => {
  const [data, setData] = useState([]);

  const [account, setAccount] = useState({
    name: "",
    textarea: "",
  });

  useEffect(() => {
    const getData = (async () => {
      const data = await getAccountApi();
      setData(data)
      setAccount(...data);
      console.log("data", data);
    })();
  }, []);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (account.id) {
      putAccoutApi(account.id, account);

      return;
    }
    postAccoutApi(account);
  };

  return (
    <div className={css.adverticerEdit_container}>
      <GoBackButton
        to="/main/accountAdverticer"
        imgSrc={back}
        imgAlt="Go back"
        imgWidth="50px"
        imgHeight="50px"
      />
      <h2>Account</h2>
      <svg width="72" height="72" className={css.icon}>
        <use></use>
      </svg>

      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={account?.name}
          className={css.input}
          onChange={handleForm}
        />
        <div className={css.input_container}>
          <input
            name="links"
            type="text"
            placeholder="Add link"
            disabled
            // value={data?.links}
            className={css.input}
            onChange={handleForm}
          />
          <NavLink to="links" className={css.addLink}>
            {data?.length > 0 ? data.length : <p>+</p>}
          </NavLink>
        </div>
        <textarea
          name="textarea"
          id=""
          cols="30"
          rows="10"
          value={account?.textarea}
          className={css.textarea}
          onChange={handleForm}
        ></textarea>
        {!account?.textarea?.length || !account?.name?.length ? (
          <Button label="Save" type="submit" disabled />
        ) : (
          <Button label="Save" type="submit" />
        )}
      </form>

      <NavLink to="/welcome">Enter data later</NavLink>
    </div>
  );
};

export default AdverticerEditPage;
