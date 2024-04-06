import PropTypes from "prop-types";
import css from "./PostsAdverticer.module.css";
import GoBackButton from "../GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";

export const PostsAdverticer = ({ name, banner, description, title, setShowPost }) => {
  const handleBack = () => {
    setShowPost(false);
  };

  return (
    <>
      <div className={css.top_container}>
        <GoBackButton
          imgSrc={back}
          imgAlt="Go back"
          imgWidth="50px"
          imgHeight="50px"
          onClick={handleBack}

        />

        <p className={css.return}>Return to the feed</p>
      </div>

      <img src={banner} alt="" className={css.img} />
      <div className={css.logo_container}>
        <img src="" alt="" className={css.logo} />
        <p className={css.logo_description}>{name}</p>
      </div>

      <p className={css.title}>English Course for Someone</p>

      <p className={css.description}>
        For many families in Rwanda and the patients themselves, it is a huge
        dilemma. Take an example of Emmanuel Nyandwi. Discover the joy of
        learning English with our inclusive course, designed for all levels.
        From beginners to advanced learners, we provide comprehensive support
        and engaging lessons to help you achieve fluency and confidence in
        English communication. Join us on this rewarding journey today!
      </p>

      <p className={css.links}>Links:</p>
      <ul>
         {/* data.links */}
        <li className={css.links_item}>
          <img src="" alt="" className={css.link_img} />
          English Course for Someone
        </li>
        <li className={css.links_item}>
          <img src="" alt="" className={css.link_img} />
          Instagram profile
        </li>
      </ul>
    </>
  );
};

PostsAdverticer.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  setShowPost: PropTypes.func,
  description:  PropTypes.string,
  title:  PropTypes.string, 
};
