import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

import css from "./Posts.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { average } from "color.js";

const LOKAL_KEY = "savedPost";

export const Posts = ({ id, url, title, handleSavePost }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [getColor, setGetColor] = useState("");

  useEffect(() => {
    average(url, { format: "hex" })
      .then((color) => {
        setGetColor(color);
      })
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
                    backgroundColor: getColor ? getColor : "#ebe3e3",
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
