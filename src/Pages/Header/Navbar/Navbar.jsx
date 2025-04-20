import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-22">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>Home</li>
                        <li>My-Bookings</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='flex items-center gap-1'>
                    <img src="/public/assets/logo.png" className='w-8' alt="logo" />
                    <a className="cursor-pointer font-bold text-4xl">Phudu</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-8 text-xl">
                    <li>Home</li>
                    <li>My-Bookings</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>


                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary rounded-3xl text-xl p-6">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar;