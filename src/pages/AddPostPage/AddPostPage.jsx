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
import back from "../../assets/images/back.jpg";
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
      JSON.parse(localStorage.getItem("previewPost")) ?? // postEdit ??
      // draftsEdit ??
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
          <div onClick={handleBack}>
            <GoBackButton
              to=""
              imgSrc={back}
              imgAlt="Go back"
              title="New advertisement"
            />
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
                <button type="button" className={css.btn}>
                  <span className={css.btn_back}> Preview</span>
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
          <p>Add post to drafts?</p>
          <button type="button" onClick={createPostDrafts}>
            Yes
          </button>
          <button type="button" onClick={cancelAddPost}>
            No
          </button>
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
