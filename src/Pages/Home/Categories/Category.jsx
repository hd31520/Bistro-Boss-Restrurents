import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';


import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';



// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';




const Category = () => {

    const slides = [
        {image: img1, name: 'SALAD'},
        {image: img2, name: 'PIZZA'},
        {image: img3, name: 'SOUP'},
        {image: img4, name: 'CAKE'},
        {image: img5, name: 'Desert'}
    ]



    return (
        <>
        <SectionTitle heading={"ORDER ONLINE"} subheading={"From 11:00am to 10:00pm"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                   slides.map(item => <SwiperSlide>
                    <div>
                        <img src={item.image} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>{item.name}</h3>
                    </div>
                </SwiperSlide>) 
                }
                

            </Swiper>

        </>
    );
};

export default Category;