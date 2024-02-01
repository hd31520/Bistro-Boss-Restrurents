import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();




    const handleDeleteitem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        title: `${item.name} is an Admin Now`,

                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }

            }
        });
    }

    const handleEditItem = (item) => {

    }
    return (
        <div>
            <SectionTitle heading="manage All Items" subheading="Hurry Up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054]'>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update </th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                menu.map((item, idx) => <tr key={item._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>

                                        {item.name}
                                    </td>
                                    <td>$ {item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button onClick={() => handleEditItem(item)} className="btn btn-ghost text-lg btn-md bg-[#D1A054] text-white"><FaEdit /></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteitem(item)} className="btn btn-ghost text-lg btn-md bg-red-500 text-white"><MdDeleteForever /></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageItems;