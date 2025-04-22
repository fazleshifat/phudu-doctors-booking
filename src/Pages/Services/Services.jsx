import React from 'react';
import CountUp from 'react-countup';


const Services = () => {
    return (
        <div className='max-w-10/12 mx-auto py-16'>

            <h1 className='text-2xl md:text-4xl font-bold text-center'>We Provide Best Medical Services</h1>
            <p className='text-md md:text-xl opacity-70 text-center mt-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>


            <div className='mx-auto grid grid-cols-1 md:grid-cols-4 gap-10  py-10'>
                <div className="card w-auto md:w-60 bg-base-100 card-xl shadow-sm mx-auto rounded-3xl">
                    <div className="card-body space-y-3">
                        <img src="/assets/success-doctor.png" className='w-5/12' alt="doctor" />
                        <h1 className='text-3xl md:text-5xl font-bold'>199+</h1>
                        <div className="justify-start card-actions">
                            <p className='text-md md:text-lg opacity-70 font-semibold'>Total Doctors</p>
                        </div>
                    </div>
                </div>



               <div className="card w-auto md:w-60 bg-base-100 card-xl shadow-sm mx-auto rounded-3xl">
                    <div className="card-body space-y-3">
                        <img src="/assets/success-patients.png" className='w-5/12' alt="patients" />
                        <h1 className='text-3xl md:text-5xl font-bold'>199+</h1>
                        <div className="justify-start card-actions">
                           <p className='text-md md:text-lg opacity-70 font-semibold'>Total Doctors</p>
                        </div>
                    </div>
                </div>



               <div className="card w-auto md:w-60 bg-base-100 card-xl shadow-sm mx-auto rounded-3xl">
                    <div className="card-body space-y-3">
                        <img src="/assets/success-staffs.png" className='w-5/12' alt="staffs" />
                        <h1 className='text-3xl md:text-5xl font-bold'>199+</h1>
                        <div className="justify-start card-actions">
                           <p className='text-md md:text-lg opacity-70 font-semibold'>Total Doctors</p>
                        </div>
                    </div>
                </div>



               <div className="card w-auto md:w-60 bg-base-100 card-xl shadow-sm mx-auto rounded-3xl">
                    <div className="card-body space-y-3">
                        <img src="/assets/success-review.png" className='w-5/12' alt="success" />
                        <h1 className='text-3xl md:text-5xl font-bold'>199+</h1>
                        <div className="justify-start card-actions">
                           <p className='text-md md:text-lg opacity-70 font-semibold'>Total Doctors</p>
                        </div>
                    </div>
                </div>

               <div className="card w-auto md:w-60 bg-base-100 card-xl shadow-sm mx-auto rounded-3xl">
                    <div className="card-body space-y-3">
                        <CountUp className='text-5xl font-bold' end={100} duration={10} />

                       
                    </div>
                </div>



            </div>



        </div>
    );
};

export default Services;