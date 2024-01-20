import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';


const FoodCard = ({item}) => {
    const { user} = useAuth();
    const [,refetch] = useCart();
  

    const {name, image, price, recipe, _id} = item;
    const navigate = useNavigate();
    const location = useLocation()
    const axiosSecure = useAxiosSecure();

    const handleAddtoCard = food => {
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                // console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your Cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                refetch();
            })


        }
        else{
            Swal.fire({
                title: "You are not login",
                text: "Please Login to add to Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                //   send the login page
                navigate('/login', {state: {from: location}})
                }
              });
        }
    }



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="relative">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                    <button
                    onClick={() => handleAddtoCard(item)}
                    className='btn btn-outline border-0 border-b-4 mt-4'>Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;