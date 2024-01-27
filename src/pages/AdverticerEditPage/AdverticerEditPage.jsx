import css from "./AdverticerEditPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import { useCustomContext } from "../../services/Context/Context";

const AdverticerEditPage = () => {
  const { addLink, setAddLink } = useCustomContext(false);
  const [formData, setFormData] = useState({
    name: "",
    links: null,
    textarea: "",
  });

  //     useEffect(() => {
  // post --formData
  //   }, [addLink])

  //     useEffect(() => {
  if (formData) {
    // return get --formData
  }

  //   }, [ormData])

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      links: addLink,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: formData.name,
      links: addLink,
      textarea: formData.textarea,
    });
    console.log(formData);
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
          value={formData.name}
          className={css.input}
          onChange={handleForm}
        />
        <div className={css.input_container}>
          <input
            name="links"
            type="text"
            className={css.input}
            onChange={handleForm}
          />
          <NavLink to="links" className={css.addLink}>
            {formData.links ? formData.links.length : <p>+</p>}
          </NavLink>
        </div>
        <textarea
          name="textarea"
          id=""
          cols="30"
          rows="10"
          value={formData.textarea}
          className={css.textarea}
          onChange={handleForm}
        ></textarea>
        <Button label="Save" type="submit" />
      </form>

      <NavLink to="/welcome">Enter data later</NavLink>
    </div>
  );
};

export default AdverticerEditPage;
