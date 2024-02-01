import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';




const TabDetails = ({ items }) => {


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };



    const Length = items.length;
    const pageNumber = Math.ceil(Length / 6);



    const arrayOfArrays = [];

    // Loop through and create subarrays
    for (let i = 0; i < pageNumber; i++) {
        const start = i * 6;
        const end = start + 6;
        const subarray = items.slice(start, end);
        arrayOfArrays.push(subarray);
    }

    // console.log(arrayOfArrays);




    return (
        <div>

            <>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        arrayOfArrays.map((arrayes, idx) => <SwiperSlide key={idx}>
                            <div className='grid md:grid-cols-3 gap-10'>
                                {
                                    arrayes.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>


                        </SwiperSlide>)

                    }


                </Swiper>

            </>
            {/* <FoodCard key={item._id} item={item}></FoodCard> */}

        </div>
    );
};

export default TabDetails;