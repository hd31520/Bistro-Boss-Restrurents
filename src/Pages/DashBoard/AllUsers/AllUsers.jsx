import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import { FaUser } from 'react-icons/fa';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();



    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

console.log(users)

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


                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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

    // Make Admin

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make Admin In This User",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: 'top-end',
                                title: `${user.name} is an Admin Now`,
                                
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    })




            }
        });
    }
    return (
        <div>
            <div className='flex justify-evenly my-4'>
                <h1 className='text-3xl'>All Users</h1>
                <h1 className='text-3xl'>Totoal Users: {users.length}</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white uppercase '>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? "Admin " :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-[#D1A054] text-lg btn-md  text-white"><FaUser /></button>
                                        }

                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-ghost text-2xl btn-md  text-red-500"><MdDeleteForever /></button>
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

export default AllUsers;    