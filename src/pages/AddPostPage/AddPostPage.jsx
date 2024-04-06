import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { postPostApi } from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastContainer } from "react-toastify";
import css from "./AddPostPage.module.css";
import { ToastError } from "../../services/ToastError/ToastError";
import { HandleFormConfig } from "../../components/HandleFormConfig/HandleFormConfig";

const AddPostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, setToken } = useCustomContext();
  const [addPostPhoto, setAddPostPhoto] = useState(false);
  const [selestedFile, setSelestedFile] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [formatPost, setFormatPost] = useState(null);
  const [formConfig, setFormConfig] = useState(false);
  const [post, setPost] = useState({
    description: "",
    title: "",
    banner: "https://img.freepik.com/premium-photo/nelle-vie-di-milano_1048944-5187462.jpg",
  });

  const handleAddPost = () => {
    setAddPostPhoto(true);
  };

  const handleChangePost = ({ target }) => {
    const { name, value } = target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleChange = ({ target }) => {
    const { files } = target;

    const imgFormat = files[0].type.split("/").splice(1, 1).join();
    const acceptFormat = target.accept.split(",.");

    const results = acceptFormat.find((el) => el === imgFormat);

    if (results) {
      Toastify("Photo downloаding");
      setSelestedFile(results);

      return;
    }
    Toastify("Photo has not suitable format");
  };

  const handleUploadClick = () => {
    if (!selestedFile) {
      Toastify("Please select a file");
      return;
    }

    const formAddPostPhoto = new FormData();
    // file ?
    formAddPostPhoto.append("file", selestedFile);
    setUploaded(true);
    setPost({
      ...post,
      banner: formAddPostPhoto,
    });

    // const res = await fetch("", {method: "POST", body: formAddPostPhoto, Authorization: {}})
    // const data = await res.json()
    // setUploaded(data)

    setAddPostPhoto(false);
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    try {
    const data =  await postPostApi(token, post);

      // setUploaded(data)
      
      setFormConfig(true);
    } catch (error) {
     ToastError(error?.response?.statusText || error.message);
    }

    setPost({ banner: "", description: "" , title: ""});
  };

  return (
    <div>
      <ToastContainer />
      {formConfig && (
        <HandleFormConfig
          message={"Sucsessfull add a new advertisement"}
          navigatePage={"/main/accountAdverticer"}
        />
      )}
      {addPostPhoto && (
        <>
          <input
            type="file"
            value={formatPost}
            accept="image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf"
            onChange={handleChange}
          />

          <button onClick={handleUploadClick}>Upload now</button>
        </>
      )}
      <form onSubmit={handleSubmitPost}>
        <button type="button" onClick={handleAddPost}>
          Add Bunner
        </button>

        {selestedFile && <ul></ul>}

        {uploaded && (
          <div>
            <h2></h2>
            <img src="" alt="" className={css.banner} />
          </div>
        )}

        <input type="text" name="title" value={post.title} onChange={handleChangePost}/>

        <textarea
          name="description"
          cols="30"
          rows="10"
          value={post.description}
          onChange={handleChangePost}
        ></textarea>
        <div>
          <ul>
            <li>
              <NavLink
                to="/main/accountAdverticer/adverticerEdit/links/addLinks"
                state={location}
              >
                Link
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/main/accountAdverticer/adverticerEdit/links/addLinks"
                state={location}
              >
                Link
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/main/accountAdverticer/adverticerEdit/links/addLinks"
                state={location}
              >
                Link
              </NavLink>
            </li>
          </ul>

          <NavLink to="previewAdvertisemet">
            <button>Preview</button>
          </NavLink>
          <button>Confirm </button>
        </div>
      </form>
      <NavLink to="/main">
        <button type="button">Cancel</button>
      </NavLink>
    </div>
  );
};

export default AddPostPage;
