import PropTypes from "prop-types";
import css from "./PostsAdverticerMenu.module.css";
import { NavLink } from "react-router-dom";


export const PostsAdverticerMenu = ({
  setShowMenuActive = true,
  getPost,
  id,
  isPostStopped,
  postMenuActive,
  handlePostArchivationMessage,
  handlePostStoppingMessage,
    handlePostLaunchAgainMessage,
  
    handleRecoverePostMessage,
    handleDeletePostMessage,
}) => {

  return (
    <>
      <div className={css.post_menu}>
        <p>213</p>
        <p>7</p>

        <div
          className={`${css.container_menu} `}
          onClick={() => postMenuActive(id)}
        >
          ***
          {setShowMenuActive && (
            <div className={`${css.select} `}>
              <NavLink to={`/main/addPost/${id}`}>
                <button>Edit</button>
              </NavLink>
              <p>
                <button type="button" onClick={handlePostArchivationMessage}>
                  Archivation
                </button>
              </p>
              <p>
                <button
                  type="button"
                  disabled={isPostStopped}
                  onClick={handlePostStoppingMessage}
                >
                  Stopping
                </button>
              </p>

              <p>
                <button
                  type="button"
                  disabled={!isPostStopped}
                  onClick={handlePostLaunchAgainMessage}
                >
                  To launch post again
                </button>
              </p>
            </div>
          )}
                  
                  
          {!setShowMenuActive && (
            <>
              <div className={`${css.select} `}>
                <NavLink to={`/main/addPost/${id}`}>
                  <button>Edit</button>
                </NavLink>
                <p>
                  <button
                   onClick={handleRecoverePostMessage}
                  >
                    Recovere post
                  </button>
                </p>
                <p>
                  <button
                   onClick={handleDeletePostMessage}
                  >
                    Delete
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

PostsAdverticerMenu.propTypes = {
  setShowMenuActive: PropTypes.bool,
  getPost: PropTypes.array,
  id: PropTypes.string,
  postMenuActive: PropTypes.func,
  handlePostArchivationMessage: PropTypes.func,
  handlePostStoppingMessage: PropTypes.func,
  handlePostLaunchAgainMessage: PropTypes.func,
    isPostStopped: PropTypes.bool,
    handleDeletePostMessage: PropTypes.func,
    handleRecoverePostMessage: PropTypes.func,
  
};
