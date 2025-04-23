import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import { Link } from 'react-router';

const ErrorHandle = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-72px)] flex items-center my-auto mx-auto text-center'>



                <div className='max-w-4xl mx-auto my-auto h-fit'>
                    <img src="/assets/error.jpg" className='w-5/12 mx-auto ' alt="error"  />
                    <h1 className='text-3xl text-gray-700'>page not found!!</h1>
                    <p className='text-lg text-gray-700'>Go to another page</p>

                    <button className='btn bg-sky-500 hover:bg-primary text-white mt-6 rounded-3xl p-6 text-lg'><Link to='/'>Back To Homepage</Link></button>
                </div>
            </div>
        </>
    );
};

export default ErrorHandle;