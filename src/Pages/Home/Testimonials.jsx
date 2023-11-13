import { Swiper, SwiperSlide } from "swiper/react";
import { FaUtensils } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import SectionTitle from "./../../Components/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data);

  return (
    <div className="mb-20">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map((item) => (
          <SwiperSlide key={item._id}>
            <div className=" text-center mx-auto space-y-2 px-14">
            <FaUtensils className="mx-auto font-bold text-4xl"/>
              <Rating className=" mx-auto" style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <p>{item.details}</p>
              <h2 className="text-2xl text-orange-400 ">{item.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

