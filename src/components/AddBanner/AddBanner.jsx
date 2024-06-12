import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import css from "./AddBanner.module.css";
import add from "../../assets/icons/addBaner.svg";
import remove from "../../assets/icons/delete.svg";
import updateImg from "../../assets/icons/turn.svg";
import { postImg } from "../../services/cloudinary/cloudinary";
import { ToastError } from "../../services/ToastError/ToastError";
import { ToastContainer } from "react-toastify";

export const AddBanner = ({ setPost, post }) => {
  const [update, setUpdate] = useState(false);
  const [blockOneUpdate, setBlockOneUpdate] = useState(
    post?.banners[0] !== undefined ? true : false
  );
  const [blockTwoUpdate, setBlockTwoUpdate] = useState(() =>
    post?.banners[1]?.length !== undefined ? true : false
  );
  const [blockThreeUpdate, setBlockThreeUpdate] = useState(() =>
    post?.banners[2]?.length !== undefined ? true : false
  );

  const [imgOneURL, setImgOneURL] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("previewPost"))?.banners[0] ||
      post?.banners[0] ||
      ""
    );
  });
  const [imgTwoURL, setImgTwoURL] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("previewPost"))?.banners[1] ||
      post?.banners[1] ||
      ""
    );
  });
  const [imgThreeURL, setImgThreeURL] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("previewPost"))?.banners[2] ||
      post?.banners[2] ||
      ""
    );
  });

  const upload_presets = "j0hj8hjd";
  const api_key = "984292171139147";

  useEffect(() => {
    if (post?.banners[0] === "") {
      setBlockOneUpdate(false);
    }
    if (post?.banners[1] === "") {
      setBlockTwoUpdate(false);
    }
    if (post?.banners[2] === "") {
      setBlockThreeUpdate(false);
    }
  }, [post?.banners]);

  const handleUpdateBannersOne = async (e) => {
    const filesOne = e.target.files[0];

    if (filesOne) {
      const imgFormat = filesOne?.type?.split("/").splice(1, 1).join();
      const acceptFormat = e.target.accept.split(",.");
      const results = acceptFormat.find((el) => el === imgFormat);

      if (results) {
        const formData = new FormData();
        formData.append("file", filesOne);
        formData.append("api_key", api_key);
        formData.append("upload_preset", upload_presets);

        try {
          setUpdate(true);
          const data = await postImg(formData);

          if (post?.banners[0]?.length !== 0) {
            setPost((prev) => ({
              ...post,
              banners: prev.banners.toSpliced(0, 1, data?.data?.url),
            }));
            setImgOneURL(data?.data?.url);

            return;
          }
        } catch (error) {
          ToastError(error.message);
        } finally {
          setUpdate(false);
        }
        return;
      }
      ToastError("Photo has not suitable format");
    }
  };

  const handleUpdateBannersTwo = async (e) => {
    const filesOne = e.target.files[0];

    if (filesOne) {
      const imgFormat = filesOne?.type?.split("/").splice(1, 1).join();
      const acceptFormat = e.target.accept.split(",.");
      const results = acceptFormat.find((el) => el === imgFormat);

      if (results) {
        const formData = new FormData();
        formData.append("file", filesOne);
        formData.append("api_key", api_key);
        formData.append("upload_preset", upload_presets);

        try {
          setUpdate(true);
          const data = await postImg(formData);
          if (post?.banners[1]?.length !== 0) {
            setPost((prev) => ({
              ...post,
              banners: prev.banners.toSpliced(1, 1, data?.data?.url),
            }));

            setImgTwoURL(data?.data?.url);
            return;
          }
        } catch (error) {
          ToastError(error.message);
        } finally {
          setUpdate(false);
        }
        return;
      }
      ToastError("Photo has not suitable format");
    }
  };

  const handleUpdateBannersThree = async (e) => {
    const filesOne = e.target.files[0];

    if (filesOne) {
      const imgFormat = filesOne?.type?.split("/").splice(1, 1).join();
      const acceptFormat = e.target.accept.split(",.");
      const results = acceptFormat.find((el) => el === imgFormat);

      if (results) {
        const formData = new FormData();
        formData.append("file", filesOne);
        formData.append("api_key", api_key);
        formData.append("upload_preset", upload_presets);

        try {
          setUpdate(true);
          const data = await postImg(formData);

          if (post?.banners[2]?.length !== 0) {
            setPost((prev) => ({
              ...post,
              banners: prev.banners.toSpliced(2, 1, data?.data?.url),
            }));
            setImgThreeURL(data?.data?.url);
            return;
          }
        } catch (error) {
          ToastError(error.message);
        } finally {
          setUpdate(false);
        }
        return;
      }
      ToastError("Photo has not suitable format");
    }
  };

  const handleAddBaner = async (e) => {
    const filesOne = e.target.files[0];

    if (filesOne) {
      const imgFormat = filesOne?.type?.split("/").splice(1, 1).join();
      const acceptFormat = e.target.accept.split(",.");
      const results = acceptFormat.find((el) => el === imgFormat);

      if (results) {
        const formData = new FormData();
        formData.append("file", filesOne);
        formData.append("api_key", api_key);
        formData.append("upload_preset", upload_presets);
        try {
          setUpdate(true);
          const data = await postImg(formData);

          if (post?.banners?.length === 0 || post?.banners[0]?.length === 0) {
            addOneImg(data);
            return;
          }

          if (post?.banners?.length === 1 || post?.banners[1]?.length === 0) {
            addTwoImg(data);
            return;
          }

          if (post?.banners?.length === 2 || post?.banners[2]?.length === 0) {
            addThreeImg(data);
            return;
          }
        } catch (error) {
          ToastError(error.message);
        } finally {
          setUpdate(false);
        }
        return;
      }
      ToastError("Photo has not suitable format");
    }
  };

  const addOneImg = (data) => {
    if (post?.banners[0]?.length === 0) {
      setImgOneURL(data?.data?.url);
      setBlockOneUpdate(true);

      return setPost((prev) => ({
        ...post,
        banners: prev.banners.toSpliced(0, 1, data?.data?.url),
      }));
    }

    setImgOneURL(data?.data?.url);
    setBlockOneUpdate(true);
    return setPost((prev) => ({
      ...post,
      banners: [...prev.banners, data?.data?.url],
    }));
  };

  const addTwoImg = (data) => {
    if (post?.banners[1]?.length === 0) {
      setImgTwoURL(data?.data?.url);
      setBlockTwoUpdate(true);
      return setPost((prev) => ({
        ...post,
        banners: prev.banners.toSpliced(1, 1, data?.data?.url),
      }));
    }

    setImgTwoURL(data?.data?.url);
    setBlockTwoUpdate(true);
    return setPost((prev) => ({
      ...post,
      banners: [...prev.banners, data?.data?.url],
    }));
  };

  const addThreeImg = (data) => {
    if (post?.banners[2]?.length === 0) {
      setImgThreeURL(data?.data?.url);
      setBlockThreeUpdate(true);
      return setPost((prev) => ({
        ...post,
        banners: prev.banners.toSpliced(2, 1, data?.data?.url),
      }));
    }

    setImgThreeURL(data?.data?.url);
    setBlockThreeUpdate(true);
    return setPost((prev) => ({
      ...post,
      banners: [...prev.banners, data?.data?.url],
    }));
  };

  const handleRemoveImg = (e) => {
    switch (e) {
      case imgOneURL:
        // eslint-disable-next-line no-case-declarations
        const deleteOneImg = post.banners.filter((el) => el !== imgOneURL);

        setPost((prev) => ({
          ...post,
          banners: prev.banners.toSpliced(0, 1, ""),
        }));
        setImgOneURL("");
        setBlockOneUpdate(false);
        break;

      case imgTwoURL:
        // eslint-disable-next-line no-case-declarations
        const deleteTwoImg = post.banners.filter((el) => el !== imgTwoURL);

        setPost((prev) => ({
          ...post,
          banners: prev.banners.toSpliced(1, 1, ""),
        }));
        setImgTwoURL("");
        setBlockTwoUpdate(false);
        break;

      case imgThreeURL:
        // eslint-disable-next-line no-case-declarations
        const deleteThreeImg = post.banners.filter((el) => el !== imgThreeURL);

        setPost((prev) => ({
          ...post,
          banners: prev.banners.toSpliced(2, 1, ""),
        }));
        setImgThreeURL("");
        setBlockThreeUpdate(false);
        break;

      default:
        post.banners[e] = "";
        break;
    }
  };

  return (
    <>
      {update && <p>Photo downloаding</p>}
      <ToastContainer />
      <ul className={`${css.addPhoto_container} dark:bg-gray`}>
        <p className={`${css.title} ${css.overBanner}`}>Add banners</p>
        <li className={css.addPhoto_item}>
          <label>
            {imgOneURL ? (
              <img
                src={imgOneURL}
                alt="addBaner"
                className={`${css.banner} 
                    `}
              />
            ) : (
              <img src={add} alt="addBaner" />
            )}

            {!blockOneUpdate && (
              <input
                className={css.addPhoto}
                type="file"
                accept="image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf"
                onChange={handleAddBaner}
                // onChange={handleAddBanerOne}
              />
            )}
          </label>
          {imgOneURL && (
            <div className={css.img_menu_container}>
              <div
                className={css.img_menu}
                onClick={() => handleRemoveImg(imgOneURL)}
              >
                <img src={remove} alt="remove" />
              </div>
              <div className={css.img_menu}>
                <label>
                  <img src={updateImg} alt="update" />
                  <input
                    className={css.addPhoto}
                    type="file"
                    accept="image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf"
                    onChange={handleUpdateBannersOne}
                  />
                </label>
              </div>
            </div>
          )}
        </li>

        <li className={css.addPhoto_item}>
          <label>
            {imgTwoURL ? (
              <img src={imgTwoURL} alt="addBaner" className={css.banner} />
            ) : (
              <img src={add} alt="addBaner" />
            )}
            {!blockTwoUpdate && (
              <input
                className={css.addPhoto}
                type="file"
                accept="image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf"
                onChange={handleAddBaner}
                // onChange={handleAddBanerTwo}
              />
            )}
          </label>

          {imgTwoURL && (
            <div className={css.img_menu_container}>
              <div
                className={css.img_menu}
                onClick={() => handleRemoveImg(imgTwoURL)}
              >
                <img src={remove} alt="remove" />
              </div>
              <div className={css.img_menu}>
                <label>
                  <img src={updateImg} alt="update" />
                  <input
                    className={css.addPhoto}
                    type="file"
                    accept="image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf"
                    onChange={handleUpdateBannersTwo}
                  />
                </label>
              </div>
            </div>
          )}
        </li>
        <li className={css.addPhoto_item}>
          <label>
            {imgThreeURL ? (
              <img src={imgThreeURL} alt="addBaner" className={css.banner} />
            ) : (
              <img src={add} alt="addBaner" />
            )}
            {!blockThreeUpdate && (
              <input
                className={css.addPhoto}
                type="file"
                accept="image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf"
                onChange={handleAddBaner}
                // onChange={handleAddBanerThree}
              />
            )}
          </label>

          {imgThreeURL && (
            <div className={css.img_menu_container}>
              <div
                className={css.img_menu}
                onClick={() => handleRemoveImg(imgThreeURL)}
              >
                <img src={remove} alt="remove" />
              </div>
              <div className={css.img_menu}>
                <label>
                  <img src={updateImg} alt="update" />
                  <input
                    className={css.addPhoto}
                    type="file"
                    accept="image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf"
                    onChange={handleUpdateBannersThree}
                  />
                </label>
              </div>
            </div>
          )}
        </li>

        {!imgOneURL && !imgTwoURL && !imgThreeURL ? (
          <p className={`${css.underBanner} dark:text-white`}>
            Supported types of images: JPEG, PNG, GIF, WEBP, SVG. <br /> You can
            upload up to 3 images. Recommended image size 1080x1080
          </p>
        ) : (
          <p className={`${css.underBanner} dark:text-white`}>
            You first picture will be the main picture.
          </p>
        )}
      </ul>
    </>
  );
};

AddBanner.propTypes = {
  setPost: PropTypes.func,
  post: PropTypes.object,
};
