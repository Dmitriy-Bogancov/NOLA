import { NavLink } from "react-router-dom";
import css from "./SavedPosts.module.css";

const SavedPosts = () => {
  return (
    <div>
      <h2>Saved Posts</h2>

      <div>
        <NavLink to="/:advertiserId">
          <img src="" alt="" className={css.img} />
        </NavLink>
      </div>
    </div>
  );
};

export default SavedPosts;
