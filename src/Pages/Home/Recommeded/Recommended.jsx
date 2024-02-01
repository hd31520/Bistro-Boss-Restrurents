import React from 'react';
import Card from './Card';

const Recommended = () => {
    return (
        <div className='grid grid-cols-1 mx-auto md:grid-cols-3  justify-center items-center'>

            <Card></Card>
            <Card></Card>
            <Card></Card>
            
        </div>
    );
};

export default Recommended;