import css from "./MainPage.module.css";
import { ReactComponent as ArrowsUp } from "../../assets/icons/arrows-up.svg";
import { useEffect, useState } from "react";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastError } from "../../services/ToastError/ToastError";
import { ToastContainer } from "react-toastify";
import { Posts } from "../../components/Posts/Posts";
import { getAllPostApi } from "../../services/https/https";
import { LoaderSpiner } from "../../services/loaderSpinner/LoaderSpinner";
import { useCustomContext } from "../../services/Context/Context";

const LOKAL_KEY = "savedPost";

const MainPage = () => {
  const { theme, setTheme } = useCustomContext();
  const [posts, setPost] = useState(() => {
    return JSON.parse(localStorage.getItem(LOKAL_KEY)) ?? [];
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [savedPost, setSavedPost] = useState(() => {
    return JSON.parse(localStorage.getItem("savedPostId")) ?? [];
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = (async () => {
      try {
        const { data } = await getAllPostApi();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        ToastError("Error! Try later");
      }
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOKAL_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleSavePost = (savedId) => {
    const savedPost = data.filter(({ id }) => id === savedId);
    const savedValid = posts?.find((post) => post.id === savedId);

    setSavedPost((prev) => {
      if (prev.includes(savedId) && !savedValid) {
        return prev.filter((postId) => postId !== savedId);
      } else {
        localStorage.setItem("savedPostId", JSON.stringify([...prev, savedId]));
        return [...prev, savedId];
      }
    });

    if (posts) {
      // const savedValid = posts.find((post) => post.id === savedId);
      if (savedValid) {
        ToastError("This post has already been saved");
        return;
      }
      Toastify("Post successfully saved");
    }

    setPost((prev) => [...prev, ...savedPost]);
  };

  // useEffect(() => {
  //   localStorage.removeItem("pathname");
  // }, []);

  // const handleSetting = () => {
  //   localStorage.setItem("pathname", "/main");
  // };

  return (
    <div>
      <ToastContainer />
      {/* <NavLink
        // to="setting"
        to="/setting"
      >
        <button type="button" onClick={handleSetting}>
          Setting
        </button>
      </NavLink> */}

      <div
        className={`${css.logo_container} ${
          theme === "dark" ? css.iconDark : ""
        }`}
      >
        <p className={css.logo}>NOLA</p>
        <ArrowsUp />
      </div>
      {loading && (
        <div className="loader">
          <LoaderSpiner />
        </div>
      )}
      <ul>
        {data.map(({ id, title, banners }) => (
          <Posts
            key={id}
            data={data}
            url={banners}
            title={title}
            id={id}
            handleSavePost={handleSavePost}
            savedPost={savedPost}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
