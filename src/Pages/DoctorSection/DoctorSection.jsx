import React, { useEffect, useState } from 'react';
import Doctor from '../../../Doctor';

const DoctorSection = ({ doctorsData }) => {

    // console.log(doctorsData)

    const [displayPhones, setDisplayPhones] = useState([]);

    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayPhones(doctorsData);
        }
        else {
            setDisplayPhones(doctorsData.slice(0, 6));
        }
    }, [doctorsData, showAll]);


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
                    displayPhones.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>

            <div className='mx-auto text-center -my-10 md:-my-0'>
                <button onClick={() => setShowAll(!showAll)} className='btn bg-sky-400 w-9/12 md:w-auto text-white text-xl p-6 md:p-8 rounded-full'>
                    {
                        showAll ? 'View Less Doctors' : 'View All Doctors'  
                    }
                </button>
            </div>
        </div>
    );
};

export default DoctorSection;