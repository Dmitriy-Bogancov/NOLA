import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useCustomContext } from "../../services/Context/Context";

const AddLinksPage = () => {
  const { addLink, setAddLink } = useCustomContext([]);

  const [formData, setFormData] = useState([]);

  //     useEffect(() => {
  // post --addLink
  //   }, [addLink])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddLink((prev) => [...prev, formData]);

    console.log(formData);
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <div>
      <GoBackButton
        to="/main/accountAdverticer/adverticerEdit/links"
        imgSrc={back}
      />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="links" onChange={handleChange} />

        <Button label="Save" type="submit" />
      </form>
    </div>
  );
};

export default AddLinksPage;
