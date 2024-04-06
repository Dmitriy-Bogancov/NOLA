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

import css from "./AdverticerPublicationsPage.module.css";
import { PostsAdverticerMenu } from "../../components/PostsAdverticerMenu/PostsAdverticerMenu";

const getPost = [
  {
    id: "1",
    url: "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
    name: "Post 1",
    textarea:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum.",
  },

  {
    id: "3",
    url: "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
    name: "Post 3",
    textarea:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum.",
  },

  {
    id: "2",
    url: "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
    name: "Post 2",
    textarea:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum.",
  },
];

const AdverticerPublicationsPage = () => {
  const { token, setToken } = useCustomContext();
  const [post, setPost] = useState(getPost);
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
        // await getAllAdverticerPostApi(token)
        // .then((response) => {
        //   return response.json();
        // })
        // .then((data) => {
        //   console.log(data);
        //   setPost(data);
        //   setDeletePost(false);
        // });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token, deletePost]);

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
          post?.map(({ id, name, textarea, banner }) => (
            <li key={id} className={css.post_container}>
              <img
                src={banner}
                alt=""
                className={css.img}
                onClick={() => handlePost(id)}
              />
              <h2>{name}</h2>

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
          showPost?.map(({ id, name, banner }) => (
            <li key={id}>
              <PostsAdverticer
                id={id}
                name={name}
                url={banner}
                setShowPost={setShowPost}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AdverticerPublicationsPage;
