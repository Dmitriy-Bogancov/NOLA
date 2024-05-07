import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { useEffect, useState } from "react";
import { HandleFormConfig } from "../../components/HandleFormConfig/HandleFormConfig";

import css from "./PreviewAdvertisemetPage.module.css";
import { PostsAdverticer } from "../../components/PostsAdverticer/PostsAdverticer";
import { NavLink, useNavigate } from "react-router-dom";
import { MessagePostOnModeration } from "../../components/MessagePostOnModeration/MessagePostOnModeration";

const PreviewAdvertisemetPage = ({ setPreview }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem("previewPost")) ?? "";
  });

  const [postSuccessfullyAdded, setPostSuccessfullyAdded] = useState(false);

  const handleConfirmClick = () => {
    setPostSuccessfullyAdded(true);
    localStorage.removeItem("previewPost");
    localStorage.removeItem("previewPost");
    localStorage.removeItem("imgOneURL");
    localStorage.removeItem("imgTwoURL");
    localStorage.removeItem("imgThreeURL");

    setTimeout(() => {
      navigate("/main");
    }, 3000);
  };

  const handleBack = () => {
    navigate(-1);

    // (localStorage.setItem("previewPost", JSON.stringify()))
    // setPreview(false);
  };

  return (
    <>
      {console.log("setPreview", data)}
      {postSuccessfullyAdded && <MessagePostOnModeration />}
      {!postSuccessfullyAdded && (
        <div>
          {/* <div className={css.top_container}>
            <GoBackButton to="/main/addPost" imgSrc={back} imgAlt="Go back" />
            <p className={css.title}>Advertisement preview</p>
          </div> */}
          <p className={css.title}>Advertisement preview</p>
          {data &&
            [data]?.map(({ banner }) => (
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
                  {banner.map(({ img, id }) => (
                    <SwiperSlide
                      key={id}
                      style={{
                        width: "80%",
                      }}
                      className={css.swiper_slide}
                    >
                      <img src={img} alt="" className={css.img} />
                    </SwiperSlide>
                  ))}
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

                <PostsAdverticer data={data} />
              </>
            ))}

          <div className={css.btn_container}>
            {/* <NavLink to="/main/addPost/"> */}
            <button type="button" className={css.btn} onClick={handleBack}>
              <span className={css.btn_back}> Back to editing</span>
            </button>
            {/* </NavLink> */}

            <button
              type="button"
              className={`${css.btn} ${css.btn_active}`}
              onClick={handleConfirmClick}
            >
              <span className={css.btn_back_active}>Publish</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewAdvertisemetPage;

PreviewAdvertisemetPage.propTypes = {
  post: PropTypes.object,
  setPreview: PropTypes.bool,
};
