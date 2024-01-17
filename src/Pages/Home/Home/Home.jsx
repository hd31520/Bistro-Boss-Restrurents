import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Categories/Category';
import PopularMenu from '../Popular/PopularMenu';
import Featured from '../Featuresd/Featured';
import Testimonials from '../Testimonials/Testimonials';
import Background from '../Bacgrund/Background';
import Number from '../Numbe/Number';
import Recommended from '../Recommeded/Recommended';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro  Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            
            <div className='py-3'>
            <Category></Category>
            <Background></Background>
            </div>
            <PopularMenu></PopularMenu>
            <Number className="text-white"></Number>
            <Recommended></Recommended>
            <Featured></Featured>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;