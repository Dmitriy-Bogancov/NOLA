import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { ReactComponent as Save_Icon } from "../../assets/icons/save.svg";
import { ReactComponent as SaveActive_Icon } from "../../assets/icons/saved_icon.svg";
import { ReactComponent as UpLeft_Icon } from "../../assets/icons/arrow-right.svg";

import css from "./Posts.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";

// import { prominent } from "color.js";
import { useCustomContext } from "../../services/Context/Context";

const LOKAL_KEY = "savedPost";

export const Posts = ({ id, url, title, handleSavePost, savedPost }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const targetRef = useRef();
  // const ref = useRef()
  const { theme, setTheme } = useCustomContext();
  const { postsId, setPostsId } = useCustomContext();

  // const { ref, inView , entry} = useInView({
  //   threshold: 0,
  //   triggerOnce: true,
  // });
  const {ref:inViewRef, inView} = useInView()
  
const setRefs = useCallback(
  (node) => {
    //  ref.current = node
    targetRef.current = node
     inViewRef(node)
    
  },
  [inViewRef]
)

  // const useMergedRef = (...refs) => {
  //   return useCallback(
  //     (node) => {
  //       refs.forEach((ref) => {
  //         if (typeof ref === "function") {
  //           ref(node);
  //         } else if (ref !== null) {
  //           ref.current = node;
  //         }
  //       });
  //     },
  //     [refs]
  //   );
  // };
  // const mergedRef = useMergedRef(targetRef, inViewRef);

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
    <li ref={targetRef} className={`${css.card} ${css.container}`}>
      {/* {inView && ( */}
        <>
           <div
              className={`${css.post_header}  ${
                theme === "dark" ? css.iconDark : ""
              }`}
            >
              <div
                className={`${css.footer}  ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <img src="" alt="" className={css.icon} />
                <NavLink
                  to="/:advertiserId"
                  state={{ from: location }}
                  className={css.footer_left}
                >
                  <h3 className={`${css.footer_title} dark:text-white`}>
                    {title}
                  </h3>
                  <p className={`${css.count} dark:text-white`}>Posts: 129</p>
                </NavLink>

                <button
                  type="button"
                  onClick={() => handleSavePost(id)}
                  className={css.save_btn}
                >
                  {savedPost.includes(id) ? (
                    <SaveActive_Icon />
                  ) : (
                    <Save_Icon />
                  )}
                </button>
              </div>
              <span
                className={`${css.line} dark:bg-white`}
              ></span>

              <img src={url} alt="" className={css.img} />
              
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

              <div className={css.footer_action}>
                <NavLink
                  to={`${id}`}
                  // state={{ from: location }}
                  className={`${css.action} dark:text-white`}
                >
                  Learn more
                </NavLink>
                <NavLink to={`${id}`}
                  // state={{ from: location }}
                >
                  <UpLeft_Icon />
                </NavLink>
              </div>
            </div>
        </>
      {/* )} */}
    </li>
  );
};

Posts.propTypes = {
  url: PropTypes.array,
  title: PropTypes.string,
  id: PropTypes.string,
  handleSavePost: PropTypes.func,
  savedPost: PropTypes.array,
};
