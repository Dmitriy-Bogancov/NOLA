import PropTypes from "prop-types";
import css from "./PostsAdverticer.module.css";
import GoBackButton from "../GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";

export const PostsAdverticer = ({ data }) => {
  return (
    <>
      {data &&
        [data]?.map(
          ({
            description,
            title,
          }) => (
            <>
              <div className={css.logo_container}>
                <img src="" alt="" className={css.logo} />
                <p className={`${css.logo_description} dark:text-white`}>{title}</p>
              </div>

              <p className={`${css.title} dark:text-white`}>{title}</p>

              <p className={`${css.descriptionTest} dark:text-white`}>{description}</p>

              {data?.links && <p className={`${css.links} dark:text-white`}>Links:</p>}
              <ul>
                {data?.links?.map(({ id, url, name }) => (
                  <li key={id} className={`${css.links_item} dark:text-white`}>
                    <img src="" alt="" className={css.link_img} />
                    {name}
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
