import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AUthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        reset,
        
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.PhotoURL)
            .then( () => {
                console.log('user profile info updated')
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User SignUp Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            })
            .catch(error => console.log(error))
        })
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
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="PhotoURL" {...register('PhotoURL', { required: true })} className="input input-bordered" />
                                {errors.name && < span className='text-red-600'>Thisfield is required</span>}
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;