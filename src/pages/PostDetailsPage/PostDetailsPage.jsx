import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import css from "./PostDetailsPage.module.css";
import { ReactComponent as Icon_Back } from "../../assets/icons/arrow_left.svg";
import { useEffect, useRef, useState } from "react";
import { getPostIdApi } from "../../services/https/https";
import { ToastError } from "../../services/ToastError/ToastError";
import { ToastContainer } from "react-toastify";
import { useCustomContext } from "../../services/Context/Context";
import { LoaderSpiner } from "../../services/loaderSpinner/LoaderSpinner";

const PostDetailsPage = () => {
  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? "/main");
  const navigate = useNavigate();
  const { postsId, setPostsId } = useCustomContext();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = (async () => {
      try {
        const { data } = await getPostIdApi(postId);
        // data.advertiserId
        setPost(data);
        console.log(data);
      } catch (error) {
        ToastError("Error");
      } finally {
        setLoading(false);
      }
    })();
  }, [postId]);

  const handleBack = () => {
    if (locationRef.current) return;
    navigate(-1);

    setPostsId(post?.id);
  };

  useEffect(() => {
    setPostsId(post?.id);
  }, [post?.id, setPostsId]);

  return (
    <div>
      <ToastContainer />

      <h1>PostDetailsPage</h1>

      <NavLink
        to={locationRef.current}
        onClick={handleBack}
        // className={theme === "dark" ? css.iconDark : ""}
      >
        <Icon_Back />
      </NavLink>
      {loading && (
        <div className="loader">
          <LoaderSpiner />
        </div>
      )}
      {post && (
        <div key={post.id}>
          <NavLink
          // to={`/${post.id}`}
          >
            Advertiser Header {`${postId}`}
          </NavLink>

          <p>{`${post.title}`}</p>

          <NavLink to="/:advertiserId" className={css.link}>
            Site/Profile
          </NavLink>

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
