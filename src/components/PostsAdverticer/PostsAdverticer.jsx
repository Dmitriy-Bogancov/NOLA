import PropTypes from "prop-types";
import css from "./PostsAdverticer.module.css";
import GoBackButton from "../GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";

export const PostsAdverticer = ({ data }) => {
  return (
    <>
      {data &&
        [data].map(
          ({
            callToAction,
            callToActionLinks,
            category,
            description,
            links,
            subcategory,
            title,
          }) => (
            <>
              <div className={css.logo_container}>
                <img src="" alt="" className={css.logo} />
                <p className={css.logo_description}>{title}</p>
              </div>

              <p className={css.title}>{title}</p>

              <p className={css.descriptionTest}>{description}</p>

              <p className={css.links}>Links:</p>
              <ul>
                {data?.links.map(({ id, postLinks, postLinksName }) => (
                  <li key={id} className={css.links_item}>
                    <img src="" alt="" className={css.link_img} />
                    {postLinksName}
                  </li>
                ))}
              </ul>
            </>
          )
        )}
    </>
  );
};

PostsAdverticer.propTypes = {
  // id: PropTypes.string,
  // name: PropTypes.string.isRequired,
  // setShowPost: PropTypes.func,
  // description:  PropTypes.string,
  // title:  PropTypes.string,
  data: PropTypes.object,
};
