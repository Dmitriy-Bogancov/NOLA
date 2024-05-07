import css from "./DraftsPage.module.css";
import addDrafts from "../../assets/icons/add_drafts.svg";
import edit from "../../assets/icons/edit.svg";
import deletePost from "../../assets/icons/deletePost.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DraftsPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = (async () => {
      try {
        // const {data} = await getDraftPost()
        // setData(data)
        setData(JSON.parse(localStorage.getItem("backend")));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleAddPost = () => {
    navigate("/main/addPost");
  };

  const handleEditPost = (idPost) => {
    navigate(`/main/addPost/${idPost}`);
  };

  const handleDeletePost = (idPost) => {
    console.log("handleDeletePost", idPost);
  };

  return (
    <div className={css.drafts_container}>
      <p className={css.title}>Add an advertisement</p>
      <div className={css.draftsList_container}>
        <ul className={css.drafts_list}>
          <li
            className={`${css.drafts_item} ${css.drafts_add}`}
            onClick={handleAddPost}
          >
            <img
              src={addDrafts ?? ""}
              alt="addDrafts"
              className={css.drafts_add_img}
            />
          </li>

          {data &&
            [data]?.map((_, idx) => (
              <li key={idx} className={css.drafts_item}>
                <img
                  src={data?.banner[0]?.img}
                  alt=""
                  className={`${css.drafts_img} ${css.img_back}`}
                />

                <p className={css.count}>12 days</p>

                <div className={css.settingPost_container}>
                  <img
                    src={edit}
                    alt="edit post"
                    className={css.edit}
                    onClick={() => handleEditPost(idx)}
                  />
                  <img
                    src={deletePost}
                    alt="delete post"
                    onClick={() => handleDeletePost(idx)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>

      <p className={css.attention}>
        Drafts are stored for 14 days. After that, they are permanently deleted.
      </p>
    </div>
  );
};

export default DraftsPage;
