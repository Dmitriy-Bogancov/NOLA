import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { ReactComponent as Save_Icon } from "../../assets/icons/save.svg";
import { ReactComponent as UpLeft_Icon } from "../../assets/icons/upLeft.svg";

import css from "./Posts.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";

// import { prominent } from "color.js";
import { useCustomContext } from "../../services/Context/Context";

const LOKAL_KEY = "savedPost";

export const Posts = ({ id, url, title, handleSavePost }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const targetRef = useRef();

  const { theme, setTheme } = useCustomContext();
  const { postsId, setPostsId } = useCustomContext();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const useMergedRef = (...refs) => {
    return useCallback(
      (node) => {
        refs.forEach((ref) => {
          if (typeof ref === "function") {
            ref(node);
          } else if (ref !== null) {
            ref.current = node;
          }
        });
      },
      [refs]
    );
  };
  const mergedRef = useMergedRef(targetRef, ref);

  useEffect(() => {
    if (postsId === id) {
      targetRef?.current?.scrollIntoView({ behavior: "smooth" });

      return;
    }

    setPostsId("");
  }, [id, location, navigate, postsId, setPostsId]);

  // const [getColor, setGetColor] = useState("");
  // const [getBackColor, setGetBackColor] = useState("");

  // useEffect(() => {
  //   prominent(url, { format: "hex" })
  //   .then(color => {
  //     setGetColor(color[2])
  //     setGetBackColor(color[0])
  //   })
  //     .catch((error) => console.log(error));
  // }, [url]);

  return (
    <li ref={mergedRef} className={`${css.card} ${css.container}`}>
      {inView && (
        <>
          <div>
            <NavLink
              to={`${id}`}
              state={{ from: location }}
              className={css.link}
            >
              <img src={url} alt="" className={css.img} />
              {/* <div className={css.description}></div> */}

              {/* <div>
                <div
                  className={css.action}
                  style={{
                    backgroundColor: getBackColor ? getBackColor : "#faf5f5",
                    color: getColor ? getColor : "#080808"
                  }}
                >
                  Learn more
                </div>
              </div> */}
            </NavLink>
            <div
              className={`${css.post_header}  ${
                theme === "dark" ? css.iconDark : ""
              }`}
            >
              <NavLink to={`${id}`} className={`${css.title} dark:text-white`}>
                {title}
              </NavLink>

              <button
                type="button"
                onClick={() => handleSavePost(id)}
                className={css.save_btn}
              >
                <Save_Icon />
              </button>
            </div>
            <span
              className={`${css.line}  
            dark:bg-white`}
            ></span>

            <div
              className={`${css.footer}  ${
                theme === "dark" ? css.iconDark : ""
              }`}
            >
              <img src="" alt="" className={css.icon} />
              <div className={css.footer_left}>
                <h3 className={css.footer_title}>Englishdom</h3>
                <p className={css.count}>Courses: 129</p>
              </div>

              <NavLink
                to="/:advertiserId"
                state={{ from: location }}
                className={`${css.action} dark:text-white`}
              >
                Learn more
              </NavLink>
              <UpLeft_Icon />
            </div>
          </div>
        </>
      )}
    </li>
  );
};

Posts.propTypes = {
  url: PropTypes.array,
  title: PropTypes.string,
  id: PropTypes.string,
  handleSavePost: PropTypes.func,
};
