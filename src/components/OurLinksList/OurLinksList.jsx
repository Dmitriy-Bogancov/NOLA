import PropTypes from "prop-types";
import css from "./OurLinksList.module.css";


export const OurLinksList = ({ data, setOurLinksList }) => {
  const handleCloseBackdrop = (e) => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
      setOurLinksList(false);
    }
  };
  return (
    <div className={css.links_backdrop} onClick={handleCloseBackdrop}>
      <div className={css.links_container}>
        <ul className={css.list}>
          {/* {data?.map(({ links }) => { */}
          <li key="" className={css.link_item}>
            <img src="" alt="" className={css.link_img} />
            <div>
              <p className={css.title}> English Course for Someone</p>
              <p className={css.description}>https://course.com/</p>
            </div>
          </li>

          <li className={css.link_item}>
            <img src="" alt="" className={css.link_img} />
            <div>
              <p className={css.title}>Facebook</p>
              <p className={css.description}>https://course.com/</p>
            </div>
          </li>

          <li className={css.link_item}>
            <img src="" alt="" className={css.link_img} />
            <div>
              <div>
                <p className={css.title}>Instagram</p>
                <p className={css.description}>https://course.com/</p>
              </div>
            </div>
          </li>

          <li className={css.link_item}>
            <img src="" alt="" className={css.link_img} />
            <div>
              <p className={css.title}>Telegram</p>
              <p className={css.description}>https://course.com/</p>
            </div>
          </li>
          {/* })} */}
        </ul>
      </div>
    </div>
  );
};

OurLinksList.propTypes = {
  data: PropTypes.array,
  setOurLinksList: PropTypes.func,
};
