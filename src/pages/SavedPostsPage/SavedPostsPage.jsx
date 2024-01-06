import { NavLink } from "react-router-dom";
import css from "./SavedPostsPage.module.css";
import { useState } from "react";

const LOKAL_KEY = "savedPost";

const SavedPostsPage = () => {
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOKAL_KEY));
  });

  const handleDeletePost = (postId) => {
    const savedPost = posts.filter((post) => post.id !== postId);

    setPosts(savedPost);

    localStorage.setItem(LOKAL_KEY, JSON.stringify(savedPost));
  };

  return (
    <div>
      <h2>Saved Posts</h2>

      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <NavLink to={`/main/${post.id}`}>
                <img src="" alt="" className={css.img} />
                <p>{post.advertiser}</p>
              </NavLink>
              <button type="button" onClick={() => handleDeletePost(post.id)}>
                DELETE
              </button>
            </div>
          ))
        ) : (
          <p>No post</p>
        )}
      </div>
    </div>
  );
};

export default SavedPostsPage;
