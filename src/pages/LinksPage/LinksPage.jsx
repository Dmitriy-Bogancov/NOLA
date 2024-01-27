import { NavLink } from "react-router-dom";

import css from "./LinksPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { useCustomContext } from "../../services/Context/Context";

const LinksPage = () => {
  const { addLink, setAddLink } = useCustomContext([]);

  //   useEffect(() => {
  // get --addLink
  // }, [addLink])

  return (
    <div>
      {console.log(addLink)}
      <GoBackButton to="/main/accountAdverticer/adverticerEdit" imgSrc={back} />
      <form className={css.form}>
        <div>
          <div className={css.input_container}>
            <input type="text" className={css.input} />
            <NavLink to="addLinks" className={css.addLink}>
              +
            </NavLink>
          </div>

          <ul>
            {addLink?.map(({ name, links }) => (
              <li key={links}>
                <p>{name}</p>
                <a href={links}>{links}</a>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default LinksPage;
