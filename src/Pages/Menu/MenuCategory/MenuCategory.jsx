import React from 'react';

import MenuItem from '../../Shared/MenuItem';
import Buttoner from '../../../Components/buttoner/Buttoner';
import { Link } from 'react-router-dom';


const MenuCategory = ({ items,title}) => {





    return (
        <section className='pb-20'>
            
            <div className='grid px-3 md:grid-cols-2 gap-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to={`/order/${title}`}><Buttoner name="Order Your Favorite Item"></Buttoner></Link>
            </div>

        </section>
    );
};

export default MenuCategory;