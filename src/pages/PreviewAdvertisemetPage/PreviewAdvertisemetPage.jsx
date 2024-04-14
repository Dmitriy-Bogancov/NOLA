import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { useState } from "react";
import { HandleFormConfig } from "../../components/HandleFormConfig/HandleFormConfig";

import css from "./PreviewAdvertisemetPage.module.css";
import { PostsAdverticer } from "../../components/PostsAdverticer/PostsAdverticer";

const PreviewAdvertisemetPage = ({ post, setPreview }) => {
  const [formConfig, setFormConfig] = useState(false);

  const handleConfirmClick = () => {
    setFormConfig(true);
  };

  const handleBack = () => {
    setPreview(false)
  }

  return (
    <div>
      {formConfig && (
        <HandleFormConfig
          message={"Sucsessfull add a new advertisement"}
          navigatePage={"/main/accountAdverticer"}
        />
      )}

      <div className={css.top_container}>
        <GoBackButton to="/main/addPost" imgSrc={back} imgAlt="Go back"  onClick={handleBack}/>
        <h1 className={css.title}>Advertisement preview</h1>
      </div>

      {
        /* { post?.map(() => ( */
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={css.swiper_container}
          >
            {[...Array(3)].map((slide, idx) => (
              <SwiperSlide
                key={idx}
                style={{
                  width: "80%",
                }}
                className={css.swiper_slide}
              >
                <img src={slide} alt="" className={css.img} />
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

          <PostsAdverticer />
        </>
        //       {/* )
        // )  */}
      }

<div className={css.btn_container}>
        <button type="button" className={css.btn} onClick={handleConfirmClick}>
         <span className={css.btn_back}> Back to editing</span>
        </button>
  
        <button type="button" className={`${css.btn} ${css.btn_active}`} onClick={handleConfirmClick}>
          <span className={css.btn_back_active}>Publish</span>
        </button>
</div>
    </div>
  );
};

export default PreviewAdvertisemetPage;

PreviewAdvertisemetPage.propTypes = {
  post: PropTypes.object,
  setPreview: PropTypes.bool,
};
