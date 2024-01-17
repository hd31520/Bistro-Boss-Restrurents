import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';





// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import comma from '../../../assets/home/comma/quote-left 1.png'

const Testimonials = () => {

    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setreviews(data))

    }, [])



    return (
        <div>
            <section>
                <SectionTitle
                    subheading="What Our Client Say"
                    heading="Testimonials"

                ></SectionTitle>
            </section>
            <section className=' '>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >

                    <div className=''>
                    {
                        reviews.map(review => <SwiperSlide Key={review._id}>
                            <div className='flex flex-col items-center justify-center mx-24 my-16'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img style={{height: '100px', width: '100px'}} src={comma} alt="" />
                                <p className='py-4'>{review.details}</p>
                                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                            </div>



                        </SwiperSlide>)
                    }
                    </div>

                   
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;