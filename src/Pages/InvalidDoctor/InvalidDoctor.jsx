import React from 'react';

import { Link } from 'react-router';

const InvalidDoctor = ({ id }) => {
    return (
        <div>

            <div className='min-h-[calc(100vh-72px)] flex items-center my-auto mx-auto text-center'>



                <div className='max-w-4xl mx-auto my-auto h-fit'>
                    <img src="/assets/invalidDoctor.png" className='w-7/12 mx-auto ' alt="error" />
                    <h1 className='text-3xl text-gray-700'>Doctor not found!!</h1>
                    <h1 className='text-2xl text-gray-700'>invalid id as: <span className='text-red-500 italic font-bold'>{id}</span></h1>


                    <button className='btn bg-blue-400 text-white mt-6 rounded-3xl p-6 text-lg'><Link to='/'>Back To Homepage</Link></button>
                </div>
            </div>

        </div>
    );
};

export default InvalidDoctor;