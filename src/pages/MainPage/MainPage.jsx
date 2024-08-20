import css from "./MainPage.module.css";
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
  const [isScrollTop, setIsScrollTop] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [posts, setPost] = useState(() => {
    return JSON.parse(localStorage.getItem(LOKAL_KEY)) ?? [];
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [savedPostId, setSavedPostId] = useState(() => {
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

  useEffect(() => {
    localStorage.setItem("savedPostId", JSON.stringify(savedPostId));
  }, [savedPostId]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleSavePost = (savedId) => {
    const savedPost = data.filter(({ id }) => id === savedId);
    const savedValid = posts?.find((post) => post.id === savedId);

    if (!savedValid) {
      setSavedPostId((prev) => {
        if (prev.includes(savedId) && !savedValid) {
          return prev.filter((postId) => postId !== savedId);
        } else {
          localStorage.setItem(
            "savedPostId",
            JSON.stringify([...prev, savedId])
          );
          return [...prev, savedId];
        }
      });
    }

    if (posts) {
      // const savedValid = posts.find((post) => post.id === savedId);

      if (savedValid) {
        const deletePost = posts.filter((post) => post.id !== savedValid.id);

        const deletePostId = savedPostId.filter((el) => el !== savedValid.id);

        setPost(deletePost);

        setSavedPostId(deletePostId);
        ToastError("Post has been deleted");
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
    <div className={css.main_container}>
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
        } ${isScrollTop ? css.logo_container_active : ""} ${
          isScrollTop && theme === "dark" ? css.logo_container_active_dark : ""
        }`}
      >
        <p className={css.logo}>NOLA</p>
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
            savedPost={savedPostId}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
