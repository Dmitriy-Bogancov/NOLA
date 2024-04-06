import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

import css from "./Posts.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { average, prominent } from "color.js";

const LOKAL_KEY = "savedPost";

export const Posts = ({ id, url, title, handleSavePost }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [getColor, setGetColor] = useState("");
   const [getBackColor, setGetBackColor] = useState("");

  useEffect(() => {
    prominent(url, { format: "hex" })
    .then(color => {
      setGetColor(color[2]) 
      setGetBackColor(color[0])
})
    // average(url, { format: "hex" })
    //   .then((color) => {
    //     setGetColor(color);
    //     })
      
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <li ref={ref} className={`${css.card} ${css.container}`}>
      {inView && (
        <>
          <div>
            <h3>{title}</h3>
            <div className={css.post_header}>
              <button
                type="button"
                onClick={() => handleSavePost(id)}
                className={css.save_btn}
              >
                SAVE
              </button>
            </div>

            <NavLink to={`${id}`} className={css.link}>
              <img src={url} alt="" className={css.img} />
              <div className={css.description}></div>

              <div>
                <div
                  className={css.action}
                  style={{
                    backgroundColor: getBackColor ? getBackColor : "#faf5f5",
                    color: getColor ? getColor : "#080808"
                  }}
                >
                  Learn more
                </div>
              </div>
            </NavLink>
          </div>
        </>
      )}
    </li>
  );
};

Posts.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  handleSavePost: PropTypes.func,
};
