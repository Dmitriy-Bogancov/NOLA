import { NavLink } from "react-router-dom";
import css from "./MainPage.module.css";
import { useEffect, useState } from "react";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastError } from "../../services/ToastError/ToastError";
import { ToastContainer } from "react-toastify";
import { Posts } from "../../components/Posts/Posts";
import { getAllPostApi } from "../../services/https/https";

const LOKAL_KEY = "savedPost";

const MainPage = () => {
  const [posts, setPost] = useState(() => {
    return JSON.parse(localStorage.getItem(LOKAL_KEY)) ?? "";
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = (async () => {
      try {
        const { data } = await getAllPostApi();
        console.log(data);
        setData(data);
      } catch (error) {
        ToastError("Error! Try later");
      }
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOKAL_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleSavePost = (savedId) => {
    const savedPost = data.filter(({ id }) => id === savedId);
    if (posts) {
      const savedValid = posts.find((post) => post.id === savedId);
      if (savedValid) {
        ToastError("This post has already been saved");
        return;
      }
      Toastify("Post successfully saved");
    }

    setPost((prev) => [...prev, ...savedPost]);
  };

  useEffect(() => {
    localStorage.removeItem("pathname");
  }, []);

  const handleSetting = () => {
    localStorage.setItem("pathname", "/main");
  };

  return (
    <div>
      <ToastContainer />
      <NavLink to="setting" >
        <button type="button" onClick={handleSetting}>Setting</button>
      </NavLink>

      <ul>
        {data.map(({ id, url, title }) => (
          <Posts
            key={id}
            data={data}
            url={url}
            title={title}
            id={id}
            handleSavePost={handleSavePost}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainPage;