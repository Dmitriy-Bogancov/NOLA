import { NavLink, useLocation } from "react-router-dom";
import css from "./SavedPostsPage.module.css";
import { ReactComponent as Save_Icon } from "../../assets/icons/saved_icon.svg";
import { useState } from "react";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastContainer } from "react-toastify";
import { Modal } from "../../components/Modal/Modal";
import { useCustomContext } from "../../services/Context/Context";

const LOKAL_KEY = "savedPost";

const SavedPostsPage = () => {
  const location = useLocation();
  const { theme, setTheme } = useCustomContext();
  const [isModal, setIsModal] = useState(false);
  const [isDeletePost, setDeletePost] = useState("");
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOKAL_KEY));
  });

  const [savedPostId, setSavedPostId] = useState(() => {
    return JSON.parse(localStorage.getItem("savedPostId")) ?? [];
  });

  const handleToggleModal = (message) => {
    setDeletePost(message);
    setIsModal((prev) => !prev);
  };

  const handleDeletePost = (postId) => {
    const savedPost = posts.filter((post) => post.id !== postId);

    const deleteostId = posts.filter((post) => post.id === postId);
    const [deleteId] = deleteostId.map(({ id }) => id);
    const deletePostId = savedPostId.filter((el) => el !== deleteId);

    setPosts(savedPost);
    setSavedPostId(deletePostId);

    localStorage.setItem("savedPostId", JSON.stringify(deletePostId));
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
              <NavLink to={`/main/${post.id}`} state={{ from: location }}>
                <img src={post.banners} alt="" className={css.img} />
              </NavLink>
              <div className={css.item_footer}>
                <NavLink to="/:advertiserId" className={css.item_footer}>
                  <div>
                    <img src="" alt="" className={css.logo_icon} />
                  </div>

                  <p className={`${css.item_description} dark:text-white`}>
                    {post.title}
                  </p>
                </NavLink>
                <button
                  type="button"
                  className={`${css.item_btn} ${
                    theme === "dark" ? css.iconDark : ""
                  }`}
                  onClick={
                    () => handleToggleModal(post.id)
                    // onClick={() => handleDeletePost(post.id)
                  }
                >
                  <Save_Icon />
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
        <Modal
          handleToggleModal={handleToggleModal}
          title="Are you sure you want to delete?"
          confirm={() => handleDeletePost(isDeletePost)}
          cancel={handleToggleModal}
        />
      )}
    </div>
  );
};

export default SavedPostsPage;
