import PropTypes from "prop-types";
import { AddBanner } from "../AddBanner/AddBanner";
import css from "./CreatePost.module.css";
import { AddSelectCategory } from "../AddSelectCategory/AddSelectCategory";
import { AddCallToAction } from "../AddCallToAction/AddCallToAction";
import { AddPostLinks } from "../AddPostLinks/AddPostLinks";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { LoaderSpiner } from "../../services/loaderSpinner/LoaderSpinner";

export const CreatePost = ({ setPost, post, links, setLinks }) => {
  const [update, setUpdate] = useState(false);
  const [symbolsTitleCount, setSymbolsTitleCount] = useState(0);
  const [symbolspostDescriptionCount, setSymbolspostDescriptionCount] =
    useState(0);

  const handleChangePost = ({ target }) => {
    const { name, value } = target;
    setPost({
      ...post,
      [name]: value,
    });

    setSymbolsTitleCount(value.length);

    if (name === "description") {
      setSymbolspostDescriptionCount(value.length);
      return;
    }
  };

  const handleLinkAdd = () => {
    if (
      links[links.length - 1].name === "" ||
      links[links.length - 1].url === ""
    ) {
      return;
    }

    setPost((prev) => ({
      ...post,
      links: [...prev.links, { id: nanoid(), url: "", name: "" }],
    }));
    setLinks((prev) => [...prev, { id: nanoid(), url: "", name: "" }]);
  };

  const handleLinkDelete = (deleteId) => {
    const newLinks = post.links.filter(({ id }) => id !== deleteId);

    setPost({
      ...post,
      links: newLinks,
    });

    setLinks(newLinks);
  };

  const handleLinkChange = (id, url, name) => {
    setLinks((prev) => {
      const linkIndex = prev.findIndex((link) => link.id === id);

      const newLinks = [...prev];
      newLinks.splice(linkIndex, 1, { id, url, name });

      setPost({
        ...post,
        links: newLinks,
      });

      links?.map(({ name, url }) => {
        if (name?.length === 0 && url?.length === 0) {
          const filterLink = links?.filter(
            (item) => item.url.length !== 0 || item.name.length !== 0
          );
          return setPost((prev) => ({
            ...post,
            links: filterLink,
          }));
        }
      });

      return newLinks;
    });
  };

  return (
    <>
      {update && (
        <div className={css.loader}>
          <LoaderSpiner />
        </div>
      )}
      {post?.length !== 0 && <AddBanner setPost={setPost} post={post} />}
      <p className={`${css.title} dark:text-white`}>Fill in the details</p>

      <label className={`${css.post_description} dark:text-white`}>
        Title*
        <input
          className={`${css.post_container} 
          dark:bg-black dark:border-white dark:text-white
           `}
          type="text"
          maxLength="35"
          name="title"
          value={post?.title}
          onChange={handleChangePost}
          placeholder="Friendly Study"
        />
        <p className={`${css.symbols} dark:text-white`}>
          Symbols left
          <span className={css.symbols_count}>
            {post?.title?.length ?? symbolsTitleCount}/35
          </span>
        </p>
      </label>

      {post?.length !== 0 && (
        <AddSelectCategory setPost={setPost} post={post} />
      )}

      <label className={`${css.post_description} dark:text-white `}>
        Description
        <textarea
          className={`${css.post_container}   dark:bg-black dark:border-white dark:text-white`}
          name="description"
          maxLength="9000"
          rows="7"
          value={post?.description}
          onChange={handleChangePost}
        ></textarea>
        <p className={css.symbols}>
          Symbols left
          <span className={css.symbols_count}>
            {post?.description?.length ?? symbolspostDescriptionCount}/9000
          </span>
        </p>
      </label>

      <div className={css.links_container}>
        <p className={`${css.title} dark:text-white`}>Add your links</p>
        <p className={`${css.links_title} dark:text-white`}>
          Add a link address and choose a Call-To-Action button if you want to
          promptly redirect a consumer to the landing page (optional):
        </p>
        {post?.length !== 0 && (
          <AddCallToAction setPost={setPost} post={post} />
        )}

        <p className={`${css.supported_links} dark:text-white`}>
          Add a link to your social networks or webpage (at least one) and give
          a short title:
        </p>

        <AddPostLinks
          links={links}
          setLinks={setLinks}
          onLinkAdd={handleLinkAdd}
          onLinkChange={handleLinkChange}
          onLinkDelete={handleLinkDelete}
        />

        <p className={`${css.supported_links} dark:text-white`}>
          Supported links: Facebook, Instagram, Pinterest, Tik-tok, Webpage
        </p>
      </div>
    </>
  );
};

CreatePost.propTypes = {
  post: PropTypes.object,
  setPost: PropTypes.func,
  links: PropTypes.array,
  setLinks: PropTypes.func,
};
