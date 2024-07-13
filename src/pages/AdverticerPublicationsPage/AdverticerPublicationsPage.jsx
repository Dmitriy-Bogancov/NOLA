import { useEffect, useRef, useState } from "react";
import {
  getAllAdverticerPostApi,
  getAllPostApi,
} from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";
import { NavLink } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toastify } from "../../services/Toastify/Toastify";
import { PostsAdverticer } from "../../components/PostsAdverticer/PostsAdverticer";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import css from "./AdverticerPublicationsPage.module.css";
import { PostsAdverticerMenu } from "../../components/PostsAdverticerMenu/PostsAdverticerMenu";
import { LoaderSpiner } from "../../services/loaderSpinner/LoaderSpinner";

const AdverticerPublicationsPage = () => {
  const { token, setToken } = useCustomContext();
  const [post, setPost] = useState([]);
  const [deletePost, setDeletePost] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isActive, setIsActive] = useState({
    archived: false,
    stopped: false,
    deleted: false,
    launchAgain: false,
  });
  const [menuActive, setMenuActive] = useState(false);

  const [isPostStopped, setIsPostStopped] = useState(false);

  const [showPost, setShowPost] = useState(false);
  const [postActiveId, setPostActiveId] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = (async () => {
      try {
        //  await getAllAdverticerPostApi || getAccountApi
        const { data } = await getAllPostApi(token);
        setPost(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);

  const handleBack = () => {
    setShowPost(false);
  };

  const handleToggleModal = (message) => {
    setIsModal((prev) => !prev);
    setIsMessage(message);
  };

  const handlePostArchivationMessage = () => {
    handleToggleModal("Are you sure you want to archive?");
    setIsActive({
      archived: true,
      stopped: false,
      deleted: false,
      launchAgain: false,
    });
  };

  const handlePostStoppingMessage = () => {
    handleToggleModal("Are you sure you want to stop?");
    setIsActive({
      archived: false,
      stopped: true,
      deleted: false,
      launchAgain: false,
    });
  };

  const handlePostLaunchAgainMessage = () => {
    handleToggleModal("Are you sure you want to launch aagin?");
    setIsActive({
      archived: false,
      stopped: false,
      deleted: false,
      launchAgain: true,
    });
  };

  const handlePostArchivation = (id) => {
    setPost(post.filter((item) => item.id !== id));
    handleToggleModal();
    Toastify("Curent post has been archived!");
  };

  const handlePostStopping = (id) => {
    setPost(post.filter((item) => item.id === id));
    handleToggleModal();
    setIsPostStopped(true);
    Toastify("Current post stopping!");
  };

  const handlePostLaunchAgain = (id) => {
    setPost(post.filter((item) => item.id === id));
    handleToggleModal();
    setIsPostStopped(false);
    Toastify("Post has been launched");
  };
  const postMenuActive = (id) => {
    setMenuActive((prev) => !prev);
    setPostActiveId(id);
  };

  const handlePost = (id) => {
    setShowPost(post.filter((item) => item.id === id));
  };

  return (
    <div className={css.container}>
      {console.log(post)}
      <ToastContainer />
      {loading && (
        <div className="loader">
          <LoaderSpiner />
        </div>
      )}
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
                getPost={post}
                id={id}
                menuActive={menuActive}
                postMenuActive={postMenuActive}
                handlePostArchivationMessage={handlePostArchivationMessage}
                handlePostStoppingMessage={handlePostStoppingMessage}
                handlePostLaunchAgainMessage={handlePostLaunchAgainMessage}
                isPostStopped={isPostStopped}
              />
            </li>
          ))}

        {isModal && (
          <Modal handleToggleModal={handleToggleModal} childrenEl="true">
            {isActive.archived && (
              <>
                <p className={css.modal_title}>{isMessage}</p>
                <button
                  type="button"
                  className={css.modal_btn}
                  onClick={() => handlePostArchivation(postActiveId)}
                >
                  Confirm
                </button>
              </>
            )}

            {isActive.stopped && (
              <>
                <p className={css.modal_title}>{isMessage}</p>
                <button
                  type="button"
                  className={css.modal_btn}
                  onClick={() => handlePostStopping(postActiveId)}
                >
                  Confirm
                </button>
              </>
            )}

            {isActive.launchAgain && (
              <>
                <p className={css.modal_title}>{isMessage}</p>
                <button
                  type="button"
                  className={css.modal_btn}
                  onClick={() => handlePostLaunchAgain(postActiveId)}
                >
                  Confirm
                </button>
              </>
            )}

            <p
              className={`${css.modal_text} dark:text-white`}
              onClick={handleToggleModal}
            >
              Cancel
            </p>
          </Modal>
        )}
      </ul>

      <ul>
        {showPost &&
          showPost?.map(({ id, title, description, banners, links }) => (
            <li key={id}>
              <div className={css.top_container}>
                <GoBackButton
                  imgAlt="Go back"
                  imgWidth="50px"
                  imgHeight="50px"
                  onClick={handleBack}
                  // title="Return to the feed"
                />

                <p className={css.return}>Return to the feed</p>
              </div>
              <img src={banners} alt="" className={css.img} />
              <PostsAdverticer
                data={post}
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

export default AdverticerPublicationsPage;
