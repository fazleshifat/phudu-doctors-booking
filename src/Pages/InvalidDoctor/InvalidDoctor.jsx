import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar/Navbar';
import { Link } from 'react-router';

const InvalidDoctor = () => {
    return (
        <div>
            
            <div className='min-h-[calc(100vh-72px)] flex items-center my-auto mx-auto text-center'>



                <div className='max-w-4xl mx-auto my-auto h-fit'>
                    <img src="/assets/invalidDoctor.png" className='w-7/12 mx-auto ' alt="error" />
                    <h1 className='text-3xl text-gray-700'>Doctor not found!!</h1>
                  

                    <button className='btn bg-blue-400 text-white mt-6 rounded-3xl p-6 text-lg'><Link to='/'>Back To Homepage</Link></button>
                </div>
            </div>

        </div>
    );
};

export default InvalidDoctor;