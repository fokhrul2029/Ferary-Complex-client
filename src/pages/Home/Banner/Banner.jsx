// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../Slider/Slider";

function Banner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/banner.json")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Swiper
        pagination={true}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item._id}>
            {" "}
            <Slider slides={item} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
