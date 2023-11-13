import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "./../../assets/home/slide1.jpg";
import slide2 from "./../../assets/home/slide2.jpg";
import slide3 from "./../../assets/home/slide3.jpg";
import slide4 from "./../../assets/home/slide4.jpg";
import slide5 from "./../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle";

const Categories = () => {
  return (
    <div className=" w-11/12   mx-auto my-10 md:my-20">
      <section>
      <SectionTitle subHeading={'---From 11.00am to 10.00pm---'} heading={'ORDER ONLINE '} ></SectionTitle>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className=" w-full lg:h-[450px] " src={slide1} />{" "}
            <h3 className=" md:text-3xl text-center text-white relative bottom-10 md:bottom-16 uppercase">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full  lg:h-[450px] " src={slide2} />{" "}
            <h3 className=" md:text-3xl text-center text-white relative bottom-10 md:bottom-16 uppercase">
              Pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full  lg:h-[450px] " src={slide3} />{" "}
            <h3 className=" md:text-3xl text-center text-white relative bottom-10 md:bottom-16 uppercase">
              Soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full  lg:h-[450px] " src={slide4} />{" "}
            <h3 className=" md:text-3xl text-center text-white relative bottom-10 md:bottom-16 uppercase">
              Desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-full  lg:h-[450px] " src={slide5} />{" "}
            <h3 className=" md:text-3xl text-center text-white relative bottom-10 md:bottom-16 uppercase">
              Salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Categories;



