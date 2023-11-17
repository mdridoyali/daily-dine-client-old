/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import FoodCard from '../../Components/FoodCard';
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div >

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid  mx-auto  md:grid-cols-3 gap-10'>
                        {
                            items.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};


export default OrderTab;