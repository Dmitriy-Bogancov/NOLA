import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { postPostApi } from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";
import { Modal } from "../../components/Modal/Modal";

const AddPostPage = () => {
  const location = useLocation();

  const { token, setToken } = useCustomContext();
  const [post, setPost] = useState({
    name: "",
    textarea: "",
  });
  const [isModal, setIsModal] = useState(false);

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  const handleChangePost = ({ target }) => {
    const { name, value } = target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    try {
      // await postPostApi(token, post);
      handleToggleModal();
    } catch (error) {
      console.log(error);
    }

    setPost({ name: "", textarea: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmitPost}>
        <NavLink to="/main/accountAdverticer">
          <button type="button">Add Bunner</button>
        </NavLink>

        <input
          type="text"
          name="name"
          value={post.name}
          onChange={handleChangePost}
        />
        <textarea
          name="textarea"
          cols="30"
          rows="10"
          value={post.textarea}
          onChange={handleChangePost}
        ></textarea>
        <div>
          <ul>
            <li>
              <NavLink
                to="/main/accountAdverticer/adverticerEdit/links/addLinks"
                state={location}
              >
                Link
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/main/accountAdverticer/adverticerEdit/links/addLinks"
                state={location}
              >
                Link
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/main/accountAdverticer/adverticerEdit/links/addLinks"
                state={location}
              >
                Link
              </NavLink>
            </li>
          </ul>

          <NavLink to="previewAdvertisemet">
            <button>Preview</button>
          </NavLink>
          <button>Confirm </button>
        </div>
      </form>
      <NavLink to="/main">
        <button type="button">Cancel </button>
      </NavLink>

      {isModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          navigatePage={"/main/accountAdverticer"}
        >
          <p>Sucsessfull add a new advertisement</p>
        </Modal>
      )}
    </div>
  );
};

export default AddPostPage;
