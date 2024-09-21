import PropTypes from "prop-types";
import css from "./PostsAdverticerMenu.module.css";

export const PostsAdverticerMenu = ({
  id,
  postMenuActive,
  children,
  isModal = false,
  menuList,
  setMenuList,
}) => {
  const handleOpenBackdrop = () => {
    setMenuList(true);
  };

  const handleCloseBackdrop = (e) => {
    const { target, currentTarget } = e;

    if (target === currentTarget) {
      setMenuList(false);
    }
  };

  return (
    <div>
      <div className={css.post_menu} onClick={() => postMenuActive(id)}>
        <p>213</p>
        <p>7</p>
        <p onClick={handleOpenBackdrop} className={css.more_menu}>
          ***
        </p>
      </div>

      {menuList && !isModal && (
        <div className={css.backdrop} onClick={handleCloseBackdrop}>
          <div className={`${css.container} dark:bg-darkGray`}>{children}</div>
        </div>
      )}
    </div>
  );
};

PostsAdverticerMenu.propTypes = {
  id: PropTypes.string,
  postMenuActive: PropTypes.func,
  children: PropTypes.node,
  isModal: PropTypes.bool,
  menuList: PropTypes.bool,
  setMenuList: PropTypes.func,
};
