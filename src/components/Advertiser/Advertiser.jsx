import css from "./Advertiser.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { CutString } from "../../components/CutString/CutString";
import { OurLinksList } from "../../components/OurLinksList/OurLinksList";
import { useCustomContext } from "../../services/Context/Context";
import { ReactComponent as Icon_Links } from "../../assets/icons/links.svg";

export const Advertiser = ({ data }) => {
  const [cutStr, setCutStr] = useState(true);
  const { theme, setTheme } = useCustomContext();
  const [ourLinksList, setOurLinksList] = useState(false);

  const handleMoreText = (e) => {
    setCutStr((pre) => !pre);
  };

  const handOurLinksList = () => {
    setOurLinksList(true);
  };

  return (
    <>
      {/* {data?.map(({name, textarea}) => ())} */}
      <div className={css.main}>
        <svg width="72" height="72" className={css.icon}>
          <use></use>
        </svg>
        <div className={css.account}>
          <h3 className={css.title}>English Study</h3>
          <p className={css.count}>Publication: 108</p>
        </div>
      </div>

      <div
        className={theme === "dark" ? css.iconDark : css.footer}
        onClick={handOurLinksList}
      >
        <Icon_Links />

        <p className={theme === "dark" ? css.linksDark : css.links}>
          Links
        </p>
      </div>

      <div className={css.description}>
        {cutStr ? (
          <CutString
            string={
              "We are the newest English language school for any age. Our school provides both online and offline services. We are the on newest English language school beginners to advanced learners, we provide comprehensive support and engaging lessons to help you achieve fluency and confidence in English communication. "
            }
            maxLength={150}
          />
        ) : (
          "We are the newest English language school for any age. Our school provides both online and offline services. We are the on newest English language school beginners to advanced learners, we provide comprehensive support and engaging lessons to help you achieve fluency and confidence in English communication. "
        )}

        {cutStr ? (
          <button
            type="button"
            onClick={handleMoreText}
            className={theme === "dark" ? css.footerDark_btn : css.footer_btn}
          >
            See more
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleMoreText()}
            className={theme === "dark" ? css.footerDark_btn : css.footer_btn}
          >
            Roll up
          </button>
        )}
      </div>

      {ourLinksList && (
        <OurLinksList data={data} setOurLinksList={setOurLinksList} />
      )}
    </>
  );
};

Advertiser.propTypes = {
  data: PropTypes.node.isRequired,
};
