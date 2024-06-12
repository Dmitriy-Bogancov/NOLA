import PropTypes from "prop-types";
import css from "./AddPostLinks.module.css";
import add from "../../assets/icons/addBaner.svg";
import deleteLink from "../../assets/icons/deleteLink.svg";


export const AddPostLinks = ({
  links,
  onLinkChange,
  onLinkAdd,
  onLinkDelete,
}) => {

const el = links?.find((item) => item.id === links[links.length - 1].id);

  return (
    <>
      {links &&
        links?.map(({ id, url, name }) => (
          <div key={id} className={css.links_container}>
            <textarea
              value={url}
              placeholder="url"
              className={`${css.post_container}   dark:bg-black dark:border-white dark:text-white`}
              onChange={(e) => onLinkChange(id, e.target.value, name)}
            />
            <textarea
              value={name}
              onChange={(e) => onLinkChange(id, url, e.target.value)}
              placeholder="name"
              className={`${css.post_container}   dark:bg-black dark:border-white dark:text-white`}
            />

            {el.id === id ? (
              <img src={add} alt="add link" onClick={onLinkAdd} />
            ) : (
              <img
                src={deleteLink}
                alt="delete link"
                onClick={() => onLinkDelete(id)}
              />
            )}
          </div>
        ))}
    </>
  );
};

AddPostLinks.propTypes = {
  links: PropTypes.array,
  onLinkChange: PropTypes.func,
  onLinkAdd: PropTypes.func,
  onLinkDelete: PropTypes.func,
  setLinks: PropTypes.func,
};
