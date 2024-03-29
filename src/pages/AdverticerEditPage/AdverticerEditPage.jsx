import css from "./AdverticerEditPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { NavLink, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { useEffect, useState } from "react";
import {
  getAccountApi,
  patchAccoutApi,
  postAccoutApi,
} from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";

const AdverticerEditPage = () => {
  const [data, setData] = useState([]);
  const { token, setToken } = useCustomContext();
  const [account, setAccount] = useState({
    name: "",
    textarea: "",
  });

  useEffect(() => {
    const getData = (async () => {
      try {
        await getAccountApi(token)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setAccount(...data);
            return data;
          });
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [data, token]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (account.id) {
      try {
        await patchAccoutApi(token, account.id, {
          name: account.name,
          textarea: account.textarea,
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // setData(data);
            setAccount(data);
            return data;
          });
      } catch (error) {
        console.log(error);
      }
      return;
    }

    try {
      await postAccoutApi(token, account);
    } catch (error) {
      console.log(error);
    }
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
            className={css.input}
            onChange={handleForm}
          />
          <NavLink to="links" className={css.addLink}>
            {data?.length > 0 ? data.length : <p>+</p>}
          </NavLink>
        </div>
        <textarea
          name="textarea"
          type="text"
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
