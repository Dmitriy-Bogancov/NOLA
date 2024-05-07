import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import css from "./AddPostLinks.module.css";
import add from "../../assets/icons/addBaner.svg";
import deleteLink from "../../assets/icons/deleteLink.svg";
import { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useDispatch, useSelector } from "react-redux";
import { addLink } from "../../redux/addPostLink/addPostSlice";

export const AddPostLinks = ({
  setPost,
  post,
  link,
  setLink,
  saveLink,
  // addPostLinks
}) => {

  const [count, setCount] = useState(0);
  const [countLink, setCountLink] = useState(1);
  const [img, setImg] = useState(false);

  const [changeImg, setChangeImg] = useState(add);

  const handlePostLinks = async ({ target }) => {
    const { name, value } = target;
    setLink((prev) => ({
      ...prev,
      id: nanoid(),
      [name]: value,
    }));

  
    // setPost((prev) => ({
    //   ...post,
    //    links:[...prev.links , { ...prev.links, id: nanoid(), ...link }]
    // }));
 
  };


  const addPostLinks = async (value) => {
    setChangeImg(deleteLink);

    setPost((prev) => ({
      ...post,
      links: [...prev.links, link],
    }));
  };


  // const addCheckLinks = () => {
  //   setPost((prev) => ({
  //     ...post,
  //     links: [...prev.links, link],
  //   }));
  // };


  return (
    <>
      <div>
        {!saveLink && (
<>
            <div className={css.links_container}>
              <>
                <textarea
                  name="postLinks"
                  // value={saveLink ? "postLinks" : post.links.postLinks}
                  className={css.post_container}
                  onChange={handlePostLinks}
                ></textarea>
                <textarea
                  name="postLinksName"
                  // value={saveLink ? "postLinks" : post.links.postLinks}
                  onChange={handlePostLinks}
                  className={css.post_container}
                ></textarea>
              </>
  
              <img src={add} alt="" onClick={addPostLinks}/>
            </div>
  
  
             {/* <div className={css.links_container}>
              <>
                <textarea
                  name="postLinks"
                  // value={saveLink ? "postLinks" : post.links.postLinks}
                  className={css.post_container}
                  onChange={handlePostLinks}
                ></textarea>
                <textarea
                  name="postLinksName"
                  // value={saveLink ? "postLinks" : post.links.postLinks}
                  onChange={handlePostLinks}
                  className={css.post_container}
                ></textarea>
              </>
  
              <img src={add} alt="" onClick={addPostLinks}/>
            </div> */}
</>
        )}

        {post?.links?.map(({ id, postLinks, postLinksName }) => (
          <div key={id} className={css.links_container}>
            {console.log("post.links", post?.links)}
            <textarea
              name="postLinks"
             value={saveLink ? postLinks : post.links.postLinks}
              className={css.post_container}
              onChange={handlePostLinks}
            ></textarea>
            <textarea
              name="postLinksName"
               value={saveLink ? postLinksName : post.links.postLinks}
              onChange={handlePostLinks}
              className={css.post_container}
            ></textarea>

             <img src={add} alt="" onClick={addPostLinks}/>
          </div>
        ))}
      </div>
    </>
  );
};

AddPostLinks.propTypes = {
  setPost: PropTypes.func,
  post: PropTypes.object,
  link: PropTypes.object,
  setLink: PropTypes.func,
  saveLink: PropTypes.bool,
};
