import React, { useEffect } from 'react';
import { FaUserDoctor } from "react-icons/fa6";



const BookedDoctor = ({ bookedDoctor, handleRemove }) => {


    const { id, name, education, designation, fee } = bookedDoctor;


    const removeBookingHandle = (id, name) => {
        // removeAppointment(id);
        handleRemove(id, name);
    }



    return (
        <div>
            <div className="card space-y-12">
                <div className="card-body p-8 bg-white w-11/12 mx-auto rounded-2xl space-y-4 my-6">
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                        <div className='flex flex-col'>

                            <h2 className="card-title text-xl md:text-2xl font-bold text-blue-400">{name}</h2>
                            <p className='text-xl md:text-2xl '>{education} </p>


                            <div className='flex items-center text-xl mt-2'>

                                <span className='text-xl md:text-2xl flex items-center gap-2 font-semibold'><FaUserDoctor />  {designation}</span>
                            </div>
                        </div>
                        <hr className='md:hidden w-full border-dashed mx-auto mt-3' />
                        <div>
                            <p className='mt-5 md:mt-0 text-xl md:text-2xl opacity-70'>
                                Appointment Fee: <span className='text-blue-500 font-extrabold'>{fee}</span> Taka + Vat </p>
                        </div>
                    </div>

                    <hr className='mx-auto w-full opacity-70 border-dashed' />

                    <div className="card-actions">
                        <button onClick={() =>
                        (
                            removeBookingHandle(id, name)
                            , window.scrollTo(0, 0)
                        )
                        }
                            className="btn border-orange-700 text-orange-500 font-semibold w-full rounded-full text-lg md:text-2xl p-6 hover:text-red-600">Cancel Appointment </button>
                    </div>

                    {/* <div className="card-actions">
                        <button className="btn border-orange-700 text-orange-500 font-semibold w-full rounded-full text-lg md:text-2xl p-6 hover:text-red-600">Cancel Appointment </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookedDoctor;