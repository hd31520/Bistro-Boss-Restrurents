import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='mx-auto md:w-4/12 my-8'>
            <p className='text-yellow-600 mb-2 text-center'>---{subheading}---</p>
            <h3 className='text-4xl uppercase border-y-4 py-4 text-center'>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;