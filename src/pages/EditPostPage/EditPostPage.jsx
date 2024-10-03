import css from "./EditPostPage.module.css";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { getPostApi, patchPostApi } from "../../services/https/https";
import { ToastContainer } from "react-toastify";
import { ToastError } from "../../services/ToastError/ToastError";
import { CreatePost } from "../../components/CreatePost/CreatePost";

const EditPostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [formConfig, setFormConfig] = useState(false);
  const [data, setData] = useState([]);
  const [post, setPost] = useState(
    data.length !== 0 || {
      description: "",
      title: "",
      category: { index: null, title: "" },
      subcategory: { index: null, title: "" },
      callToAction: "" || "Read more",
      callToActionLinks: "",
      banners: [],
    }
  );

  useEffect(() => {
    const getData = (async () => {
      try {
        const data = await getPostApi(params.editPostId);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();

    localStorage.setItem("previewPost", JSON.stringify(post));
  }, [params, post]);

  const handleChangePost = ({ target }) => {
    const { name, value } = target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    setFormConfig(true); // delete later
    console.log("editPost", post);
    try {
      await patchPostApi(post.id, post);
    } catch (error) {
      ToastError(error.message);
    }
  };

  return (
    <div>
      EditPostPage
      <ToastContainer />
      {/* {formConfig && (
        <HandleFormConfig
          message={"Current post has been edited"}
          navigatePage={"/main/accountAdverticer"}
        />
      )} */}
      <div>
        <form onSubmit={handleSubmitPost}>
          {/* post={data} setPost={setData} */}
          <CreatePost post={post} setPost={setPost} />

          <div className={css.btn_container}>
            <NavLink to="/main/addPost/previewAdvertisemet">
              <button type="button" className={css.btn}>
                <span className={css.btn_back}> Preview</span>
              </button>
            </NavLink>

            <button type="submit" className={`${css.btn} ${css.btn_active}`}>
              <span className={css.btn_back_active}>Publish</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostPage;
