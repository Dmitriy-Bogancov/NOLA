import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import AddPostPage from "../AddPostPage/AddPostPage";
import { getPostApi, patchPostApi } from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";

const EditPostPage = () => {
  const location = useLocation();
  const { token, setToken } = useCustomContext();
  const params = useParams();
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
          return data;
        });
    } catch (error) {
      console.log(error);
    }
    return;
  };

  return (
    <div>
      EditPostPage
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

            <button>Confirm </button>
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
