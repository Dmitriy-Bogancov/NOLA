import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastContainer } from "react-toastify";
import { PostsAdverticer } from "../../components/PostsAdverticer/PostsAdverticer";

import css from "./AdverticeArchivePage.module.css";
import { PostsAdverticerMenu } from "../../components/PostsAdverticerMenu/PostsAdverticerMenu";
import { deletePostApi, getAllPostApi } from "../../services/https/https";
import { ToastError } from "../../services/ToastError/ToastError";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";

const AdverticeArchivePage = () => {
  const [post, setPost] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isActive, setIsActive] = useState({
    recovere: false,
    deleted: false,
  });

  const [postActiveId, setPostActiveId] = useState("");
  const [showPost, setShowPost] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const getData = (async () => {
      try {
        //  await getAllAdverticerPostApi.status || getAccountApi.status
        const { data } = await getAllPostApi();
        setPost(data);
      } catch (error) {
        ToastError(error);
      }
    })();
  }, []);

  const handleBack = () => {
    setShowPost(false);
  };

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

  const handleDeletePost = async (id) => {
    try {
      await deletePostApi(id);
      Toastify("Archived post has been deleted");
      setPost(post.filter((post) => post.id !== id));
    } catch (error) {
      ToastError("Error! Try later");
    }

    handleToggleModal();
  };

  const handleRecoverePost = (id) => {
    setPost(post.filter(() => post.id !== id));
    handleToggleModal();
    Toastify("Archived post has been recovered");
  };

  const postMenuActive = (id) => {
    setMenuActive((prev) => !prev);
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
          post?.map(({ id, title, description, banners }) => (
            <li key={id} className={css.post_container}>
              <img
                src={banners}
                alt=""
                className={css.img}
                onClick={() => handlePost(id)}
              />
              <h2 className={css.title}>{title}</h2>
              <PostsAdverticerMenu
                menuActive={menuActive}
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
        <Modal handleToggleModal={handleToggleModal}>
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
          showPost?.map(({ id, title, description, banners, links }) => (
            <li key={id}>
              <div className={css.top_container}>
                <GoBackButton
                  imgSrc={back}
                  imgAlt="Go back"
                  imgWidth="50px"
                  imgHeight="50px"
                  onClick={handleBack}
                />

                <p className={css.return}>Return to the feed</p>
              </div>
              <img src={banners} alt="" className={css.img} />
              <PostsAdverticer
                id={id}
                title={title}
                description={description}
                links={links}
                banner={banners}
                setShowPost={setShowPost}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AdverticeArchivePage;
