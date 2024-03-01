import { useEffect, useState } from "react";
import {
  deletePostApi,
  getAllAdverticerPostApi,
} from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";
import { NavLink } from "react-router-dom";

const AdverticerPublicationsPage = () => {
  const { token, setToken } = useCustomContext();
  const [post, setPost] = useState([]);
  const [deletePost, setDeletePost] = useState(false);

  useEffect(() => {
    const getData = (async () => {
      try {
        await getAllAdverticerPostApi(token)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setPost(data);
            setDeletePost(false);
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token, deletePost]);

  const handleDeletePost = (id) => {
    setPost(post.filter(() => post.id !== id));
    setDeletePost(true);
    deletePostApi(token, id);
  };

  return (
    <div>
      AdverticerPublications
      {post?.map(({ id, name, textarea }) => (
        <div key={id} style={{ margin: "80px" }}>
          <h2>{name}</h2>
          <p>{textarea}</p>
          <NavLink to={`/main/addPost/${id}`}>
            <button>Edit</button>
          </NavLink>
          <button onClick={() => handleDeletePost(id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default AdverticerPublicationsPage;
