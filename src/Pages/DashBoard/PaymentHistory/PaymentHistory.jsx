import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments =[] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    console.log(payments)
    return (
        <div>
            <h2 className='text-3xl'>Total Payments : {payments?.length} </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Price</th>
                                <th>Transation Id</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            payments.map((payment, idx) =><tr key={payment._id}>
                            <th>{idx + 1}</th>
                           
                            <td> ${payment.price}</td>
                            <td>{payment.transitionId}</td>
                            <td>{payment.status}</td>
                        </tr> )
                          }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;