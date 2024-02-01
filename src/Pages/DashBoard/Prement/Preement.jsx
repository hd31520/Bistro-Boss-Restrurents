import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheickOutFrom from './CheickOutFrom';




// TODO : add publushable key 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Preement = () => {
    return (
        <div>
            <SectionTitle heading="Prement" subheading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheickOutFrom></CheickOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Preement;