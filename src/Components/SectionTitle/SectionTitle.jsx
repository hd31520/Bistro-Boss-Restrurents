import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='mx-auto md:w-5/12 py-8'>
            <p className='text-yellow-600 text-center'>---{subheading}---</p>
            <h3 className='text-4xl uppercase  text-center'>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;