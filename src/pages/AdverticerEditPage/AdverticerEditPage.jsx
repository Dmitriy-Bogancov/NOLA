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
import * as yup from "yup";
import addLinks from "../../assets/icons/addBaner.svg";
import attention from "../../assets/icons/circle-exclamation-mark.svg";
import { useCustomContext } from "../../services/Context/Context";
import { Modal } from "../../components/Modal/Modal";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  links: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string(),
        url: yup.string(),
        nameLink: yup.string(),
      })
    )
    .min(1)
    .required("Links is required"),
});

const AdverticerEditPage = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const { token, setToken } = useCustomContext();
  const [errors, setErrors] = useState({});
  const [validForm, setValidForm] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [symbolspostDescriptionCount, setSymbolspostDescriptionCount] =
    useState(0);

  const [account, setAccount] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("account")) ?? {
        name: "",
        description: "",
      }
    );
  });

  useEffect(() => {
    errors;
  }, [errors]);

  useEffect(() => {
    const getData = (async () => {
      try {
        await getAccountApi(token)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // setAccount(...data);
            localStorage.setItem("account", JSON.stringify(data));
            return data;
          });
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [account, data, token]);

  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(account));
  }, [account]);


  const handleForm = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors({
      ...errors,
      [name]: "",
    });

    if (name === "description") {
      setSymbolspostDescriptionCount(value.length);
    }
  };

  const handleBlur = async (field) => {
    try {
      await schema.validateAt(field, account);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    } catch (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validationError.message,
      }));
      setValidForm(false);
    }
  };

  const getBorderColor = (field) => {
    return errors[field] && "#DA2E2E";
  };

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  const handlerBackBtn = () => {
    if (account?.description?.length > 50 && account?.name?.length > 0) {
      navigation("/main/accountAdverticer");
    } else {
      setIsModal((prev) => !prev);
    }
  };

  const handlerContinue = () => {
    setIsModal((prev) => !prev);
  };

  const handlerLater = () => {
    navigation("/main/accountAdverticer");
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(account);

    if (account.id) {
      try {
        await patchAccoutApi(token, account.id, {
          name: account.name,
          description: account.description,
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
      <div className={css.back_container} onClick={handlerBackBtn}>
        <GoBackButton
          imgSrc={back}
          imgAlt="Go back"
          imgWidth="50px"
          imgHeight="50px"
        />
        <h2 className={css.title}>Account</h2>
        <p className={css.empty_block}></p>
      </div>

      <div className={css.photo_container}>
        <img src="" alt="" className={css.icon} />
        <p className={`${css.photo_title} dark:text-white`}>Add photo</p>
      </div>

      <form className={css.form_container} onSubmit={handleSubmit}>
        <div className={css.form}>
          <label className={`${css.post_description} dark:text-white`}>
            Name*
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={account?.name}
              onBlur={() => handleBlur("name")}
              style={{
                borderColor: getBorderColor("name"),
              }}
              className={`primary_text_style ${
                css.input
              } dark:text-white dark:bg-black dark:border-white
              ${errors?.name?.length > 0 ? css.error_placeholder : ""}`}
              onChange={handleForm}
            />
          </label>
          <div className={css.input_container}>
            <label className={`${css.post_description} dark:text-white`}>
              Links*
              <input
                name="links"
                type="text"
                placeholder="http://"
                // value={account?.links?.url}
                disabled={account?.links?.url?.lenght > 0}
                maxLength="0"
                onBlur={() => handleBlur("links")}
                className={`primary_text_style ${
                  css.input
                } dark:bg-black dark:border-white
                ${
                  errors?.links?.length > 0
                    ? `${css.error_placeholder} ${css.error_links}`
                    : ""
                }
                `}
                onChange={handleForm}
              />
            </label>

            <NavLink to="links" className={css.addLink}>
              <img src={addLinks} alt="add Links" />
            </NavLink>
          </div>
          <label className={`${css.post_description} dark:text-white`}>
            Description*
            <textarea
              name="description"
              type="text"
              placeholder="Minimum 50 characters*"
              maxLength="500"
              id=""
              cols="30"
              rows="10"
              value={account?.description}
              onBlur={() => handleBlur("description")}
              style={{
                borderColor: getBorderColor("description"),
              }}
              className={`primary_text_style ${
                css.textarea
              } dark:text-white dark:bg-black dark:border-white
               ${errors?.description?.length > 0 ? css.error_placeholder : ""}
              `}
              onChange={handleForm}
            ></textarea>
            <p className={`${css.symbols} dark:text-white`}>
              Symbols left
              <span>{symbolspostDescriptionCount}/500</span>
            </p>
          </label>
        </div>
        <div className={css.btn_container}>
          {errors?.description?.length > 0 ||
          errors?.links?.length > 0 ||
          errors?.name?.length > 0 ? (
            <div className={css.attention_container}>
              <img src={attention} alt="attention" />
              <p className={css.attention_descr}>
                Fill in all required fields for input
              </p>
            </div>
          ) : (
            ""
          )}
          <Button
            label="Save"
            type="submit"
            disabled={
              account?.description?.length > 49 &&
              account?.name?.length > 0 &&
              account?.links?.length > 0
                ? false
                : true
            }
          />
        </div>
      </form>
      {isModal && (
        <Modal handleToggleModal={handleToggleModal}>
          <h2 className={`${css.modal_title} dark:text-white`}>
            Your profile is incomplete!{" "}
          </h2>
          <p className={`${css.modal_descr} dark:text-white`}>
            You won’t be able to publish announcements until you complete the
            profile
          </p>
          <button
            type="button"
            className={css.modal_btn}
            onClick={handlerContinue}
          >
            Continue entering data
          </button>
          <p
            className={`${css.modal_text} dark:text-white`}
            onClick={handlerLater}
          >
            Continue later
          </p>
        </Modal>
      )}
    </div>
  );
};

export default AdverticerEditPage;
