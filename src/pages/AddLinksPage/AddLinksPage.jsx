import css from "./AddLinksPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import Button from "../../components/Button";
import { postLinksApi } from "../../services/https/https";
import { useEffect, useState } from "react";
import { useCustomContext } from "../../services/Context/Context";
import { useLocation } from "react-router-dom";
import { preview } from "@cloudinary/url-gen/actions/videoEdit";
import { nanoid } from "nanoid";

const AddLinksPage = () => {
  const location = useLocation();
  const { token, setToken } = useCustomContext();
  const [link, setlink] = useState({
    id: nanoid(),
    url: "",
    nameLink: "",
  });

  const [formData, setFormData] = useState(() => {
    return (
      // JSON.parse(localStorage.getItem("account")) ?? {
      //   ...formData,
      // }
      JSON.parse(localStorage.getItem("accountLink")) ?? {
        links: [],
      }
    );
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setlink((prev) => ({
      ...prev,
      id: nanoid(),
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.length === 0) {
      setFormData((prev) => ({
        // ...formData,
        links: [link],
      }));
    } else {
      setFormData((prev) => ({
        // ...formData,
        links: [...prev.links, link],
      }));
    }

    try {
      setlink({
        url: "",
        nameLink: "",
      });
      // postLinksApi(token, formData);
    } catch (error) {
      console.log(error);
    }
  };
  localStorage.setItem("accountLink", JSON.stringify(formData));
  // localStorage.setItem("account", JSON.stringify(formData));
  return (
    <div>
      <div className={css.back_container}>
        <GoBackButton
          to="/main/accountAdverticer/adverticerEdit/links"
          imgSrc={back}
          imgAlt="Go back"
          imgWidth="50px"
          imgHeight="50px"
        />
        <h2 className={css.title}>Links</h2>
        <p className={css.empty_block}></p>
      </div>

      <form className={css.form_container} onSubmit={handleSubmit}>
        <div className={css.form}>
          <input
            type="text"
            name="nameLink"
            placeholder="URL-address"
            value={link?.nameLink}
            className={`primary_text_style ${css.input} dark:bg-black dark:border-white dark:text-white`}
            onChange={handleChange}
          />
          <input
            type="text"
            name="url"
            placeholder="Name link"
            value={link?.url}
            className={`primary_text_style ${css.input} dark:bg-black dark:border-white dark:text-white`}
            onChange={handleChange}
          />
        </div>
        <div className={css.btn_container}>
          <Button
            label="Save"
            type="submit"
            disabled={
              link?.url?.length > 0 && link?.nameLink?.length > 0 ? false : true
            }
          />
        </div>
      </form>
    </div>
  );
};

export default AddLinksPage;
