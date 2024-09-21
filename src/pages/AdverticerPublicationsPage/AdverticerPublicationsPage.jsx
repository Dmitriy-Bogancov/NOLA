import { useEffect, useRef, useState } from "react";
import {
  getAllAdverticerPostApi,
  getAllPostApi,
} from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";
import { Link, NavLink } from "react-router-dom";
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

import editPost from "../../assets/icons/edit_post.svg";
import pausePost from "../../assets/icons/pause_post.svg";
import relaunchPost from "../../assets/icons/relaunch_post.svg";
import archivePost from "../../assets/icons/archive_post.svg";
import { ReactComponent as Icon_Edit_Post } from "../../assets/icons/edit_post.svg";

const AdverticerPublicationsPage = () => {
  const { token, setToken } = useCustomContext();
  const { theme, setTheme } = useCustomContext();
  const [post, setPost] = useState([]);
  const [menuList, setMenuList] = useState(false);

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

  const [isPostStopped, setIsPostStopped] = useState("");

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
    setMenuList(false);
    setIsMessage(message);
  };

  const handlePostArchivationMessage = () => {
    handleToggleModal("Are you sure you want to archive the post?");
    setIsActive({
      archived: true,
      stopped: false,
      deleted: false,
      launchAgain: false,
    });
  };

  const handlePostStoppingMessage = () => {
    handleToggleModal("Are you sure you want to pause the post?");
    setIsActive({
      archived: false,
      stopped: true,
      deleted: false,
      launchAgain: false,
    });
  };

  const handlePostLaunchAgainMessage = () => {
    handleToggleModal("Are you sure you want to relaunch the post?");
    setIsActive({
      archived: false,
      stopped: false,
      deleted: false,
      launchAgain: true,
    });
  };

  const handlePostArchivation = (id) => {
    console.log("handlePostArchivation", id);

    setPost(post.filter((item) => item.id !== id));
    handleToggleModal();
    Toastify("Curent post has been archived!");
  };

  const handlePostStopping = (id) => {
    console.log(" handlePostStopping", id);
    // const stoppedPost = post.filter((item) => item.id === id)
    // setPost(post.filter((item) => item.id === id));
    handleToggleModal();
    setIsPostStopped(id);
    // setIsPostStopped(true);
    Toastify("Current post stopping!");
  };

  const handlePostLaunchAgain = (id) => {
    console.log("handlePostLaunchAgain", id);

    // setPost(post.filter((item) => item.id === id));
    handleToggleModal();
    // setIsPostStopped(false);
    setIsPostStopped("");
    Toastify("Post has been launched");
  };
  const postMenuActive = (id) => {
    setMenuActive((prev) => !prev);
    setPostActiveId(id);
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
                className={`${css.img}  ${
                  isPostStopped === id ? css.stoppedPost : ""
                }`}
              />
              <h2 className={css.title}>{title}</h2>

              <PostsAdverticerMenu
                id={id}
                postMenuActive={postMenuActive}
                menuList={menuList}
                setMenuList={setMenuList}
                isModal={isModal}
              >
                <ul className={css.list}>
                  <li>
                    <Link
                      to={`/main/addPost/${id}`}
                      className={`${css.item}  ${
                        theme === "dark" ? css.iconDark : ""
                      }`}
                    >
                      <Icon_Edit_Post />
                      {/* <img src={editPost} alt="edit post" /> */}
                      <span className={`${css.list_title} dark:text-white`}>
                        Edit the post
                      </span>
                    </Link>
                  </li>

                  {!isActive.stopped ? (
                    <li
                      className={`${css.item} `}
                      onClick={handlePostStoppingMessage}
                    >
                      <img src={pausePost} alt="pause post" />
                      <p className={css.list_title}>Pause the post</p>
                    </li>
                  ) : (
                    <li
                      className={css.item}
                      onClick={handlePostLaunchAgainMessage}
                    >
                      <img src={relaunchPost} alt="relaunch post" />
                      <p className={css.list_title}>Relaunch the post</p>
                    </li>
                  )}

                  <li
                    className={css.item}
                    onClick={handlePostArchivationMessage}
                  >
                    <img src={archivePost} alt="archive post" />
                    <p className={css.list_title}>Archive the post</p>
                  </li>
                </ul>
              </PostsAdverticerMenu>
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
