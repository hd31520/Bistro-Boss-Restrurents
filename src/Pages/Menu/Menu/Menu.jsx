import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import menuimg from '../../../assets/menu/banner3.jpg';

import dessertimg from '../../../assets/menu/dessert.jpeg';
import saladimg from '../../../assets/menu/salad.jpg';
import soupimg from '../../../assets/menu/soup.jpg';
import pizzaimg from '../../../assets/menu/pizza.jpg';


import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    const lorem = "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    return (
        <div className='flex flex-col gap-10'>
            <Helmet>
                <title>Bistro  Boss | Home</title>
            </Helmet>

            {/* offer */}
            <Cover img={menuimg} title={"Our Menu"} desc={"WOULD YOU LIKE TO TRY A DISH?"}></Cover>
            <SectionTitle
                subheading="Don't miss"
                heading="TODAY'S OFFER"
            ></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>
            {/* Desert */}
            <Cover img={dessertimg} title={"DESSERTS"} desc={lorem}></Cover>
            
            <MenuCategory title={"dessert"} items={dessert}></MenuCategory>

            {/* Prizza */}
            <Cover img={pizzaimg} title={"PIZZA"} desc={lorem}></Cover>
            
            <MenuCategory title={"pizza"} items={pizza}></MenuCategory>

            {/* salad */}
            <Cover img={saladimg} title={"SALAD"} desc={lorem}></Cover>
            
            <MenuCategory title={"salad"} items={salad}></MenuCategory>

            {/* SOUP */}
            <Cover img={soupimg} title={"SOUP"} desc={lorem}></Cover>
            
            <MenuCategory title={"soup"} items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;