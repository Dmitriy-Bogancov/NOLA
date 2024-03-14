import { useState } from "react";
import { useCustomContext } from "../../services/Context/Context";
import { Modal } from "../../components/Modal/Modal";
import { NavLink } from "react-router-dom";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastContainer } from "react-toastify";

const getPost = [
  {
    id: 1,
    name: "Inna",
    textarea:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum.",
  },
];

const AdverticerSavedPage = () => {
  const { token, setToken } = useCustomContext();
  const [post, setPost] = useState(getPost);
  const [deletePost, setDeletePost] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isActive, setIsActive] = useState({
    recovere: false,
    deleted: false,
  });

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
    setPost(post.filter(() => post.id !== id));
    setDeletePost(true);
    // deletePostApi(token, id);
    handleToggleModal();
    Toastify("Archived post has been deleted");
  };

  const handleRecoverePost = (id) => {
    setPost(post.filter(() => post.id !== id));
    handleToggleModal();
    Toastify("Archived post has been recovered");
  };

  return (
    <div>
      <ToastContainer />
      {post?.map(({ id, name, textarea }) => (
        <div key={id} style={{ margin: "80px" }}>
          <h2>{name}</h2>
          <p>{textarea}</p>

          <NavLink to={`/main/addPost/${id}`}>
            <button>Edit</button>
          </NavLink>
          <button onClick={handleRecoverePostMessage}>Recovere post</button>
          <button onClick={handleDeletePostMessage}>delete</button>

          {isModal && (
            <Modal handleToggleModal={handleToggleModal} feedback={true}>
              {isActive.recovere && (
                <>
                  <p>{isMessage}</p>
                  <button type="button" onClick={() => handleRecoverePost(id)}>
                    Yes
                  </button>
                </>
              )}

              {isActive.deleted && (
                <>
                  <p>{isMessage}</p>
                  <button type="button" onClick={() => handleDeletePost(id)}>
                    Yes
                  </button>
                </>
              )}

              <button type="button" onClick={handleToggleModal}>
                No
              </button>
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdverticerSavedPage;
