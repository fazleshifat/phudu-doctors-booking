import React from 'react';
import { Link } from 'react-router';


const NoAppointment = () => {
    return (
        <div className='min-h-[calc(100vh-72px)] flex items-center my-auto mx-auto text-center'>



            <div className='max-w-4xl mx-auto my-auto h-fit space-y-1 md:space-y-4'>

                <h1 className='text-4xl font-bold text-gray-700'>You Have not booked any appointment Yet!</h1>
                <h1 className='text-2xl  text-gray-400'>Book an Appointment,to get the best Consultation!</h1>
                <p className='text-lg text-gray-700 md:mt-8'>Our Platform connects you with verified, experienced doctors across various specialitiets-- all at your convenience.</p>

                <Link to='/'><button className='btn bg-sky-500 hover:bg-primary text-white mt-6 rounded-3xl p-6 text-lg'>Back To Homepage</button></Link>
            </div>

        </div>
    );
};

export default NoAppointment;