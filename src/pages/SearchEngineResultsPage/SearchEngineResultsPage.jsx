import css from "./SearchEngineResultsPage.module.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const SearchEngineResultsPage = () => {
    return (
        <div>
            
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
        {[...Array(6)].map((slide, idx) => (
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
</div>
    )
}

export default SearchEngineResultsPage