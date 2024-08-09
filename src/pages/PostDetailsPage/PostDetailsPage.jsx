import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import css from "./PostDetailsPage.module.css";
import { ReactComponent as Icon_Back } from "../../assets/icons/arrow_left.svg";
import { ReactComponent as Save_Icon } from "../../assets/icons/save.svg";
import { ReactComponent as SaveActive_Icon } from "../../assets/icons/saved_icon.svg";
import { useEffect, useRef, useState } from "react";
import { getPostIdApi } from "../../services/https/https";
import { ToastError } from "../../services/ToastError/ToastError";
import { ToastContainer } from "react-toastify";
import { useCustomContext } from "../../services/Context/Context";
import { LoaderSpiner } from "../../services/loaderSpinner/LoaderSpinner";
import { PostsAdverticer } from "../../components/PostsAdverticer/PostsAdverticer";
import { Toastify } from "../../services/Toastify/Toastify";

const LOKAL_KEY = "savedPost";

const PostDetailsPage = () => {
  const { theme, setTheme } = useCustomContext();
  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? "/main");
  const navigate = useNavigate();
  const { postsId, setPostsId } = useCustomContext();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const [savedPostId, setSavedPostId] = useState(() => {
    return JSON.parse(localStorage.getItem("savedPostId")) ?? [];
  });
  const [savedPost, setSavedPost] = useState(() => {
    return JSON.parse(localStorage.getItem(LOKAL_KEY)) ?? [];
  });

  useEffect(() => {
    localStorage.setItem(LOKAL_KEY, JSON.stringify(savedPost));
  }, [savedPost]);

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

  const handleSavePostClick = (savedId) => {
    if (savedPostId.includes(post.id)) {
      ToastError("This post has already been saved");
      return;
    }
    setSavedPostId((prev) => {
      if (prev.includes(savedId)) {
        return prev.filter((postId) => postId !== savedId);
      } else {
        localStorage.setItem("savedPostId", JSON.stringify([...prev, savedId]));
        setSavedPost((prev) => [...prev, post]);
        Toastify("Post successfully saved");
        return [...prev, savedId];
      }
    });
  };

  return (
    <div>
      <ToastContainer />

      <div className={css.top_container}>
        <NavLink
          to={locationRef.current}
          onClick={handleBack}
          className={`${css.back_arrow} ${
            theme === "dark" ? css.iconDark : ""
          }`}
        >
          <Icon_Back />
        </NavLink>
        <p className={css.return}>{post?.title}</p>
      </div>

      {loading && (
        <div className="loader">
          <LoaderSpiner />
        </div>
      )}

      {post && (
        <div key={post.id} className={css.post_container}>
          <img src={post.banners} alt="" className={css.img} />

          <PostsAdverticer
            title={post.title}
            description={post.description}
            links={post.links}
          />

          <button
            type="button"
            onClick={() => handleSavePostClick(post.id)}
            className={css.save_btn}
          >
            {savedPostId.includes(post.id) ? (
              <SaveActive_Icon />
            ) : (
              <Save_Icon />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default PostDetailsPage;
