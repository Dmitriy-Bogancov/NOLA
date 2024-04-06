import { useEffect, useState } from "react";
import { useCustomContext } from "../../services/Context/Context";
import { Modal } from "../../components/Modal/Modal";
import { NavLink } from "react-router-dom";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastContainer } from "react-toastify";
import { PostsAdverticer } from "../../components/PostsAdverticer/PostsAdverticer";

import css from "./AdverticeArchivePage.module.css";
import { PostsAdverticerMenu } from "../../components/PostsAdverticerMenu/PostsAdverticerMenu";
import { deletePostApi, getAllPostApi } from "../../services/https/https";


const AdverticeArchivePage = () => {
  const { token, setToken } = useCustomContext();
  const [post, setPost] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isActive, setIsActive] = useState({
    recovere: false,
    deleted: false,
  });

  const [postActiveId, setPostActiveId] = useState("");
  const [showPost, setShowPost] = useState(false);

  useEffect(() => {
    const getData = (async () => {
      try {
        //  await getAllAdverticerPostApi.status || getAccountApi.status
        const { data } = await getAllPostApi(token);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token]);


  const handleToggleModal = (message) => {
    setIsModal((prev) => !prev);
    setIsMessage(message);
  };

  const handleDeletePostMessage = () => {
    handleToggleModal("Are you sure you want to delete?");
    setIsActive({ recovere: false, deleted: true });
  };

  const handleRecoverePostMessage = () => {
    handleToggleModal("Are you sure you want to recovery?");
    setIsActive({ recovere: true, deleted: false });
  };

  const handleDeletePost = (id) => {
    setPost(post.filter((post) => post.id !== id));
    deletePostApi(token, id);
    handleToggleModal();
    Toastify("Archived post has been deleted");
  };

  const handleRecoverePost = (id) => {
    setPost(post.filter(() => post.id !== id));
    handleToggleModal();
    Toastify("Archived post has been recovered");
  };

  const postMenuActive = (id) => {
    setPostActiveId(id);
  };

  const handlePost = (id) => {
    setShowPost(post.filter((item) => item.id === id));
  };

  return (
    <div>
      <ToastContainer />
      <ul className={css.card}>
        {!showPost &&
          post?.map(({ id, title, description, banner }) => (
            <li key={id} className={css.post_container}>
              <img
                src={banner}
                alt=""
                className={css.img}
                onClick={() => handlePost(id)}
              />
              <h2 className={css.title}>{title}</h2>
              <PostsAdverticerMenu
                setShowMenuActive={false}
                postMenuActive={postMenuActive}
                id={id}
                handleRecoverePostMessage={handleRecoverePostMessage}
                handleDeletePostMessage={handleDeletePostMessage}
              />
            </li>
          ))}
      </ul>
      {isModal && (
        <Modal handleToggleModal={handleToggleModal} >
          {isActive.recovere && (
            <>
              <p>{isMessage}</p>
              <button
                type="button"
                onClick={() => handleRecoverePost(postActiveId)}
              >
                Yes
              </button>
            </>
          )}

          {isActive.deleted && (
            <>
              <p>{isMessage}</p>
              <button
                type="button"
                onClick={() => handleDeletePost(postActiveId)}
              >
                Yes
              </button>
            </>
          )}

          <button type="button" onClick={handleToggleModal}>
            No
          </button>
        </Modal>
      )}
      <ul className={css.list}>
        {showPost &&
          showPost?.map(({ id, title, description, banner }) => (
            <li key={id}>
              <PostsAdverticer
                id={id}
                name={title}
                banner={banner}
                description={description}
                setShowPost={setShowPost}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AdverticeArchivePage;
