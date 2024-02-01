import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';

const CheickOutFrom = () => {
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const { user } = useAuth();
    const navigate = useNavigate()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)




    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-prement-intent', { price: totalPrice })
                .then(res => {
                    console.log("client Secret", res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("");
        }

        // confirm Prement
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm Error')
        }
        else {
            console.log('prement intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transition id ', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                const payment = {
                    email: user.email,
                    transitionId: paymentIntent.id,
                    price: totalPrice,
                    date: new Date(),
                    cartId: cart.map(item => item._id),
                    menuID: cart.map(item => item.menuId),
                    status: ' pending'
                }

                // const {data:payments , refetch} = useQuery({
                //     queryKey: ['payments', payment],
                //     queryFn: async() => {

                //         return res.data
                //     }
                // })
                const res = await axiosSecure.post('/payments', payment);

                refetch()
                console.log('payment result', res.data?.paymentResult?.insertedId);
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thanks for prached",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                    navigate('/dashboard/paymennthistory')
                }
            }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-red-600'>{error}</p>
            {
                transactionId && <p className='text-green-600'> Your Transation Id is {transactionId} </p>
            }

        </form>
    );
};

export default CheickOutFrom;