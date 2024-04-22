import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { postPostApi } from "../../services/https/https";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastContainer } from "react-toastify";
import css from "./AddPostPage.module.css";
import { ToastError } from "../../services/ToastError/ToastError";
import { HandleFormConfig } from "../../components/HandleFormConfig/HandleFormConfig";
import PreviewAdvertisemetPage from "../PreviewAdvertisemetPage/PreviewAdvertisemetPage";
import { MessagePostOnModeration } from "../../components/MessagePostOnModeration/MessagePostOnModeration";

const AddPostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);
  const [addPostPhoto, setAddPostPhoto] = useState(false);
  const [selestedFile, setSelestedFile] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [formatPost, setFormatPost] = useState(null);
  const [formConfig, setFormConfig] = useState(false);
  const [postSuccessfullyAdded, setPostSuccessfullyAdded] = useState(false);
  const [post, setPost] = useState({
    description: "",
    title: "",
    banner:
      "https://img.freepik.com/premium-photo/nelle-vie-di-milano_1048944-5187462.jpg",
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
      const data = await postPostApi(post);

      // setUploaded(data)

      // setFormConfig(true);
      setPostSuccessfullyAdded(true);

      setTimeout(() => {
        navigate("/main");
      }, 3000);
    } catch (error) {
      ToastError(error?.response?.statusText || error.message);
    }

    setPost({ banner: "", description: "", title: "" });
  };

  const handlePreview = () => {
    setPreview((prev) => !prev);
  };

  return (
    <div>
      {!postSuccessfullyAdded && (
        <>
          <ToastContainer />
          {formConfig && (
            <HandleFormConfig
              message={"Sucsessfull add a new advertisement"}
              navigatePage={"/main/accountAdverticer"}
            />
          )}
          <h1>New advertisement</h1>

          <p>Add banners</p>

          <form onSubmit={handleSubmitPost}>
            {/* =====================================  */}
            {selestedFile && <ul></ul>}

            {uploaded && (
              <div>
                <h2></h2>
                <img src="" alt="" className={css.banner} />
              </div>
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
            <button type="button" onClick={handleAddPost}>
              Add Bunner
            </button>

            <p>
              Supported types of images: JPEG, PNG, GIF, WEBP, SVG You can
              upload up to 3 images.
            </p>
            {/* =====================================  */}

            <h2>Fill in the details</h2>

            <label>
              Title*
              <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChangePost}
                placeholder="Friendly Study"
              />
              Symbols left <span>0/70</span>
            </label>

            <label>
              Category*
              <input
                type="text"
                name="category"
                value={post.title}
                onChange={handleChangePost}
                placeholder="Language schools"
              />
            </label>

            <label>
              Subcategory*
              <input
                type="text"
                name="subcategory"
                value={post.title}
                onChange={handleChangePost}
                placeholder="Language schools"
              />
            </label>

            <label>
              Description
              <textarea
                name="description"
                cols="30"
                rows="10"
                value={post.description}
                onChange={handleChangePost}
              ></textarea>
              Symbols left <span>0/9000</span>
            </label>

            <div>
              <h2>Add your links</h2>
              <p>
                Add links to your social networks or your webpage (at least
                one).
              </p>
              <ul>
                <li>
                  <input type="text" name="" placeholder="Web adress" />
                  <input type="text" name="" placeholder="Short title" />
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
              <p>
                Supported links: Facebook, Instagram, Pinterest, Tik-tok,
                Webpage
              </p>
              <NavLink to="previewAdvertisemet">
                <button type="button" onClick={handlePreview}>
                  Preview
                </button>
              </NavLink>
              <button>Post </button>
            </div>
          </form>
          <NavLink to="/main">
            <button type="button">Cancel</button>
          </NavLink>
        </>
      )}

      {postSuccessfullyAdded && <MessagePostOnModeration />}
    </div>
  );
};

export default AddPostPage;
