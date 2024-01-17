import React from 'react';
import card from '../../../assets/home/slide1.jpg'

const Card = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={card} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">SCaeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;