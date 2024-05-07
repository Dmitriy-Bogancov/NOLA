import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import css from "./AddBanner.module.css";
import { Toastify } from "../../services/Toastify/Toastify";
import add from "../../assets/icons/addBaner.svg";
import remove from "../../assets/icons/delete.svg";
import turn from "../../assets/icons/turn.svg";
import { nanoid } from "nanoid";

export const AddBanner = ({ setPost, post }) => {
  const [selestedFile, setSelestedFile] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [formatPost, setFormatPost] = useState(null);

  const [imgOneURL, setImgOneURL] = useState(() => {
    return localStorage.getItem("imgOneURL") ?? "";
    // return JSON.parse(localStorage.getItem("previewPost")) ?? "";
  });
  const [imgTwoURL, setImgTwoURL] = useState(() => {
    return localStorage.getItem("imgTwoURL") ?? "";
    // return JSON.parse(localStorage.getItem("previewPost")) ?? "";
  });
  const [imgThreeURL, setImgThreeURL] = useState(() => {
    return localStorage.getItem("imgThreeURL") ?? "";
    // return JSON.parse(localStorage.getItem("previewPost")) ?? "";
  });
  const [addPostPhoto, setAddPostPhoto] = useState(false);
  const [img, setImg] = useState(false);
  const [addImg, setAddImg] = useState(false);
  const [turnImg, setTurnImg] = useState([]);
  const [turnLengthImg, setTurnLengthImg] = useState(null);

  const fileReader = new FileReader();

  useEffect(() => {
    localStorage.setItem("imgOneURL", imgOneURL);
    localStorage.setItem("imgTwoURL", imgTwoURL);
    localStorage.setItem("imgThreeURL", imgThreeURL);

    // setPost({
    //   ...post,
    //   banner: [
    //     { id: nanoid(), img: imgOneURL },
    //     { id: nanoid(), img: imgTwoURL },
    //     { id: nanoid(), img: imgThreeURL },
    //   ],
    // });
  }, [imgOneURL, imgTwoURL, imgThreeURL, setPost]);

  const handleChange = async (e) => {
    const files = e.target.files;
    // files.map((item) => console.log(item))
    console.log(files);
    const imgFormat = files[0]?.type?.split("/").splice(1, 1).join();
    const acceptFormat = e.target.accept.split(",.");

    const results = acceptFormat.find((el) => el === imgFormat);

    // if (!selestedFile) {
    //   Toastify("Please select a file");
    //   return;
    // }

    //   setImg(files)
    // fileReader.readAsDataURL(files)

    if (results) {
      Toastify("Photo downloаding");
      setSelestedFile(results);

      return;
    }
    Toastify("Photo has not suitable format");
  };

  const handleAddBanerOne = (e) => {
    const filesOne = e.target.files[0];

    if (filesOne) {
      setImg(filesOne);
      fileReader.readAsDataURL(filesOne);

      fileReader.onloadend = () => {
        setPost((prev) => ({
          ...post,
          banner: [...prev.banner, { id: nanoid(), img: fileReader.result }],
        }));
        setImgOneURL(fileReader.result);
      };

      setAddImg(true);
    }
  };

  const handleAddBanerTwo = (e) => {
    const filesTwo = e.target.files[0];

    if (filesTwo) {
      setImg(filesTwo);
      fileReader.readAsDataURL(filesTwo);

      fileReader.onloadend = () => {
        setPost((prev) => ({
          ...post,
          banner: [...prev.banner, { id: nanoid(), img: fileReader.result }],
        }));

        setImgTwoURL(fileReader.result);
      };

      setAddImg(true);

      return;
    }
  };

  const handleAddBanerThree = (e) => {
    const filesThree = e.target.files[0];

    if (filesThree) {
      setImg(filesThree);
      fileReader.readAsDataURL(filesThree);

      fileReader.onloadend = () => {
        setPost((prev) => ({
          ...post,
          banner: [...prev.banner, { id: nanoid(), img: fileReader.result }],
        }));

        setImgThreeURL(fileReader.result);
      };

      setAddImg(true);
      return;
    }
  };

  const handleRemoveImg = (e) => {
    let deleteImg = null;
    switch (e) {
      case "imgOneURL":
        deleteImg = post.banner.filter(({ img }) => img !== imgOneURL);

        // setImgOneURL(fileReader.result);

        setPost((prev) => ({
          ...post,
          banner: [...deleteImg],
        }));

        localStorage.removeItem("imgOneURL");
        setImgOneURL("");
        break;

      case "imgTwoURL":
        deleteImg = post.banner.filter(({ img }) => img !== imgTwoURL);
        // setImgTwoURL(fileReader.result);

        setPost((prev) => ({
          ...post,
          banner: [...deleteImg],
        }));

        localStorage.removeItem("imgTwoURL");
        setImgTwoURL("");
        break;

      case "imgThreeURL":
        deleteImg = post.banner.filter(({ img }) => img !== imgThreeURL);
        // setImgThreeURL(fileReader.result);

        setPost((prev) => ({
          ...post,
          banner: [...deleteImg],
        }));
        localStorage.removeItem("imgThreeURL");
        setImgThreeURL("");
        break;

      default:
        post.banner[e] = "";
        break;
    }
  };

  const handleTurnImg = (e) => {
    console.log(e);

    setTurnImg((prev) => prev + 1);
    setTurnLengthImg(turnImg.length);
  };

  const handleAddPost = () => {
    setAddPostPhoto(true);
  };

  const handleUploadClick = () => {
    // if (!selestedFile) {
    //   Toastify("Please select a file");
    //   return;
    // }

    // const formAddPostPhoto = new FormData();
    // // file ?
    // formAddPostPhoto.append("file", selestedFile);
    // setUploaded(true);
    // setPost({
    //   ...post,
    //   banner: formAddPostPhoto,
    // });

    // const res = await fetch("", {method: "POST", body: formAddPostPhoto, Authorization: {}})
    // const data = await res.json()
    // setUploaded(data)

    setAddPostPhoto(false);
  };

  return (
    <ul className={css.addPhoto_container}>
      <p className={`${css.title} ${css.overBanner}`}>Add banners</p>

      <li className={css.addPhoto_item}>
        <label>
          {imgOneURL ? (
            <img
              src={imgOneURL}
              alt="addBaner"
              className={`${css.banner}  ${
                turnImg.length > turnLengthImg && css.turn
              } 
              `}
            />
          ) : (
            <img src={add} alt="addBaner" />
          )}

          <input
            className={css.addPhoto}
            type="file"
            accept="image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf"
            // onChange={handleChange}
            onChange={handleAddBanerOne}
          />
        </label>
        {imgOneURL && (
          <div className={css.img_menu_container}>
            <div
              className={css.img_menu}
              onClick={() => handleRemoveImg("imgOneURL")}
            >
              <img src={remove} alt="remove" />
            </div>
            <div
              className={css.img_menu}
              onClick={
                handleTurnImg
                // styles={{transform: "rotate(90deg)"}}
              }
            >
              <img src={turn} alt="turn" />
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
          <input
            className={css.addPhoto}
            type="file"
            accept="image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf"
            onChange={handleAddBanerTwo}
          />
        </label>

        {imgTwoURL && (
          <div className={css.img_menu_container}>
            <div
              className={css.img_menu}
              onClick={() => handleRemoveImg("imgTwoURL")}
            >
              <img src={remove} alt="remove" />
            </div>
            <div className={css.img_menu}>
              <img src={turn} alt="turn" />
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
          <input
            className={css.addPhoto}
            type="file"
            accept="image/*  ,.png,.jpg,.jpeg,.gif,.webp,.svg,.pdf"
            onChange={handleAddBanerThree}
          />
        </label>

        {imgThreeURL && (
          <div className={css.img_menu_container}>
            <div
              className={css.img_menu}
              onClick={() => handleRemoveImg("imgThreeURL")}
            >
              <img src={remove} alt="remove" />
            </div>
            <div className={css.img_menu}>
              <img src={turn} alt="turn" />
            </div>
          </div>
        )}
      </li>

      {!imgOneURL && !imgTwoURL && !imgThreeURL ? (
        <p className={css.underBanner}>
          Supported types of images: JPEG, PNG, GIF, WEBP, SVG. <br /> You can
          upload up to 3 images.
        </p>
      ) : (
        <p className={css.underBanner}>
          You first picture will be the main picture.
        </p>
      )}
    </ul>
  );
};

AddBanner.propTypes = {
  setPost: PropTypes.func,
  post: PropTypes.object,
};
