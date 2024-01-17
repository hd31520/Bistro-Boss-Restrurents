import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import './featured.css'
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-8 my-20'>
            <SectionTitle
            heading='Features Item'
            subheading='Cheick it Out'
            ></SectionTitle>

            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />

                </div>
                {/* second */}
                <div className='md:ml-10 text-white'>
                    <p>March 20, 2024 </p>
                    <p>WHERE CAN I GET SOME? </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Featured;