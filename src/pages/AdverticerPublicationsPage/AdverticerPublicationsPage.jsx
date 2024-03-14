import { useEffect, useState } from "react";
import { getAllAdverticerPostApi } from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";
import { NavLink } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toastify } from "../../services/Toastify/Toastify";

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
    launchAgain: false,
  });

  const [isPostStopped, setIsPostStopped] = useState(false);

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
    setPost(post.filter(() => post.id !== id));
    handleToggleModal();
    Toastify("Curent post has been archived!");
  };

  const handlePostStopping = (id) => {
    setPost(post.filter(() => post.id !== id));
    handleToggleModal();
    setIsPostStopped(true);
    Toastify("Current post stopping!");
  };

  const handlePostLaunchAgain = (id) => {
    setPost(post.filter(() => post.id !== id));
    handleToggleModal();
    setIsPostStopped(false);
    Toastify("Post has been launched");
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
          <button type="button" onClick={handlePostArchivationMessage}>
            archivation
          </button>
          <button
            type="button"
            disabled={isPostStopped}
            onClick={handlePostStoppingMessage}
          >
            stopping
          </button>
          <button
            type="button"
            disabled={!isPostStopped}
            onClick={handlePostLaunchAgainMessage}
          >
            to launch post again?
          </button>

          {isModal && (
            <Modal handleToggleModal={handleToggleModal} feedback={true}>
              {isActive.archived && (
                <>
                  <p>{isMessage}</p>
                  <button
                    type="button"
                    onClick={() => handlePostArchivation(id)}
                  >
                    Yes
                  </button>
                </>
              )}

              {isActive.stopped && (
                <>
                  <p>{isMessage}</p>
                  <button type="button" onClick={() => handlePostStopping(id)}>
                    Yes
                  </button>
                </>
              )}

              {isActive.launchAgain && (
                <>
                  <p>{isMessage}</p>
                  <button
                    type="button"
                    onClick={() => handlePostLaunchAgain(id)}
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
        </div>
      ))}
    </div>
  );
};

export default AdverticerPublicationsPage;
