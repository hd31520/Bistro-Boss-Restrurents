import React from 'react';
import Card from './Card';

const Recommended = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mx-auto justify-center items-center'>

            <Card></Card>
            <Card></Card>
            <Card></Card>
            
        </div>
    );
};

export default Recommended;