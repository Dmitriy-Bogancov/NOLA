import { NavLink } from "react-router-dom";
import css from "./SavedPostsPage.module.css";
import { useState } from "react";
import saved_icon from "../../assets/icons/saved_icon.svg";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastContainer } from "react-toastify";
import { Modal } from "../../components/Modal/Modal";

const LOKAL_KEY = "savedPost";

const SavedPostsPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [isDeletePost, setDeletePost] = useState("");
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOKAL_KEY));
  });

  const handleToggleModal = (message) => {
    setDeletePost(message);
    setIsModal((prev) => !prev);
  };

  const handleDeletePost = (postId) => {
    const savedPost = posts.filter((post) => post.id !== postId);

    setPosts(savedPost);

    localStorage.setItem(LOKAL_KEY, JSON.stringify(savedPost));

    Toastify("Post has been deleted");
    handleToggleModal();
  };

  return (
    <div>
      <ToastContainer />
      <h1 className={css.title}>My saved</h1>

      {posts?.length > 0 ? (
        <ul className={css.list}>
          {posts.map((post) => (
            <li key={post.id} className={css.item}>
              <NavLink to={`/main/${post.id}`}>
                <img src={post.url} alt="" className={css.img} />
              </NavLink>
              <div className={css.item_footer}>
                <div>
                  <img src="" alt="" className={css.logo_icon} />
                </div>

                <p className={`${css.item_description} dark:text-white`}>
                  {post.title}
                </p>

                <button
                  type="button"
                  className={css.item_btn}
                  onClick={
                    () => handleToggleModal(post.id)
                    // onClick={() => handleDeletePost(post.id)
                  }
                >
                  <img src={saved_icon} alt="saved_icon" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.container}>
          <h2 className={`${css.title_empty} dark:text-white`}>
            This list is empty
          </h2>
          <p className={`${css.description} dark:text-white`}>
            Add something you`ve liked from the main page
          </p>
        </div>
      )}

      {isModal && (
        <Modal handleToggleModal={handleToggleModal}>
          <>
            "Are you sure you want to delete?"
            <button type="button" onClick={handleToggleModal}>
              No
            </button>
            <button
              type="button"
              onClick={() => handleDeletePost(isDeletePost)}
            >
              Yes
            </button>
          </>
        </Modal>
      )}
    </div>
  );
};

export default SavedPostsPage;
