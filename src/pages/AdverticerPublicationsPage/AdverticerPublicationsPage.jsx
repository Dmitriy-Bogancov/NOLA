import { useEffect, useState } from "react";
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

  const [isPostStopped, setIsPostStopped] = useState(false);

  const [showPost, setShowPost] = useState(false);
  const [postActiveId, setPostActiveId] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const getData = (async () => {
      try {
        //  await getAllAdverticerPostApi || getAccountApi
        const { data } = await getAllPostApi(token);
        setPost(data);
      } catch (error) {
        console.log(error);
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
    setPostActiveId(id);
  };

  const handlePost = (id) => {
    setShowPost(post.filter((item) => item.id === id));
  };

  return (
    <div className={css.container}>
      {console.log(post)}
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
                getPost={post}
                id={id}
                postMenuActive={postMenuActive}
                handlePostArchivationMessage={handlePostArchivationMessage}
                handlePostStoppingMessage={handlePostStoppingMessage}
                handlePostLaunchAgainMessage={handlePostLaunchAgainMessage}
                isPostStopped={isPostStopped}
              />
            </li>
          ))}

        {isModal && (
          <Modal handleToggleModal={handleToggleModal}>
            {isActive.archived && (
              <>
                <p>{isMessage}</p>
                <button
                  type="button"
                  onClick={() => handlePostArchivation(postActiveId)}
                >
                  Yes
                </button>
              </>
            )}

            {isActive.stopped && (
              <>
                <p>{isMessage}</p>
                <button
                  type="button"
                  onClick={() => handlePostStopping(postActiveId)}
                >
                  Yes
                </button>
              </>
            )}

            {isActive.launchAgain && (
              <>
                <p>{isMessage}</p>
                <button
                  type="button"
                  onClick={() => handlePostLaunchAgain(postActiveId)}
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
      </ul>

      <ul>
        {showPost &&
          showPost?.map(({ id, title, description, banner }) => (
            <li key={id}>
                                 <div className={css.top_container}>
          <GoBackButton
            imgAlt="Go back"
            imgWidth="50px"
            imgHeight="50px"
            onClick={handleBack}
  
          />
  
          <p className={css.return}>Return to the feed</p>
              </div>
               <img src={banner} alt="" className={css.img} />
              <PostsAdverticer
                id={id}
                name={title}
                description={description}
                banner={banner}
                setShowPost={setShowPost}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AdverticerPublicationsPage;
