import { useNavigate, useParams } from "react-router-dom";
import css from "./AdvertiserDetailsPage.module.css";
import Layout from "../../components/Layout/Layout";
import { Advertiser } from "../../components/Advertiser/Advertiser";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { useEffect, useState } from "react";
import { PostsAdverticer } from "../../components/PostsAdverticer/PostsAdverticer";
import { getAllPostApi } from "../../services/https/https";

const AdvertiserDetailsPage = () => {
  const { advertiserId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showPost, setShowPost] = useState(false);

  //  useEffect(() => {
  //     http://${advertiserId}
  // }, [])

  useEffect(() => {
    const getData = (async () => {
      // const data = await getAccountIdApi(advertiserId);
      const { data } = await getAllPostApi();
      setData(data);
    })();
  }, []);

  const handleBack = () => {
    setShowPost(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePost = (id) => {
    setShowPost(data.filter((item) => item.id === id));
  };

  return (
    <div className={css.container}>
      <h1>AdvertiserDetailsPage</h1>

      <div onClick={handleGoBack}>
        <GoBackButton
          imgAlt="Go back"
          imgWidth="50px"
          imgHeight="50px"
          title="Friendly Study"
        />
      </div>

      <Advertiser data={data} />

      <p className={css.hero_title}>Publication</p>

      <ul className={css.card}>
        {!showPost &&
          data?.map(({ id, title, description, banners }) => (
            <li key={id} className={css.post_container}>
              <img
                src={banners}
                alt="banner"
                className={css.img}
                onClick={() => handlePost(id)}
              />
              <h2 className={css.title}>{title}</h2>
            </li>
          ))}
      </ul>

      <ul className={css.list}>
        {showPost &&
          showPost?.map(({ id, title, description, banners, links }) => (
            <li key={id}>
              <div className={css.top_container}>
                <GoBackButton
                  imgAlt="Go back"
                  imgWidth="50px"
                  imgHeight="50px"
                  onClick={handleBack}
                />

                <p className={css.return}>Return to the feed</p>
              </div>
              <img src={banners} alt="" className={css.img} />
              <PostsAdverticer
                id={id}
                title={title}
                description={description}
                links={links}
                banner={banners}
                setShowPost={setShowPost}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AdvertiserDetailsPage;
