import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import Button from "../../components/Button";
import { postLinksApi } from "../../services/https/https";
import { useState } from "react";

const AddLinksPage = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    postLinksApi(formData);

    setFormData({
      links: "",
      name: "",
    });
  };

  return (
    <div>
      <GoBackButton
        to="/main/accountAdverticer/adverticerEdit/links"
        imgSrc={back}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="links"
          value={formData.links}
          onChange={handleChange}
        />
        {!formData?.links?.length || !formData?.name?.length ? (
          <Button label="Save" type="submit" disabled />
        ) : (
          <Button label="Save" type="submit" />
        )}
      </form>
    </div>
  );
};

export default AddLinksPage;
