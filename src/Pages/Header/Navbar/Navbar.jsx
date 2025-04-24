import React from 'react';
import { Link, NavLink } from 'react-router';



const Navbar = () => {
    return (
        <div className="navbar bg-base-300 shadow-sm md:px-36 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
                        <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2  text-sky-500 ' : '')}
                            to='/'>Home</NavLink></li>

                        <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2  text-sky-500 ' : '')} to='/my-bookings'>My Bookings</NavLink></li>
                        <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2  text-sky-500 ' : '')} to='/blogs'>Blogs</NavLink></li>
                        <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2  text-sky-500 ' : '')} to='/contact'>Contact Us</NavLink></li>
                    </ul>
                </div>

                <Link to='/'>
                    <div className='flex items-center gap-1'>
                        <img src="/assets/logo.png" className='w-6 md:w-8' alt="logo" />
                        <p className="cursor-pointer font-bold text-xl md:text-4xl text-gray-600">phuDu</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-10 text-xl">
                    <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2  text-sky-500 ' : '')} to='/'>Home</NavLink></li>
                    <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2 text-sky-500 ' : '')} to='/my-bookings'>My Bookings</NavLink></li>
                    <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2 text-sky-500 ' : '')} to='/blogs'>Blogs</NavLink></li>
                    <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2 text-sky-500 ' : '')} to='/contact'>Contact Us</NavLink></li>


                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-sky-500 hover:bg-primary text-white rounded-full md:text-xl md:p-6">Emergency</a>
            </div>
            
        </div>
    );
};

export default Navbar;