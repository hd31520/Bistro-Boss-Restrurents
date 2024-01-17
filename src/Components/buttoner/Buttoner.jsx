import React from 'react';

const Buttoner = ({name}) => {
    return (
        <div>
            <button className='btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4'>{name}</button>
        </div>
    );
};

export default Buttoner;