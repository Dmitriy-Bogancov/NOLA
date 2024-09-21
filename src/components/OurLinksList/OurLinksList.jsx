import PropTypes from "prop-types";
import css from "./OurLinksList.module.css";
import { ReactComponent as Icon_Links } from "../../assets/icons/links.svg";
import { ReactComponent as Icon_Facebook } from "../../assets/icons/facebook_icon.svg";
import { ReactComponent as Icon_Instagram } from "../../assets/icons/instagram_icon.svg";
import { ReactComponent as Icon_Telegram } from "../../assets/icons/telegram_icon.svg";
import { ReactComponent as Icon_TikTok } from "../../assets/icons/tikTok.svg";


export const OurLinksList = ({ data, setOurLinksList }) => {
  const handleCloseBackdrop = (e) => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
      setOurLinksList(false);
    }
  };
  return (
    <div className={css.links_backdrop} onClick={handleCloseBackdrop}>
      <div className={`${css.links_container} dark:bg-darkGray`}>
        <ul className={css.list}>
          {/* {data?.map(({ links }) => { */}
          <li key="" className={css.link_item}>
            <Icon_Links />
            <div className={css.link_item_container}>
              <p className={css.title}> English Course for Someone</p>
              <p className={css.description}>https://course.com/</p>
            </div>
          </li>

          <li className={css.link_item}>
            <Icon_Facebook />
            <div className={css.link_item_container}>
              <p className={css.title}>Facebook</p>
              <p className={css.description}>https://course.com/</p>
            </div>
          </li>

          <li className={css.link_item}>
            <Icon_Instagram />
            <div>
              <div className={css.link_item_container}>
                <p className={css.title}>Instagram</p>
                <p className={css.description}>https://course.com/</p>
              </div>
            </div>
          </li>

          <li className={css.link_item}>
            <Icon_Telegram />
            <div className={css.link_item_container}>
              <p className={css.title}>Telegram</p>
              <p className={css.description}>https://course.com/</p>
            </div>
          </li>
           <li className={css.link_item}>
            <Icon_TikTok/>
            <div className={css.link_item_container}>
              <p className={css.title}>TikTok</p>
              <p className={css.description}>https://tiktok.com/</p>
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
