import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./PeopleAboutUs.scss";

// import required modules
import { Pagination } from "swiper";

function PeopleAboutUs() {
  return (
    <div className="people_about_us-bg">
      <h6>LJUDI O NAMA</h6>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial">
            <div className="item-testimonial">
              <h3>Vrlo dobra ekipa!!!</h3>
              <p>Dragan Jonic</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="item-testimonial">
              <h3>Vrlo dobra ekipa!!!</h3>
              <p>Dragan Jonic</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="item-testimonial">
              <h3>Vrlo dobra ekipa br!!!</h3>
              <p>Dragan SJonic</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PeopleAboutUs;
