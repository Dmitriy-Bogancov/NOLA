import PropTypes from "prop-types";
import Select from "react-select";
import { useEffect, useState } from "react";

import css from "./AddCallToAction.module.css";
import callToActionJson from "../../assets/json/callToAction.json";

export const AddCallToAction = ({ setPost, post }) => {
  const [callToAction, setCallToAction] = useState([]);

  useEffect(() => {
    setCallToAction(callToActionJson);
  }, [callToAction]);

  const handleCallToAction = (callToAction) => {
    console.log("callToAction", callToAction.label);
    setPost({
      ...post,
      callToAction: callToAction.label,
    });

    localStorage.setItem("previewPost", JSON.stringify(post));
  };

  const handleCallToActionLinks = ({ target }) => {
    console.log("callToActionLinks", target.value);
    const { value } = target;
    setPost({
      ...post,
      callToActionLinks: value,
    });

    localStorage.setItem("previewPost", JSON.stringify(post));
  };

  return (
    <ul className={css.links_list}>
      <li className={`${css.links_list_item} ${css.action_links}`}>
        <textarea
          name="callToActionLinks"
          value={post.callToActionLinks}
          className={css.callToActionLinks}
          onChange={handleCallToActionLinks}
        ></textarea>
      </li>

      <li className={css.links_list_item}>
        <Select
          styles={{
            control: () => ({}),
          }}
          defaultValue={callToActionJson[0]}
          options={callToAction}
          onChange={handleCallToAction}
        />
      </li>
    </ul>
  );
};

AddCallToAction.propTypes = {
  setPost: PropTypes.func,
  post: PropTypes.object,
};
