import PropTypes from "prop-types";
import css from "./PostsAdverticer.module.css";
import GoBackButton from "../GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";

export const PostsAdverticer = ({ title, description, links }) => {
  return (
    <>
      <div className={css.logo_container}>
        <img src="" alt="" className={css.logo} />
        <p className={`${css.logo_description} dark:text-white`}>{title}</p>
      </div>

      <p className={`${css.title} dark:text-white`}>{title}</p>

      <p className={`${css.descriptionTest} dark:text-white`}>{description}</p>

      {links.length > 0 && (
        <p className={`${css.links} dark:text-white`}>Links:</p>
      )}
      <ul>
        {links?.map(({ id, url, name }) =>
          name.length !== 0 ? (
            <li key={id} className={`${css.links_item}`}>
              <img src="" alt="" className={css.link_img} />
              <a href={url} className={`${css.url} dark:text-white`}>
                {" "}
                {name}
              </a>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </>
  );
};

PostsAdverticer.propTypes = {
  links: PropTypes.array,
  description: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object,
};
