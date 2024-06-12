import css from "./DraftsPage.module.css";
import addDrafts from "../../assets/icons/add_drafts.svg";
import edit from "../../assets/icons/edit.svg";
import deletePost from "../../assets/icons/deletePost.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteDraftsPostId, getDraftsPost } from "../../services/https/https";

const DraftsPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = (async () => {
      try {
        // const { data } = await getDraftsPost()
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
    navigate(`/main/drafts/${idPost}`);
  };

  const handleDeletePost = (idPost) => {
    console.log("handleDeletePost", idPost);
    // deleteDraftsPostId()
  };

  return (
    <div className={css.drafts_container}>
      <p className={`${css.title} dark:text-white `}>Add an advertisement</p>
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
            [data]?.map(({ id }) => (
              <li key={id} className={css.drafts_item}>
                <img
                  src={data?.banners[0] || data?.banners[1] || data?.banners[2]}
                  alt=""
                  className={`${css.drafts_img} ${css.img_back}`}
                />

                <p className={css.count}>12 days</p>

                <div className={css.settingPost_container}>
                  <img
                    src={edit}
                    alt="edit post"
                    className={css.edit}
                    onClick={() => handleEditPost(id)}
                  />
                  <img
                    src={deletePost}
                    alt="delete post"
                    onClick={() => handleDeletePost(id)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>

      <p className={`${css.attention} dark:text-white `}>
        Drafts are stored for 14 days. After that, they are permanently deleted.
      </p>
    </div>
  );
};

export default DraftsPage;
