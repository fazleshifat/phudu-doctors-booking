import React from 'react';
import { Link } from 'react-router';

const Doctor = ({ doctor }) => {
    // console.log(doctor)

    const { id, image, name, education, speciality, experience, registrationNumber, availability } = doctor;


    return (
        <div className="card bg-base-100 w-72 md:w-96 shadow-sm mx-auto rounded-3xl">
            <figure className="px-5 md:px-6 pt-6">
                <img
                    src={image}

                    alt="Shoes"
                    className="rounded-xl md:w-11/12 h-56 md:h-80" />
            </figure>
            <div className="card-body">
                <div className='md:flex md:gap-2'>
                    <h3 className='bg-green-100 text-green-600 py-1 px-4 w-fit rounded-3xl outline-1 outline-green-500 font-semibold my-auto mb-3 md:mb-0'>
                        {availability.status}
                    </h3>
                    <h3 className='bg-sky-100 text-sky-600 py-1 px-4 w-fit rounded-3xl outline-1 outline-sky-500 font-semibold my-auto'>
                        {experience} Years Experience
                    </h3>

                </div>
                <h2 className="card-title font-bold text-xl md:text-2xl">{name}</h2>
                <p className="text-md md:text-lg opacity-70">{education}</p>
                <p className="text-md md:text-lg opacity-70">{speciality}</p>

                <hr className='border-dashed opacity-30 my-2' />

                <div className="flex gap-2 items-center">
                    <div className='w-6 h-6 border-2 rounded-3xl border-green-800 text-green-800 flex items-center justify-center'>
                        <p className='text-center'>R</p>

                    </div>
                    <p className='font-semibold text-lg text-green-800'>Reg No:{registrationNumber}</p>
                </div>

                <div className="card-actions">
                    
                    <Link onClick={()=>{
                        window.scrollTo(0,0);
                    }} className='btn w-full hover:bg-sky-400 hover:text-white p-6 border-sky-500 border-2 font-bold text-sky-600 rounded-4xl text-lg mt-3' to={`/details/${id}`}>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;