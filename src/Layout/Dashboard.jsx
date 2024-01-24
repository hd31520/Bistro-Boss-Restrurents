import { FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { IoWalletOutline } from "react-icons/io5";
import { TbCalendarUser } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingBagFill } from "react-icons/ri";
import { MdGroups2, MdMessage } from "react-icons/md";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();


    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="md:w-64 min-h-screen bg-[#D1A054] uppercase">
                <ul className="hidden lg:flex menu p-4">
                    {
                        isAdmin ? <>
                         <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome></FaHome>
                           Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                            <FaUtensils></FaUtensils>
                           Add Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItem">
                        <FaList></FaList>
                          
                           Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageBookings">
                            <FaBook></FaBook>
                            Manage Bookings 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allUsers">
                        <MdGroups2 />
                           All Users
                        </NavLink>
                    </li>
                    
                    
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <IoWalletOutline />

                                        Prement History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <SiGooglemessages />
                                        Add A Review
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/booking">
                                        <TbCalendarUser></TbCalendarUser>
                                        My Booking
                                    </NavLink>
                                </li>
                            </>
                    }




                    <div className="divider"></div>


                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <GiHamburgerMenu />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <RiShoppingBagFill />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <MdMessage />
                            Contract
                        </NavLink>
                    </li>

                </ul>

            </div>
            <div className="flex-1 mx-2 md:mx-8 my-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;