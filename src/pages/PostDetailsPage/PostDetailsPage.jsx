import { NavLink, useParams } from "react-router-dom";
import css from "./PostDetailsPage.module.css";
import { useEffect, useState } from "react";
import { getPostIdApi } from "../../services/https/https";
import { ToastError } from "../../services/ToastError/ToastError";
import { ToastContainer } from "react-toastify";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = (async () => {
      try {
        const { data } = await getPostIdApi(postId);
        setPost(data);
        console.log(data);
      } catch (error) {
        ToastError("Error");
      }
    })();
  }, [postId]);

  return (
    <div>
      <ToastContainer />
      <h1>PostDetailsPage</h1>
      {post && (
        <div key={post.id}>
          <NavLink to={`/${post.id}`}>Advertiser Header {`${postId}`}</NavLink>

          <p>{`${post.title}`}</p>

          <a href="/" className={css.link}>
            Site/Profile
          </a>

          <p>Description</p>

          <img src="" alt="" className={css.img} />

          <ul>
            <li>
              <a href="/">LINK</a>
            </li>
            <li>
              <a href="/">LINK</a>
            </li>
            <li>
              <a href="/">LINK</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostDetailsPage;
