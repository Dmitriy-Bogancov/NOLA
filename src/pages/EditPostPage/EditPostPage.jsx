import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import AddPostPage from "../AddPostPage/AddPostPage";
import { getPostApi, patchPostApi } from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";

import { ToastContainer, toast } from "react-toastify";
import { HandleFormConfig } from "../../components/HandleFormConfig/HandleFormConfig";
import { ToastError } from "../../services/ToastError/ToastError";

const EditPostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, setToken } = useCustomContext();
  const params = useParams();
  const [formConfig, setFormConfig] = useState(false);
  const [post, setPost] = useState({
    name: "",
    textarea: "",
  });

  useEffect(() => {
    const getData = (async () => {
      try {
        await getPostApi(token, params.editPostId)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setPost(...data);
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params, token]);

  const handleChangePost = ({ target }) => {
    const { name, value } = target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    setFormConfig(true); // delete later

    try {
      await patchPostApi(token, post.id, {
        name: post.name,
        textarea: post.textarea,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPost(data);
          // setFormConfig(true);
          return data;
        });
    } catch (error) {
      // ToastError(error.message)
    }
    return;
  };

  return (
    <div>
      EditPostPage
      <ToastContainer />
      {formConfig && (
        <HandleFormConfig
          message={"Current post has been edited"}
          navigatePage={"/main/accountAdverticer"}
        />
      )}
      <div>
        <form onSubmit={handleSubmitPost}>
          <NavLink to="">
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

            <button>Confirm</button>
          </div>
        </form>
        <NavLink to="/main/accountAdverticer">
          <button type="button">Cancel </button>
        </NavLink>
      </div>
    </div>
  );
};

export default EditPostPage;
