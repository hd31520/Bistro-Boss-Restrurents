import React from 'react';





import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



import 'swiper/css/autoplay'

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';



const Banner = () => {
    const images = [
        {image: img1, Name: 'tripple!'}, 
        {image: img2, Name: 'tripple!'}, 
        {image: img3, Name: 'tripple!'}, 
        {image: img4, Name: 'tripple!'}, 
        {image: img5, Name: 'tripple!'}, 
        {image: img6, Name: 'tripple!'}]
    return (

        <>
        <Carousel autoPlay interval="3000"  infiniteLoop >
            {
                images.map(item => <div>
                    <img src={item.image} />
                   
                </div>)
            }
                
                
            </Carousel>




    
      
    </>



        
    );
};

export default Banner;