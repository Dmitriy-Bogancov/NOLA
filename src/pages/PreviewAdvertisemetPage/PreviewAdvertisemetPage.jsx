import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./PreviewAdvertisemetPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { PostsAdverticer } from "../../components/PostsAdverticer/PostsAdverticer";
import { MessagePostOnModeration } from "../../components/MessagePostOnModeration/MessagePostOnModeration";
import { Banners } from "../../components/Banners/Banners";



const PreviewAdvertisemetPage = ({ setPreview }) => {
  const navigate = useNavigate();
  const [validForm, setValidForm] = useState(false);
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem("previewPost")) || "";
  });

  const [postSuccessfullyAdded, setPostSuccessfullyAdded] = useState(false);

  useEffect(() => {
    if (data.title !== "" && data.category !== "" && data.subcategory !== "") {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [data.category, data.subcategory, data.title]);

  const handleConfirmClick = () => {
    setPostSuccessfullyAdded(true);
    localStorage.removeItem("previewPost");
    localStorage.removeItem("filterCategory");

    setTimeout(() => {
      navigate("/main");
    }, 3000);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {console.log("setPreview", data)}
      {postSuccessfullyAdded && <MessagePostOnModeration />}
      {!postSuccessfullyAdded && (
        <>
        <div className={css.preview_container}>
          <div className={css.previewMain}>
            <p className={css.title}>Advertisement preview</p>

            {/* {data && <Banners banner={data} />} */}

            {data &&
              [data]?.map(({ banners }) => (
                <>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                      clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className={css.swiper_container}
                  >
                    {banners[0] && (
                      <SwiperSlide
                        style={{
                          width: "80%",
                        }}
                        className={css.swiper_slide}
                      >
                        {console.log(banners)}
                        <img src={banners[0]} alt="" className={css.img} />
                      </SwiperSlide>
                    )}

                    {banners[1] && (
                      <SwiperSlide
                        style={{
                          width: "80%",
                        }}
                        className={css.swiper_slide}
                      >
                        {console.log(banners)}
                        <img src={banners[1]} alt="" className={css.img} />
                      </SwiperSlide>
                    )}

                    {banners[2] && (
                      <SwiperSlide
                        style={{
                          width: "80%",
                        }}
                        className={css.swiper_slide}
                      >
                        {console.log(banners)}
                        <img src={banners[2]} alt="" className={css.img} />
                      </SwiperSlide>
                    )}
           
                    <div className="slider-controler">
                      <div
                        className="swiper-button-prev slider-arrow"
                        style={{ color: "transparent" }}
                      ></div>
                      <div
                        className="swiper-button-next slider-arrow"
                        style={{ color: "transparent" }}
                      ></div>

                      <div
                        className="swiper-pagination"
                        style={{
                          position: "relative",
                          bottom: "2px",
                        }}
                      ></div>
                    </div>
                  </Swiper>
                  {[data]?.map(({ title, description, links }) => (
                    <>
                      <PostsAdverticer
                        title={title}
                        description={description}
                        links={links}
                      />
                    </>
                  ))}
                </>
              ))}
          </div>
          </div>

          <div className={css.btn_container}>
          <button
            type="button"
            className={`${css.btn_back_container}`}
            onClick={handleBack}
            >
              <span
                className={`${css.btn_back} dark:text-white dark:border-white`}
              >
                Back to editing
              </span>
            </button>

            <button
              type="button"
              className={`${css.btn} ${
                validForm ? css.btn_active : css.btn_disabled
              }`}
              disabled={validForm ? false : true}
              onClick={handleConfirmClick}
            >
              <span className={css.btn_back_active}>Publish</span>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PreviewAdvertisemetPage;

PreviewAdvertisemetPage.propTypes = {
  post: PropTypes.object,
  setPreview: PropTypes.bool,
};
