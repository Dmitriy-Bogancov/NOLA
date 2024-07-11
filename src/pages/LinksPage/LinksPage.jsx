import { NavLink, useLocation, useNavigate } from "react-router-dom";

import css from "./LinksPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import addLinks from "../../assets/icons/addBaner.svg";
import deleteLink from "../../assets/icons/deleteLink.svg";

import { useEffect, useState } from "react";

import { deleteLinksApi, getLinksApi } from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";
import Button from "../../components/Button";

const LinksPage = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const [account, setAccount] = useState(() => {
    return JSON.parse(localStorage.getItem("account")) ?? {};
  });

  const [data, setData] = useState(() => {
    // return JSON.parse(localStorage.getItem("account")) ?? [];
    return JSON.parse(localStorage.getItem("accountLink")) ?? [];
  });
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    // localStorage.setItem("account", JSON.stringify(data));
    localStorage.setItem("accountLink", JSON.stringify(data));

    data?.links?.length !== 0 ? setValidForm(true) : setValidForm(false);
    // const getData = (async () => {
    //   try {
    //     await getLinksApi(token)
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //        setData();
    //        setDeleteLinks(false)
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
  }, [data]);

  const handleDelete = (deleteId) => {
    const deleteLink = data?.links?.filter(({ id }) => id !== deleteId);

    setData({
      links: deleteLink,
    });

    if (account.links) {
      const res = {
        ...account,
        links: deleteLink,
      };

      localStorage.setItem("account", JSON.stringify(res));
    }
  };

  const handlerSavedClick = () => {
    const res = {
      ...account,
      ...data,
    };
    localStorage.setItem("account", JSON.stringify(res));

    try {
      navigation("/main/accountAdverticer/adverticerEdit");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={css.back_container}>
        <GoBackButton
          to="/main/accountAdverticer/adverticerEdit"
          imgSrc={back}
          imgAlt="Go back"
          imgWidth="50px"
          imgHeight="50px"
        />
        <h2 className={css.title}>Links</h2>
        <p className={css.empty_block}></p>
      </div>

      <form className={css.form_container}>
        <div className={css.form}>
          <div className={css.input_container}>
            <label className={`${css.post_description} dark:text-white`}>
              Links*
              <input
                name="links"
                type="text"
                placeholder="http://"
                disabled
                className={`primary_text_style ${css.input} dark:bg-black dark:border-white`}
              />
            </label>
            <NavLink to="addLinks" className={css.addLink}>
              <img src={addLinks} alt="add Links" />
            </NavLink>
          </div>
          {/* <div className={css.input_container}>
            <input type="text" disabled className={css.input} />
            <NavLink to="addLinks" className={css.addLink} state={location}>
              +
            </NavLink>
          </div> */}
          <ul>
            {data?.links?.map(({ url, nameLink, id }) => (
              <li key={id} className={css.item}>
                <img src="" alt="" className={css.img_link} />
                <div>
                  <p className={`${css.name_link} dark:text-white`}>
                    {nameLink}
                  </p>
                  <a
                    href={url}
                    className={`${css.url_link} dark:text-white`}
                    target="blank"
                  >
                    {url}
                  </a>
                </div>

                <img
                  src={deleteLink}
                  alt="delete Link"
                  onClick={() => handleDelete(id)}
                  className={css.delete_link}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={css.btn_container} onClick={handlerSavedClick}>
          {/* <NavLink to="/main/accountAdverticer/adverticerEdit"> */}
          <Button
            label="Save"
            type="submit"
            disabled={validForm ? false : true}
          />
          {/* </NavLink> */}
        </div>
      </form>
    </div>
  );
};

export default LinksPage;
