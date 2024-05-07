import css from "./MessagePostOnModeration.module.css";
import checked from "../../assets/icons/checked.svg";

export const MessagePostOnModeration = () => {
  return (
    <div className={css.checked_container}>
      <img src={checked} alt="checked" />
      <p className={css.description}>
        Advertisement is under moderation. <br />
        It will take about 15 minutes.
      </p>
    </div>
  );
};
