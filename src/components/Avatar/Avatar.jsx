import css from "./Avatar.module.css";
import PropTypes from "prop-types";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { useEffect, useState } from "react";
import { ToastError } from "../../services/ToastError/ToastError";

export const Avatar = ({ setAccount, account }) => {
  const [photo, setPhoto] = useState(() => {
    return JSON.parse(localStorage.getItem("account"))?.photo ?? "";
  });
  const [update, setUpdate] = useState(false);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dpsjhatpy",
    },
  });

  const upload_presets = "j0hj8hjd";
  const api_key = "984292171139147";

  useEffect(() => {
    setAccount((prev) => ({
      ...account,
      photo: photo,
    }));
    // eslint-disable-next-line
  }, [photo]);

  const handleAddPhoto = async (e) => {
    const filesOne = e.target.files[0];

    const formData = new FormData();
    formData.append("file", filesOne);
    formData.append("api_key", api_key);
    formData.append("upload_preset", upload_presets);

    if (filesOne) {
      try {
        setUpdate(true);
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dpsjhatpy/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();

        setPhoto(data?.public_id);

      } catch (error) {
        ToastError(error.message);
      } finally {
        setUpdate(false);
      }
    }
  };

  const imgRes = photo
    ? cld
        .image(photo)
        .resize(
          thumbnail().width(100).height(100).gravity(focusOn(FocusOn.face()))
        )
    : null;

  return (
    <>
      {update && <p>Photo downloаding</p>}
      <div className={css.photo_container}>
        <label>
          <div className={css.photo_containner}>
            {imgRes && <AdvancedImage cldImg={imgRes} />}
          </div>

          <input
            className={css.addPhoto}
            type="file"
            onChange={handleAddPhoto}
          />
        </label>

        <p className={`${css.photo_title} dark:text-white`}>Add photo</p>
      </div>
    </>
  );
};

Avatar.propTypes = {
  setAccount: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};
