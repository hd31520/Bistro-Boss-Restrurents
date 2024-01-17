import React, { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import TabDetails from '../TabDetails/TabDetails';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desert', 'drinks'];
    const { category } = useParams();
    const initailIndex = category ? categories.indexOf(category) : 0;

    const [tabIndex, setTabIndex] = useState(initailIndex);
    const [menu] = useMenu();







    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>
            <Helmet>
                <title>Bistro  Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title={"OUR SHOP"} desc={"Would you like to try a dish?"}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex justify-center items-center">
                    <Tab>Salad</Tab>
                    <Tab>Prizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>

                </TabList>
                <TabPanel>
                    <div className=' py-10'>
                        <TabDetails items={salad} ></TabDetails> 

                    </div>
                </TabPanel>

                <TabPanel>
                    <div className=''>
                        
                         <TabDetails items={pizza} ></TabDetails> 
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className=''>
                        
                        <TabDetails items={soup} ></TabDetails> 
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=''>
                       
                        <TabDetails items={dessert} ></TabDetails>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className=''>
                       
                        <TabDetails items={drinks} ></TabDetails>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;