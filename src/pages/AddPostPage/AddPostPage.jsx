import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { postPostApi } from "../../services/https/https";
import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";
import css from "./AddPostPage.module.css";
import { ToastError } from "../../services/ToastError/ToastError";
import { HandleFormConfig } from "../../components/HandleFormConfig/HandleFormConfig";
import { MessagePostOnModeration } from "../../components/MessagePostOnModeration/MessagePostOnModeration";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { Modal } from "../../components/Modal/Modal";
import { CreatePost } from "../../components/CreatePost/CreatePost";

const AddPostPage = ({ postEdit, setPostEdit, draftsEdit, setDraftsEdit }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [formConfig, setFormConfig] = useState(false);
  const [postSuccessfullyAdded, setPostSuccessfullyAdded] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [links, setLinks] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("previewPost"))?.links || [
        { id: nanoid(), url: "", name: "" },
      ]
    );
  });
  const [post, setPost] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("previewPost")) ?? // draftsEdit ?? // postEdit ??
      {
        id: nanoid(),
        description: "",
        title: "",
        category: "",
        subcategory: "",
        callToAction: "" || "Read more",
        callToActionLinks: "",
        banners: [],
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("previewPost", JSON.stringify(post));
  }, [post]);

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  const cancelAddPost = () => {
    localStorage.removeItem("previewPost");
    navigate("/main");
    setIsModal((prev) => !prev);
  };

  const createPostDrafts = async () => {
    try {
      // const data = await postDraftsPost(post)

      localStorage.setItem("backend", JSON.stringify(post));

      localStorage.removeItem("previewPost");
      localStorage.removeItem("filterCategory");
      navigate("/main");
      setIsModal((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (post.title !== "" && post.category !== "" && post.subcategory !== "") {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [post.category, post.subcategory, post.title]);

  const handleBack = () => {
    setIsModal((prev) => !prev);
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    console.log("post", post);
    try {
      // const data = await postPostApi(post);
      setPostSuccessfullyAdded(true);
      localStorage.removeItem("previewPost");
      localStorage.removeItem("filterCategory");

      setTimeout(() => {
        navigate("/main");
      }, 3000);
    } catch (error) {
      ToastError(error?.response?.statusText || error.message);
    }
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
            <GoBackButton
              to=""
              imgWidth="50px"
              imgHeight="50px"
              imgAlt="Go back"
            />
            <p className={`${css.title_back} dark:text-white`}>
              New advertisement
            </p>
          </div>

          <form onSubmit={handleSubmitPost}>
            <CreatePost
              setPost={setPost}
              post={post}
              links={links}
              setLinks={setLinks}
            />

            <div className={css.btn_container}>
              <NavLink to="/main/addPost/previewAdvertisemet">
                <button type="button" className={css.btn_preview_container}>
                  <span className={css.btn_preview}> Preview</span>
                </button>
              </NavLink>

              <button
                type="submit"
                className={`${css.btn} ${
                  validForm ? css.btn_active : css.btn_disabled
                }`}
                disabled={validForm ? false : true}
              >
                <span className={css.btn_back_active}>Publish</span>
              </button>
            </div>
          </form>
        </>
      )}
      {isModal && (
        <Modal handleToggleModal={handleToggleModal}>
          <h2 className={css.modal_title}>Add post to draft?</h2>
          <p className={css.modal_descr}>You can come back to edit later.</p>
          <button type="button"  className={css.modal_btn} onClick={createPostDrafts}>
           Confirm
          </button>
          <p type="button"  className={`${css.modal_text} dark:text-white`} onClick={cancelAddPost}>
           Cancel
          </p>
        </Modal>
      )}
      {postSuccessfullyAdded && (
        <MessagePostOnModeration>
          Advertisement is under moderation. <br />
          It will take about 15 minutes.
        </MessagePostOnModeration>
      )}
    </div>
  );
};

export default AddPostPage;

AddPostPage.propTypes = {
  postEdit: PropTypes.object,
  setPostEdit: PropTypes.func,
  draftsEdit: PropTypes.object,
  setDraftsEdit: PropTypes.func,
};
