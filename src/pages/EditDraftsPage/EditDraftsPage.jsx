import { useEffect, useState } from "react";
import {
  getDraftsPostId,
  patchDraftsPostId,
  postPostApi,
} from "../../services/https/https";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import back from "../../assets/images/back.jpg";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import css from "./EditDraftsPage.module.css";
import { ToastError } from "../../services/ToastError/ToastError";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { Modal } from "../../components/Modal/Modal";
import { MessagePostOnModeration } from "../../components/MessagePostOnModeration/MessagePostOnModeration";
import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";

const EditDraftsPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [isModal, setIsModal] = useState(false);
  const [postSuccessfullyAdded, setPostSuccessfullyAdded] = useState(false);
  const [data, setData] = useState([]);

  const [links, setLinks] = useState(() => {
    return (
      (data.links ||
        JSON.parse(localStorage.getItem("previewPost"))?.links) ?? [
        { id: nanoid(), url: "", name: "" },
      ]
    );
  });
  const [post, setPost] = useState(
    // data.length !== 0
    () => {
      return (
        JSON.parse(localStorage.getItem("previewPost")) ?? {
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
    }
  );

  useEffect(() => {
    const getData = (async () => {
      // const data =await getDraftsPostId(params.editDraftsId);
      const data = await JSON.parse(localStorage.getItem("backend"));

      setData(data);

      localStorage.setItem("previewPost", JSON.stringify(data));
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("previewPost", JSON.stringify(post));
  }, [post]);

  useEffect(() => {
    post.links = links;
    localStorage.setItem("previewPost", JSON.stringify(post));
  }, [links, post]);


  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  const handleBack = () => {
    console.log(isModal);
    setIsModal((prev) => !prev);
  };

  const cancelAddPost = () => {
    localStorage.removeItem("previewPost");
    localStorage.removeItem("filterCategory");
    navigate("/main");
    setIsModal((prev) => !prev);
  };

  const createPostDrafts = async () => {
    try {
      // const data = await patchDraftsPostId(params.editDraftsId, post)
      localStorage.setItem("backend", JSON.stringify(post));

      localStorage.removeItem("previewPost");
      localStorage.removeItem("filterCategory");
      navigate("/main");
      setIsModal((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    console.log("EditDrafts", post);
    try {
      const data = await postPostApi(post);
      setPostSuccessfullyAdded(true);
      localStorage.removeItem("previewPost");

      setTimeout(() => {
        navigate("/main");
      }, 3000);
    } catch (error) {
      ToastError(error?.response?.statusText || error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <p>EditDraftsPage</p>
      <div className={css.top_container} onClick={handleBack}>
        <GoBackButton to="" imgSrc={back} imgAlt="Go back" />
        <p className={`${css.title_back} dark:text-white`}>New advertisement</p>
      </div>
      <form onSubmit={handleSubmitPost}>
      
        {data.length !== 0 && (
          <CreatePost
            post={post}
            setPost={setPost}
            links={links}
            setLinks={setLinks}
          />
        )}
        <div className={css.btn_container}>
          <NavLink to="/main/addPost/previewAdvertisemet">
            <button type="button" className={css.btn}>
              <span className={css.btn_back}> Preview</span>
            </button>
          </NavLink>

          <button type="submit" className={`${css.btn} ${css.btn_active}`}>
            <span className={css.btn_back_active}>Publish</span>
          </button>
        </div>
      </form>
      {isModal && (
        <Modal handleToggleModal={handleToggleModal}>
          <p>Save a draft?</p>
          <button type="button" onClick={createPostDrafts}>
            Yes
          </button>
          <button type="button" onClick={cancelAddPost}>
            No
          </button>
        </Modal>
      )}
      {postSuccessfullyAdded && <MessagePostOnModeration />}
    </>
  );
};

export default EditDraftsPage;