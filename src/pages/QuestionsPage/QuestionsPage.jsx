import GoBackButton from "../../components/GoBackButton/GoBackButton";
import css from "./QuestionsPage.module.css";
import { ReactComponent as Icon_ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as Icon_ArrowUp } from "../../assets/icons/arrow-up.svg";
import { useState } from "react";
import { useCustomContext } from "../../services/Context/Context";

const QuestionsPage = () => {
  const { theme, setTheme } = useCustomContext();

  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
  const [tab5, setTab5] = useState(false);
  const [tab6, setTab6] = useState(false);

  const handleCheckboxClick = (el) => {
    switch (el) {
      case 1:
        setTab1((prev) => !prev);
        break;
      case 2:
        setTab2((prev) => !prev);
        break;
      case 3:
        setTab3((prev) => !prev);
        break;
      case 4:
        setTab4((prev) => !prev);
        break;
      case 5:
        setTab5((prev) => !prev);
        break;
      case 6:
        setTab6((prev) => !prev);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className={css.top_container}>
        <GoBackButton
          to="/setting"
          imgWidth="50px"
          imgHeight="50px"
          imgAlt="Go back"
        />
        <p className={css.title}>Frequently asked questions</p>
      </div>

      <div className={css.accordion}>
        <div className={css.tab}>
          <label
            htmlFor="tab1"
            className={css.tab_label}
            onClick={() => handleCheckboxClick(1)}
          >
            <p className={css.tab_title}>
              How to place my advertisement on the platform?
            </p>

            {!tab1 && (
              <div
                className={`${css.icon} ${css.arrow_down} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowDown />
              </div>
            )}

            {tab1 && (
              <div
                className={`${css.icon} ${css.arrow_up} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowUp />
              </div>
            )}
          </label>
          <input type="checkbox" id="tab1" className={css.checkbox} />

          <p className={css.tab_descr}>
            To place your advertisement on the platform, you typically need to
            create an account, navigate to the "Post Ad" , fill in the required
            details about your advertisement and then submit it for review and
            publication.
          </p>
        </div>
        <div className={css.tab}>
          <label
            htmlFor="tab2"
            className={css.tab_label}
            onClick={() => handleCheckboxClick(2)}
          >
            <p className={css.tab_title}>
              Can I edit or delete my advertising listings?
            </p>

            {!tab2 && (
              <div
                className={`${css.icon} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowDown />
              </div>
            )}

            {tab2 && (
              <div
                className={`${css.icon} ${css.arrow_up} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowUp />
              </div>
            )}
          </label>
          <input type="checkbox" id="tab2" className={css.checkbox} />

          <p className={css.tab_descr}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, praesentium alias? Tempora minima id modi!
          </p>
        </div>

        <div className={css.tab}>
          <label
            htmlFor="tab3"
            className={css.tab_label}
            onClick={() => handleCheckboxClick(3)}
          >
            <p className={css.tab_title}>
              How do I add images to my advertisement?
            </p>

            {!tab3 && (
              <div
                className={`${css.icon} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowDown />
              </div>
            )}

            {tab3 && (
              <div
                className={`${css.icon} ${css.arrow_up} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowUp />
              </div>
            )}
          </label>
          <input type="checkbox" id="tab3" className={css.checkbox} />

          <p className={css.tab_descr}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, praesentium alias? Tempora minima id modi!
          </p>
        </div>

        <div className={css.tab}>
          <label
            htmlFor="tab4"
            className={css.tab_label}
            onClick={() => handleCheckboxClick(4)}
          >
            <p className={css.tab_title}>
              Is there a way to view advertisement statistics (e.g., number of
              views)?
            </p>

            {!tab4 && (
              <div
                className={`${css.icon} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowDown />
              </div>
            )}

            {tab4 && (
              <div
                className={`${css.icon} ${css.arrow_up} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowUp />
              </div>
            )}
          </label>
          <input type="checkbox" id="tab4" className={css.checkbox} />

          <p className={css.tab_descr}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, praesentium alias? Tempora minima id modi!
          </p>
        </div>

        <div className={css.tab}>
          <label
            htmlFor="tab5"
            className={css.tab_label}
            onClick={() => handleCheckboxClick(5)}
          >
            <p className={css.tab_title}>
              What payment methods available for advertising publication?
            </p>

            {!tab5 && (
              <div
                className={`${css.icon} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowDown />
              </div>
            )}

            {tab5 && (
              <div
                className={`${css.icon} ${css.arrow_up} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowUp />
              </div>
            )}
          </label>
          <input type="checkbox" id="tab5" className={css.checkbox} />

          <p className={css.tab_descr}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, praesentium alias? Tempora minima id modi!
          </p>
        </div>

        <div className={css.tab}>
          <label
            htmlFor="tab6"
            className={css.tab_label}
            onClick={() => handleCheckboxClick(6)}
          >
            <p className={css.tab_title}>
              How do I remove or block unwanted advertisements?
            </p>

            {!tab6 && (
              <div
                className={`${css.icon} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowDown />
              </div>
            )}

            {tab6 && (
              <div
                className={`${css.icon} ${css.arrow_up} ${
                  theme === "dark" ? css.iconDark : ""
                }`}
              >
                <Icon_ArrowUp />
              </div>
            )}
          </label>
          <input type="checkbox" id="tab6" className={css.checkbox} />

          <p className={css.tab_descr}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, praesentium alias? Tempora minima id modi!
          </p>
        </div>
      </div>
    </>
  );
};

export default QuestionsPage;
