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
import axios from "axios";

const EditDraftsPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [isModal, setIsModal] = useState(false);
  const [postSuccessfullyAdded, setPostSuccessfullyAdded] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [data, setData] = useState([]);
  const [dataApi, setDataApi] = useState(
    () => JSON.parse(localStorage.getItem("dataApi")) ?? false
  );
  const [links, setLinks] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("previewPost"))?.links || [
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
      try {
        if (dataApi) {
          const data = await JSON.parse(localStorage.getItem("previewPost"));

          setData(data);
          return;
        }
        // const data =await getDraftsPostId(params.editDraftsId);
        const data = await JSON.parse(localStorage.getItem("backend"));

        setPost(data);
        setData(data);

        setDataApi(localStorage.setItem("dataApi", true));

        post?.links?.map(({ name, url }) => {
          if (name?.length === 0 || url?.length === 0) {
            setLinks(data.links);
          }
        });
      } catch (error) {
        ToastError(error?.response?.statusText || error.message);
      }
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("previewPost", JSON.stringify(post));
  }, [post]);

  useEffect(() => {
    post.links = links;
    // localStorage.setItem("previewPost", JSON.stringify(post));
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
    localStorage.removeItem("dataApi");
    navigate("/main");
    setIsModal((prev) => !prev);
  };

  const createPostDrafts = async () => {
    try {
      // const data = await patchDraftsPostId(params.editDraftsId, post)
      localStorage.setItem("backend", JSON.stringify(post));

      localStorage.removeItem("previewPost");
      localStorage.removeItem("filterCategory");
      localStorage.removeItem("dataApi");
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
        <GoBackButton to="" imgWidth="50px" imgHeight="50px" imgAlt="Go back" />
        <p className={`${css.title_back} dark:text-white`}>New advertisement</p>
      </div>
      <form onSubmit={handleSubmitPost}>
        {data?.length !== 0 && (
          <CreatePost
            post={post}
            setPost={setPost}
            links={links}
            setLinks={setLinks}
          />
        )}
        <div className={css.btn_container}>
          <NavLink to="/main/addPost/previewAdvertisemet">
            <button type="button" className={css.btn_preview_container}>
              <span className={`${css.btn_preview} dark:text-white`}>
                Preview
              </span>
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
      {isModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          confirm={createPostDrafts}
          cancel={cancelAddPost}
          title="Save a draft?"
          description="You can come back to edit later."
        ></Modal>
      )}
      {postSuccessfullyAdded && <MessagePostOnModeration />}
    </>
  );
};

export default EditDraftsPage;
