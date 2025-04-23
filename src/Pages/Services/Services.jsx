import React from 'react';
import CountUp from 'react-countup';
import VisibleCounter from '../../Components/VisibleCounter/VisibleCounter';


const Services = () => {
    return (
        <div className='max-w-10/12 mx-auto py-16'>

            <h1 className='text-2xl md:text-4xl font-bold text-center'>We Provide Best Medical Services</h1>
            <p className='text-md md:text-xl opacity-70 text-center mt-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>


            <div className='mx-auto grid grid-cols-1 md:grid-cols-4 gap-10  py-10'>
                <div className="card w-full bg-base-100 card-xl shadow-sm mx-auto rounded-3xl">
                    <div className="card-body space-y-3">
                        <img src="/assets/success-doctor.png" className='w-4/12' alt="doctor" />
                        <div className='flex items-center text-5xl md:text-5xl font-bold' >
                        <VisibleCounter className='text-5xl' end={150} duration={3} />
                        +
                        </div>
                        <div className="justify-start card-actions">
                            <p className='text-md md:text-lg opacity-70 font-semibold'>Total Doctors</p>
                        </div>
                    </div>
                </div>



               <div className="card  w-full  bg-base-100 card-xl shadow-sm mx-auto rounded-3xl">
                    <div className="card-body space-y-3">
                        <img src="/assets/success-patients.png" className='w-4/12' alt="patients" />
                        <div className='flex items-center text-5xl md:text-5xl font-bold' >
                        <VisibleCounter className='text-5xl' end={2300} duration={3} />
                        +
                        </div>
                        <div className="justify-start card-actions">
                           <p className='text-md md:text-lg opacity-70 font-semibold'>Total Patients</p>
                        </div>
                    </div>
                </div>



               <div className="card  w-full  bg-base-100 card-xl shadow-sm mx-auto rounded-3xl">
                    <div className="card-body space-y-3">
                        <img src="/assets/success-staffs.png" className='w-4/12' alt="staffs" />
                        <div className='flex items-center text-5xl md:text-5xl font-bold' >
                        <VisibleCounter className='text-5xl' end={300} duration={3} />
                        +
                        </div>
                        <div className="justify-start card-actions">
                           <p className='text-md md:text-lg opacity-70 font-semibold'>Total Staff</p>
                        </div>
                    </div>
                </div>



               <div className="card  w-full bg-base-100 card-xl shadow-sm mx-auto rounded-3xl">
                    <div className="card card-body space-y-3">
                        <img src="/assets/success-review.png" className='w-4/12' alt="success" />
                        <div className='flex items-center  text-5xl md:text-5xl font-bold' >
                        <VisibleCounter className='text-5xl' end={199} duration={3} />
                        <span className='font-bold'>+</span>
                        </div>
                        <div className="justify-start card-actions">
                           <p className='text-md md:text-lg opacity-70 font-semibold'>Total Success</p>
                        </div>
                    </div>
                </div>




            </div>



        </div>
    );
};

export default Services;