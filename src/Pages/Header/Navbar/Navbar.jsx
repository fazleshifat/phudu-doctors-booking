import React from 'react';
import { Link, NavLink } from 'react-router';



const Navbar = () => {
    return (
        <div className="navbar bg-base-300 shadow-sm md:px-36 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')}
                            to='/'>Home</NavLink></li>

                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')} to='/my-bookings'>My-Bookings</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')} to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')} to='/contact'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <Link to='/'>
                    <div className='flex items-center md:gap-1'>
                        <img src="/assets/logo.png" className='w-8' alt="logo" />
                        <a className="cursor-pointer font-bold text-2xl md:text-4xl">Phudu</a>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-8 text-xl">
                    <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')} to='/'>Home</NavLink></li>
                    {/* <li>Home</li> */}
                    <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')} to='/my-bookings'>My-Bookings</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')} to='/blogs'>Blogs</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')} to='/contact'>Contact Us</NavLink></li>


                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-sky-500 hover:bg-primary text-white rounded-full md:text-xl p-6">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar;