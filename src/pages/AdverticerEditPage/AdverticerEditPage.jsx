import css from "./AdverticerEditPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import add from "../../assets/icons/addBaner.svg";
import deleteLink from "../../assets/icons/deleteLink.svg";
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
import { AddPostLinks } from "../../components/AddPostLinks/AddPostLinks";
import { ToastError } from "../../services/ToastError/ToastError";
import { nanoid } from "nanoid";
import { postImg } from "../../services/cloudinary/cloudinary";
import { ToastContainer } from "react-toastify";

const schema = yup.object().shape({
  name: yup.string().min(1).required("Name is required"),
  description: yup.string().min(50).required("Description is required"),
});

const AdverticerEditPage = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const { token, setToken } = useCustomContext();
  const [errors, setErrors] = useState({});
  const [validForm, setValidForm] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [photo, setPhoto] = useState(() => {
    return JSON.parse(localStorage.getItem("account"))?.photo ?? "";
  });
  const [update, setUpdate] = useState(false);

  const [links, setLinks] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("account"))?.links ?? [
        { id: nanoid(), url: "", name: "" },
      ]
    );
  });

  const [account, setAccount] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("account")) ?? {
        photo: "",
        name: "",
        description: "",
      }
    );
  });

  const [symbolspostDescriptionCount, setSymbolspostDescriptionCount] =
    useState(account?.description?.length || 0);

  const upload_presets = "j0hj8hjd";
  const api_key = "984292171139147";

  useEffect(() => {
    errors;

    account?.links?.map(({ url, name }) => {
      if (
        url.length === 0 ||
        name.length === 0 ||
        errors?.description?.length > 0 ||
        errors?.name?.length > 0
      ) {
        setValidForm(false);
        return;
      } else {
        setValidForm(true);
      }
    });
  }, [account?.links, errors]);

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

  const handleAddPhoto = async (e) => {
    const filesOne = e.target.files[0];

    const formData = new FormData();
    formData.append("file", filesOne);
    formData.append("api_key", api_key);
    formData.append("upload_preset", upload_presets);

    if (filesOne) {
      try {
        setUpdate(true);
        const data = await postImg(formData);
        setAccount((prev) => ({
          ...account,
          photo: data?.data?.url,
        }));
        setPhoto(data?.data?.url);
      } catch (error) {
        ToastError(error.message);
      } finally {
        setUpdate(false);
      }
    }
  };

  const handleLinkAdd = () => {
    if (
      links[links.length - 1]?.name === "" ||
      links[links.length - 1]?.url === ""
    ) {
      return;
    }

    setAccount((prev) => ({
      ...account,
      links: [...prev.links, { id: nanoid(), url: "", name: "" }],
    }));
    setLinks((prev) => [...prev, { id: nanoid(), url: "", name: "" }]);
  };

  const handleLinkDelete = (deleteId) => {
    const newLinks = account.links.filter(({ id }) => id !== deleteId);

    setAccount({
      ...account,
      links: newLinks,
    });

    setLinks(newLinks);
  };

  const handleLinkChange = (id, url, name) => {
    setLinks((prev) => {
      const linkIndex = prev.findIndex((link) => link.id === id);

      const newLinks = [...prev];
      newLinks.splice(linkIndex, 1, { id, url, name });

      setAccount({
        ...account,
        links: newLinks,
      });

      return newLinks;
    });
  };

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

    schema
      .validate(account, { abortEarly: false })
      .then(async () => {
        console.log("Form submitted with data:", account);
        try {
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
        } catch (error) {
          ToastError(error);
        }
      })

      .catch((validationErrors) => {
        const errorsMap = {};
        validationErrors.inner.forEach((error) => {
          errorsMap[error.path] = error.message;
        });
        setErrors(errorsMap);
      });
  };

  const el = links?.find((item) => item.id === links[links.length - 1].id);

  return (
    <>
      <ToastContainer />
      <div className={css.adverticerEdit_container}>
        <div onClick={handlerBackBtn}>
          <GoBackButton
            imgSrc={back}
            imgAlt="Go back"
            imgWidth="50px"
            imgHeight="50px"
            title="Account"
          />
        </div>
        {update && <p>Photo downloаding</p>}
        <div className={css.photo_container}>
          <label>
            <img src={photo} className={`${css.icon}`} />

            <input
              className={css.addPhoto}
              type="file"
              onChange={handleAddPhoto}
            />
          </label>

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

            {links &&
              links?.map(({ id, url, name }) => (
                <div key={id} className={css.links_container}>
                  <textarea
                    value={url}
                    name="links"
                    placeholder="url"
                    className={`${
                      css.post_container
                    }   dark:bg-black dark:border-white dark:text-white 
                   ${
                     account?.links?.length > 0 && url.length === 0
                       ? `${css.error_placeholder} ${css.error_links} dark:border-red`
                       : ""
                   }
                `}
                    onChange={(e) => handleLinkChange(id, e.target.value, name)}
                  />
                  <textarea
                    value={name}
                    name="links"
                    onChange={(e) => handleLinkChange(id, url, e.target.value)}
                    placeholder="name"
                    onBlur={() => handleBlur("links")}
                    className={`${
                      css.post_container
                    }   dark:bg-black dark:border-white dark:text-white
                    ${
                      account?.links?.length > 0 && name.length === 0
                        ? `${css.error_placeholder} ${css.error_links} dark:border-red`
                        : ""
                    }
                `}
                  />

                  {el.id === id ? (
                    <img src={add} alt="add link" onClick={handleLinkAdd} />
                  ) : (
                    <img
                      src={deleteLink}
                      alt="delete link"
                      onClick={() => handleLinkDelete(id)}
                    />
                  )}
                </div>
              ))}

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
            errors?.name?.length > 0 ||
            !validForm ? (
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
                validForm
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
    </>
  );
};

export default AdverticerEditPage;
