import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AUthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const  [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))

    }

    const navoption = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/order">Order</NavLink></li>
        {
            user && isAdmin &&  <li><NavLink to="dashboard/adminHome">Dashboard</NavLink></li>
        }
        {
            user && !isAdmin &&  <li><NavLink to="dashboard/userHome">Dashboard</NavLink></li>
        }
        <li><NavLink to="/dashboard/cart">
           
                <FaShoppingCart />
                <div className="badge badge-secondary">+{cart.length}</div>
          
        </NavLink></li>

        {
            user ? <><button onClick={handleLogOut} className="btn btn-ghost">LogOut</button></> : <><li><NavLink to="/login">Login</NavLink></li></>
        }


    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-opacity-75 bg-black rounded-box w-52">

                            {
                                navoption
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navoption
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;