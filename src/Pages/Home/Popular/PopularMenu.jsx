import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem';
import useMenu from '../../../Hooks/useMenu';


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    



    return (
        <section className='pb-20'>
            <SectionTitle
            subheading="From Our Menu"
            heading="Popular Item"
            ></SectionTitle>
            <div className='grid px-3 md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem 
                        key={item._id} 
                        item={item}
                        ></MenuItem>)
                }
            </div>
            <div>

            </div>
            
        </section>
    );
};

export default PopularMenu;