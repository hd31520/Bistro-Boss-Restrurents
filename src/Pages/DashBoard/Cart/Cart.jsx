import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart,refetch] = useCart();
    const axiosSecure = useAxiosSecure();





    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);




    // test Area





   





const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {


            axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
                
            })



          
        }
      });
}


    return (
        <div>
            <div className="flex justify-between uppercase md:text-3xl">
                <h2 > TOTAL ORDERS: {cart.length} </h2>
                <h2 > TOTAL PRICE:${totalPrice} </h2>
                {
                    cart.length >0 ? <Link to='/dashboard/prement'><button disabled={!cart.length} className="bg-[#D1A054] btn px-6 py-1">PAY</button></Link> :
                    <button disabled={!cart.length} className="bg-[#D1A054] btn px-6 py-1">PAY</button>
                }
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white text-center uppercase">
                            <tr>
                                <th className="">Item Number</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item,idx)=> <tr>
                                    <th className="text-center">
                                        
                                            {idx+1}
                                       
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-1  md:gap-3">
                                            <div className="avatar">
                                                <div className=" md:w-24 h-10 md:h-24">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <h2 className="text-xl ">{item.name}</h2>
                                    </td>
                                    <td className="text-xl ">$ {item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-lg btn-md  text-red-500"><MdDeleteForever /></button>
                                    </th>
                                </tr>)

                            }



                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;