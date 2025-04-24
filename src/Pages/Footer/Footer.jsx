import React from 'react';
import { Link, NavLink } from 'react-router';

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">



            <div className='flex items-center gap-1'>
                <img src="/assets/logo.png" className='w-6' alt="logo" />
                <a className="font-bold text-xl md:text-2xl">Phudu</a>
            </div>

            <div className="navbar-center flex">
                <ul className="flex flex-col md:flex-row menu menu-horizontal gap-2 md:gap-8 text-sm md:text-xl">
                    <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2 text-sky-500' : '')} to='/'>Home</NavLink></li>
                    <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2 text-sky-500 ' : '')} to='/my-bookings'>My-Bookings</NavLink></li>
                    <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2 text-sky-500 ' : '')} to='/blogs'>Blogs</NavLink></li>
                    <li className='border-b-2 border-b-base-300 font-semibold hover:border-b-2 hover:border-sky-500'><NavLink className={({ isActive }) => (isActive ? 'border-b-sky-500 border-b-2 text-sky-500 ' : '')} to='/contact'>Contact Us</NavLink></li>


                </ul>
            </div>
            <hr className=' w-40 md:w-2xl text-gray-500' />
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to='https://web.facebook.com/al.fazle.shifat/' target='_blank'><FaFacebookSquare className='text-4xl' /></Link>
                    <Link to='https://www.instagram.com/shiifaat/' target='_blank'><AiFillInstagram className='text-4xl' /></Link>
                    <Link to='https://www.linkedin.com/in/fazle-shifat-5490a8270/' target='_blank'><FaLinkedin className='text-4xl' /></Link>
                </div>
            </nav>

            {/* <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside> */}
        </footer>
    );
};

export default Footer;