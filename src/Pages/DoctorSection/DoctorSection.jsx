import React from 'react';
import Doctor from '../../../Doctor';

const DoctorSection = ({ doctorsData }) => {

    // console.log(doctorsData)

    return (
        <div className='max-w-full mx-auto bg-base-300 py-18'>
            <div className='mx-auto text-center space-y-6'>
                <h1 className='text-3xl md:text-5xl font-bold'>Our Best Doctors</h1>
                <p className='px-5 text-lg md:text-xl text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a
                    <br />
                    routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust</p>
            </div>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 py-18 gap-12'>
                {
                    doctorsData.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>

            <div className='mx-auto text-center -my-10 md:-my-0'>
                <button className='btn btn-primary w-9/12 md:w-auto text-white text-xl p-6 md:p-8 rounded-full'>View All Doctors</button>
            </div>
        </div>
    );
};

export default DoctorSection;