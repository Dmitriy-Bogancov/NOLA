import css from "./Banners.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import PropTypes from "prop-types";

export const Banners = ({ key, banner }) => {
  return (
    <>
      {banner &&
        [banner]?.map(({ banners }) => (
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
                  key={banners[0]}
                  style={{
                    width: "80%",
                  }}
                  className={css.swiper_slide}
                >
                  <img src={banners[0]} alt="" className={css.img} />
                </SwiperSlide>
              )}

              {banners[1] && (
                <SwiperSlide
                  key={banners[1]}
                  style={{
                    width: "80%",
                  }}
                  className={css.swiper_slide}
                >
                  <img src={banners[1]} alt="" className={css.img} />
                </SwiperSlide>
              )}

              {banners[2] && (
                <SwiperSlide
                  key={banners[2]}
                  style={{
                    width: "80%",
                  }}
                  className={css.swiper_slide}
                >
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
          </>
        ))}
    </>

    // <>
    //   <Swiper
    //     slidesPerView={1}
    //     spaceBetween={30}
    //     loop={true}
    //     pagination={{ el: ".swiper-pagination", clickable: true }}
    //     navigation={{
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //       clickable: true,
    //     }}
    //     modules={[EffectCoverflow, Pagination, Navigation]}
    //     className={css.swiper_container}
    //   >
    //     {banners[0] && (
    //       <SwiperSlide
    //         style={{
    //           width: "80%",
    //         }}
    //         className={css.swiper_slide}
    //       >
    //         {console.log(banners)}
    //         <img src={banners[0]} alt="" className={css.img} />
    //       </SwiperSlide>
    //     )}

    //     {banners[1] && (
    //       <SwiperSlide
    //         style={{
    //           width: "80%",
    //         }}
    //         className={css.swiper_slide}
    //       >
    //         {console.log(banners)}
    //         <img src={banners[1]} alt="" className={css.img} />
    //       </SwiperSlide>
    //     )}

    //     {banners[2] && (
    //       <SwiperSlide
    //         style={{
    //           width: "80%",
    //         }}
    //         className={css.swiper_slide}
    //       >
    //         {console.log(banners)}
    //         <img src={banners[2]} alt="" className={css.img} />
    //       </SwiperSlide>
    //     )}
    //     {/* // ))} */}
    //     <div className="slider-controler">
    //       <div
    //         className="swiper-button-prev slider-arrow"
    //         style={{ color: "transparent" }}
    //       ></div>
    //       <div
    //         className="swiper-button-next slider-arrow"
    //         style={{ color: "transparent" }}
    //       ></div>

    //       <div
    //         className="swiper-pagination"
    //         style={{
    //           position: "relative",
    //           bottom: "2px",
    //         }}
    //       ></div>
    //     </div>
    //   </Swiper>
    // </>
  );
};

Banners.propTypes = {
  key: PropTypes.string,
  banner: PropTypes.object,
};
