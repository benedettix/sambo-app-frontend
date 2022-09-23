import React, { useState } from "react";
import "./Photogalery.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Photogalery.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import blogServices from "../../services/blogServices";
import { setLoader } from "../../Redux/features/loaderSlice/loaderSlice";
import { Link } from "react-router-dom";
function Photogalery() {
  const [imgs, setImgs] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchComments = async () => {
      dispatch(setLoader(true));
      try {
        const { data: response } = await blogServices.getImgName();

        setImgs(response);
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    fetchComments();
  }, []);
  return (
    <div className="photogalery-bg">
      <h6>Galerija</h6>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {imgs &&
          imgs.map((img, index) => (
            <SwiperSlide key={index}>
              <Zoom>
                <img src={`images/${img.img_src}`} alt={img.heading} />
              </Zoom>
            </SwiperSlide>
          ))}
      </Swiper>
      <Link to={"/blogovi"} className="small-btn">
        VIDI VIŠE
      </Link>
    </div>
  );
}

export default Photogalery;
