import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const DoctorSection = ({ doctorsData }) => {

    // console.log(doctorsData)

    const [displayDoctors, setDisplayDoctors] = useState([]);

    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayDoctors(doctorsData);
        }
        else {
            setDisplayDoctors(doctorsData.slice(0, 6));
        }
    }, [doctorsData, showAll]);


    return (
        <div className='max-w-full mx-auto from-gray-300 via-base-3000 to-white ... py-18'>
            <div className='mx-auto text-center space-y-6'>
                <h1 className='text-3xl md:text-5xl font-bold'>Our Best Doctors</h1>
                <p className='px-5 text-lg md:text-xl text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a
                    <br />
                    routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust</p>
            </div>

            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 py-18 gap-10'>
                {
                    displayDoctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>

            <div className='mx-auto text-center -my-10 md:-my-0'>
                <button onClick={() => 
                {
                    setShowAll(!showAll)
                    showAll && window.scrollTo(0,0);
                } } 
                className='btn bg-sky-400 hover:bg-primary  w-9/12 md:w-auto text-white text-xl p-6 md:p-8 rounded-full'>
                    {
                        showAll ? 'View Less Doctors' : 'View All Doctors'  
                    }
                </button>
            </div>
        </div>
    );
};

export default DoctorSection;