import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AUthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInUSer } = useContext(AuthContext)
    const [disable, setDisable] = useState(true)
    const capchaRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCapcha = e => {
        const user_captcha_value = capchaRef.current.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false);
            alert('Captcha Matched');
        }

        else {
            setDisable(true);
            alert('Captcha Does Not Match');
        }


    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUSer(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Login Successfull",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace : true});
            })
            .catch(error => console.log(error))

    }

    return (

        <>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Capcha</span>
                                </label>
                                <LoadCanvasTemplate />
                                <input type="text" ref={capchaRef} placeholder="type the text above " name='capcha' className="input input-bordered" required />
                                <button onClick={handleValidateCapcha} className="btn btn-outline btn-xs mt-2 btn-accent">Validate Capcha</button>

                            </div>
                            <div className="form-control mt-3">

                                {/* <button className="btn btn-primary">Login</button> */}
                                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className='mx-auto'>
                                <p><small>New Here ? <Link to="/signup">Create an account</Link></small></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;