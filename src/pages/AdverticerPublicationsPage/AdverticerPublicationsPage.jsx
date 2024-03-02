import { useEffect, useState } from "react";
import { getAllAdverticerPostApi } from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";
import { NavLink } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";

const getPost = [
  {
    id: 1,
    name: "Inna",
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
  });

  useEffect(() => {
    const getData = (async () => {
      try {
        // await getAllAdverticerPostApi(token)
        //   .then((response) => {
        //     return response.json();
        //   })
        //   .then((data) => {
        //     console.log(data);
        //     setPost(data);
        //     setDeletePost(false);
        //   });
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
    handleToggleModal("Current post archived");
    setIsActive({ archived: true, stopped: false, deleted: false });
  };

  const handlePostStoppingMessage = () => {
    handleToggleModal("Сurrent post is stopped");
    setIsActive({ archived: false, stopped: true, deleted: false });
  };

  const handlePostArchivation = (id) => {
    setPost(post.filter(() => post.id !== id));
    handleToggleModal();
  };

  const handlePostStopping = (id) => {
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
          <button onClick={handlePostArchivationMessage}>archivation</button>
          <button onClick={handlePostStoppingMessage}>stopping</button>

          {isModal && (
            <Modal handleToggleModal={handleToggleModal} feedback={true}>
              {isActive.archived && (
                <>
                  <p>{isMessage}</p>
                  <button
                    type="button"
                    onClick={() => handlePostArchivation(id)}
                  >
                    ok
                  </button>
                </>
              )}

              {isActive.stopped && (
                <>
                  <p>{isMessage}</p>
                  <button type="button" onClick={() => handlePostStopping(id)}>
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

export default AdverticerPublicationsPage;
