import PropTypes from "prop-types";
import Select from "react-select";
import { useEffect, useState } from "react";

import css from "./AddCallToAction.module.css";
import callToActionJson from "../../assets/json/callToAction.json";
import { useCustomContext } from "../../services/Context/Context";

export const AddCallToAction = ({ setPost, post }) => {
  const { theme } = useCustomContext();
  const [callToAction, setCallToAction] = useState([]);

  const [findCallToAction, setFindCallToAction] = useState(() => {
    return (
      post.callToAction ??
      JSON.parse(localStorage.getItem("previewPost"))?.callToAction
    );
  });
  const [callToActionIndex, setCallToActionIndex] = useState(null);

  useEffect(() => {
    setCallToAction(callToActionJson);

    const findIndex = callToAction.findIndex(
      ({ label }) => label === findCallToAction
    );
    setCallToActionIndex(findIndex);
  }, [callToAction, findCallToAction]);

  const handleCallToAction = (callToActionLabel) => {
    const callToActionFindIndex = callToAction.findIndex(
      (item) => item.label === callToActionLabel.label
    );

    setPost({
      ...post,
      callToAction: callToActionLabel.label,
    });

    setCallToActionIndex(callToActionFindIndex);
  };

  const handleCallToActionLinks = ({ target }) => {
    const { value } = target;
    setPost({
      ...post,
      callToActionLinks: value,
    });
  };

  const themeSelect = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "#ECCD43",
    },
  });

  const selected_option = callToAction[callToActionIndex] ?? {
    id: "1",
    value: "read_more",
    label: "Read more",
  };

  return (
    <ul className={css.links_list}>
      <li className={`${css.links_list_item} ${css.action_links}`}>
        <textarea
          name="callToActionLinks"
          value={post?.callToActionLinks}
          className={`${css.callToActionLinks}   dark:bg-black dark:border-white dark:text-white`}
          onChange={handleCallToActionLinks}
        ></textarea>
      </li>

      <li className={css.links_list_item}>
        {theme === "dark" ? (
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                padding: "8px 24px",
                backgroundColor: "rgb(30 28 28)",
              }),
              menuList: (styles) => ({
                ...styles,
                backgroundColor: "rgb(137 132 132)",
                color: "white",
              }),
            }}
            theme={themeSelect}
            value={selected_option}
            options={callToAction}
            onChange={handleCallToAction}
          />
        ) : (
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                padding: "8px 24px",
              }),
            }}
            className={`dark:bg-black dark:border-white dark:text-white`}
            theme={themeSelect}
            value={selected_option}
            options={callToAction}
            onChange={handleCallToAction}
          />
        )}
      </li>
    </ul>
  );
};

AddCallToAction.propTypes = {
  setPost: PropTypes.func,
  post: PropTypes.object,
};
