import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AUthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

import SocailLogin from '../../Components/SocailLogin';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [image, setImage] = useState("")
    const [imgUrl, setImgUrl] = useState('')
    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm()

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;

                updateUserProfile(data.name, imgUrl)
                    .then(() => {
                        // Create user entry in detabase
                        const userInfo = {
                            name: data.name,
                            email: data.email,

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User SignUp Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    }

    const data = new FormData();
    data.append('image', image);

    const handleupload = e => {
        e.preventDefault();

        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`, {
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setImgUrl(data.data.display_url)

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Profile Upload Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const handleImage = e => {
        e.preventDefault();
        const file = e.target.files[0];

        setImage(file);
    }



    return (
        <>
            <Helmet>
                <title>Bistro Boss || SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register('name', { required: true })} name='name' className="input input-bordered" />
                                {errors.name && < span className='text-red-600'>Thisfield is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Picture</span>
                                </label>
                                <input type="file" placeholder="PhotoURL" {...register('PhotoURL', { required: true })} name='file' onChange={handleImage} className="input input-bordered h-full w-full" />
                                {errors.name && < span className='text-red-600'>Thisfield is required</span>}
                                <button onClick={handleupload} className="btn btn-outline btn-xs mt-2 btn-accent">Upload</button>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register('email', { required: true })} className="input input-bordered" />
                                {errors.email && < span className='text-red-600'>Thisfield is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', {
                                    required: true,
                                    maxLength: 20,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*"])(?=.*[0-9])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && < span className='text-red-600'>Thisfield is required</span>}

                                {errors.password?.type === 'minLength' && < span className='text-red-600'>Password Must be 6 Character</span>}

                                {errors.password?.type === 'maxLength' && < span className='text-red-600'>Password Must be less then 20 Character</span>}

                                {errors.password?.type === 'pattern' && < span className='text-red-600'>Password Must have one lower case one uppercase one number and one specail character</span>}


                            </div>
                            <div className="form-control mt-6">
                                {/* <button className="btn btn-primary"></button> */}
                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                            <div className='mx-auto'>
                                <p><small>Already have an Account <Link to="/login">Please Login </Link></small></p>
                            </div>
                        </form>
                        <SocailLogin></SocailLogin>


                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;