import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { postPostApi } from "../../services/https/https";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";
import css from "./AddPostPage.module.css";
import { ToastError } from "../../services/ToastError/ToastError";
import { HandleFormConfig } from "../../components/HandleFormConfig/HandleFormConfig";
import PreviewAdvertisemetPage from "../PreviewAdvertisemetPage/PreviewAdvertisemetPage";
import { MessagePostOnModeration } from "../../components/MessagePostOnModeration/MessagePostOnModeration";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";

import { AddSelectCategory } from "../../components/AddSelectCategory/AddSelectCategory";
import { AddBanner } from "../../components/AddBanner/AddBanner";

import { AddCallToAction } from "../../components/AddCallToAction/AddCallToAction";

import { AddPostLinks } from "../../components/AddPostLinks/AddPostLinks";
import { Modal } from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addLink } from "../../redux/addPostLink/addPostSlice";

const AddPostPage = ({ postEdit, setPostEdit }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [saveLink, setSaveLink] = useState(() => {
    return localStorage.getItem("saveLink") ?? false;
  });
  const [symbolsTitleCount, setSymbolsTitleCount] = useState(
    0
  );

  
  const [symbolspostDescriptionCount, setSymbolspostDescriptionCount] =
    useState(0);
  const [formConfig, setFormConfig] = useState(false);

  const [postSuccessfullyAdded, setPostSuccessfullyAdded] = useState(false);
  const [link, setLink] = useState({});

  const [post, setPost] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("previewPost")) ??
      postEdit ?? {
        id: "",
        description: "",
        title: "",
        category: { index: null, title: "" },
        subcategory: { index: null, title: "" },
        callToAction: "" || "Read more",
        callToActionLinks: "",
        links: [],
        banner: [],
        addLinks: [],
      }
    );
  });

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  const cancelAddPost = () => {
    localStorage.removeItem("previewPost");
    localStorage.removeItem("imgOneURL");
    localStorage.removeItem("imgTwoURL");
    localStorage.removeItem("imgThreeURL");
    navigate("/main");
    setIsModal((prev) => !prev);
  };

  const createPostDrafts = async () => {
    try {
      // const data = await postDraftPost(post)

      localStorage.setItem("backend", JSON.stringify(post));

      localStorage.removeItem("previewPost");
      localStorage.removeItem("imgOneURL");
      localStorage.removeItem("imgTwoURL");
      localStorage.removeItem("imgThreeURL");
      navigate("/main");
      setIsModal((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePost = ({ target }) => {
    const { name, value } = target;
    setPost({
      ...post,
      [name]: value,
    });


    setSymbolsTitleCount(value.length);

    if (name === "description") {
      setSymbolspostDescriptionCount(value.length);
      return;
    }

    localStorage.setItem("previewPost", JSON.stringify(post));
  };

  const handlePreview = async () => {
    localStorage.setItem("previewPost", JSON.stringify(post));
    localStorage.setItem("saveLink", true);
  };

  const handleBack = () => {
    setIsModal((prev) => !prev);
  };


  const handleSubmitPost = async (e) => {
    e.preventDefault();
    console.log("post", post);

    // try {
    // setPostSuccessfullyAdded(true);
    // localStorage.removeItem("previewPost");
    // localStorage.removeItem("imgOneURL");
    // localStorage.removeItem("imgTwoURL");
    // localStorage.removeItem("imgThreeURL");
    // setTimeout(() => {
    //   navigate("/main");
    // }, 3000);
    // } catch (error) {
    //   ToastError(error?.response?.statusText || error.message);
    // }
    // setPost({ banner: "", description: "", title: "" });
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
          <div className={css.top_container} onClick={handleBack}>
            <GoBackButton to="" imgSrc={back} imgAlt="Go back" />
            <p className={css.title_back}>New advertisement</p>
          </div>

          <form onSubmit={handleSubmitPost}>
            <AddBanner setPost={setPost} post={post} />
            <p className={css.title}>Fill in the details</p>

            <label className={css.post_description}>
              Title*
              <input
                className={css.post_container}
                type="text"
                maxLength="35"
                name="title"
                value={post.title}
                onChange={handleChangePost}
                placeholder="Friendly Study"
                // pattern=".{35,}"
              />
              <p className={css.symbols}>
                Symbols left{" "}
                <span className={css.symbols_count}>
                  {post.title.length ?? symbolsTitleCount}/35
                </span>
              </p>
            </label>

            <AddSelectCategory setPost={setPost} post={post} />

            <label className={css.post_description}>
              Description
              <textarea
                className={css.post_container}
                name="description"
                maxLength="9000"
                rows="7"
                value={post.description}
                onChange={handleChangePost}
              ></textarea>
              <p className={css.symbols}>
                Symbols left{" "}
                <span className={css.symbols_count}>
                  {post.description.length ?? symbolspostDescriptionCount}/9000
                </span>
              </p>
            </label>

            <div className={css.links_container}>
              <p className={css.title}>Add your links</p>
              <p className={css.links_title}>
                Add a link address and choose a Call-To-Action button if you
                want to promptly redirect a consumer to the landing page
                (optional):
              </p>

              <AddCallToAction setPost={setPost} post={post} />

              <p className={css.supported_links}>
                Add a link to your social networks or webpage (at least one) and
                give a short title:
              </p>

              <AddPostLinks
                setPost={setPost}
                post={post}
                link={link}
                setLink={setLink}
                saveLink={saveLink}
                // addPostLinks={addPostLinks}
              />

              <p className={css.supported_links}>
                Supported links: Facebook, Instagram, Pinterest, Tik-tok,
                Webpage
              </p>

              <div className={css.btn_container}>
                <NavLink to="/main/addPost/previewAdvertisemet">
                  <button
                    type="button"
                    className={css.btn}
                    onClick={handlePreview}
                  >
                    <span className={css.btn_back}> Preview</span>
                  </button>
                </NavLink>

                <button
                  type="submit"
                  className={`${css.btn} ${css.btn_active}`}
                >
                  <span className={css.btn_back_active}>Publish</span>
                </button>
              </div>
            </div>
          </form>
        </>
      )}
      {isModal && (
        <Modal handleToggleModal={handleToggleModal}>
          <p>Add post to drafts?</p>
          <button type="button" onClick={createPostDrafts}>
            Yes
          </button>
          <button type="button" onClick={cancelAddPost}>
            No
          </button>
        </Modal>
      )}
      {postSuccessfullyAdded && <MessagePostOnModeration />}
    </div>
  );
};

export default AddPostPage;

AddPostPage.propTypes = {
  postEdit: PropTypes.object,
  setPostEdit: PropTypes.func,
};