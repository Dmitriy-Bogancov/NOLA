import css from "./Avatar.module.css";
import PropTypes from "prop-types";
// import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage } from "@cloudinary/react";
// import { thumbnail } from "@cloudinary/url-gen/actions/resize";
// import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
// import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import image_account from "../../assets/icons/image.svg";
import { ReactComponent as Icon_Image } from "../../assets/icons/image.svg";
import { useEffect, useState } from "react";
import { ToastError } from "../../services/ToastError/ToastError";
import Avatar from "react-avatar-edit";
import { postImg } from "../../services/cloudinary/cloudinary";
import { useCustomContext } from "../../services/Context/Context";

export const AvatarUser = ({ setAccount, account }) => {
  const { theme, setTheme } = useCustomContext();
  const [photo, setPhoto] = useState(() => {
    return JSON.parse(localStorage.getItem("account"))?.photo ?? "";
  });
  const [update, setUpdate] = useState(false);
  const [src, setSrc] = useState(null);
  const [modal, setModal] = useState(false);
    const [image, setImage] = useState(() => {
        return JSON.parse(localStorage.getItem("account"))?.image ?? "";
    });

  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: "dpsjhatpy",
  //   },
  // });

  const upload_presets = "j0hj8hjd";
  const api_key = "984292171139147";

  useEffect(() => {
    setAccount((prev) => ({
      ...account,
        photo: photo,
        image: image
    }));
    // eslint-disable-next-line
  }, [photo,image]);

  // const handleAddPhoto = async (e) => {
  //   const filesOne = e.target.files[0];

  //   const formData = new FormData();
  //   formData.append("file", filesOne);
  //   formData.append("api_key", api_key);
  //   formData.append("upload_preset", upload_presets);

  //   if (filesOne) {
  //     try {
  //       setUpdate(true);
  //       const response = await fetch(
  //         `https://api.cloudinary.com/v1_1/dpsjhatpy/image/upload`,
  //         {
  //           method: "POST",
  //           body: formData,
  //         }
  //       );
  //       const data = await response.json();

  //       setPhoto(data?.public_id);
  //     } catch (error) {
  //       ToastError(error.message);
  //     } finally {
  //       setUpdate(false);
  //     }
  //   }
  // };

  // const imgRes = photo
  //   ? cld
  //       .image(photo)
  //       .resize(
  //         thumbnail().width(100).height(100).gravity(focusOn(FocusOn.face()))
  //       )
  //   : null;

  const onClose = async () => {
    setModal(false);

    const formData = new FormData();
    formData.append("file", src);
    formData.append("api_key", api_key);
    formData.append("upload_preset", upload_presets);

    try {
      setUpdate(true);
      const data = await postImg(formData);
        setPhoto(data?.data?.url);
        setImage(data?.data?.url);
    } catch (error) {
      ToastError(error.message);
    } finally {
      setUpdate(false);
    }
  };

  const onCrop = async (i) => {
    setImage(true)
    setSrc(i);
  };

  const handleAvatar = (e) => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
      setSrc(photo ? photo : null);
      setImage(false)
      setModal((prev) => !prev);
    }
  };

  return (
    <>
      {update && <p>Photo downloаding</p>}
      <div className={css.photo_container}>
        {modal && (
          <div className={css.backdrop} onClick={handleAvatar}>
            <div
              className={`${css.modal} ${
                theme === "dark" ? css.modal_dark : ""
              }`}
            >
              <div
                className={`${css.avatar} ${
                  theme === "dark" ? css.avatar_dark : ""
                }`}
              >
                <Avatar
                  width={300}
                  height={210}
                  onCrop={onCrop}
                  onClose={onClose}
                />
              </div>
            </div>
          </div>
        )}

        <img
          src={!src ? account?.image : src}
          alt=""
          className={`${css.src_container} dark:border-white `}
          onClick={handleAvatar}
        />
        {!photo ? (
          <div className={`${css.icon} ${image ? css.invisible : ""}`} onClick={handleAvatar}>
            <Icon_Image />
          </div> 
        ) : "" }

        {/* <label>
          <div className={css.photo_containner}>
            {imgRes && <AdvancedImage cldImg={imgRes} />}
          </div>

          <input
            className={css.addPhoto}
            type="file"
            onChange={handleAddPhoto}
          />
        </label> */}

        <p className={`${css.photo_title} dark:text-white`}>Add photo</p>
      </div>
    </>
  );
};

AvatarUser.propTypes = {
  setAccount: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};
