import { useState } from "react";
import { useCustomContext } from "../../services/Context/Context";
import { Modal } from "../../components/Modal/Modal";
import { NavLink } from "react-router-dom";

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
    handleToggleModal("Сurrent post is deleted");
    setIsActive({ recovere: false, deleted: true });
  };

  const handleRecoverePostMessage = () => {
    handleToggleModal("Сurrent post is recoveres");
    setIsActive({ recovere: true, deleted: false });
  };

  const handleDeletePost = (id) => {
    setPost(post.filter(() => post.id !== id));
    setDeletePost(true);
    // deletePostApi(token, id);
    handleToggleModal();
  };

  const handleRecoverePost = (id) => {
    setPost(post.filter(() => post.id !== id));
    handleToggleModal();
  };

  return (
    <div>
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
                    ok
                  </button>
                </>
              )}

              {isActive.deleted && (
                <>
                  <p>{isMessage}</p>
                  <button type="button" onClick={() => handleDeletePost(id)}>
                    ok
                  </button>
                </>
              )}

              <button type="button" onClick={handleToggleModal}>
                cancel
              </button>
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdverticerSavedPage;
