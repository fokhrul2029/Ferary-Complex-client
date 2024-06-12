// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Slider from "../Slider/Slider";
import { useQuery } from "@tanstack/react-query";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Loader from "../../../components/Loader/Loader";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";

function Banner() {
  const axiosPublic = useAxiosPublic();

  const { isPending, data } = useQuery({
    queryKey: ["slides"],
    queryFn: async () => {
      const res = await axiosPublic.get("/slides");
      return res.data;
    },
  });

  if (isPending) return <Loader />;

  return (
    <div>
      <Swiper
        pagination={true}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <Slider slides={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
