import React, { useEffect, useState } from 'react';
import BookedDoctor from '../BookedDoctor/BookedDoctor';
import ChartFee from '../ChartFee/ChartFee';
import { getStoredAppointment } from '../../../src/Utilities/AddToDB';


const Appointment = ({ appointmentList }) => {
    // console.log(appointmentList




    return (
        <div className='m-4 w-11/12 mx-auto'>


            {/* getting data fo bart chart */}
            {/* <ChartSection appointmentList={appointmentList}></ChartSection> */}
            <ChartFee appointmentList={appointmentList}></ChartFee>


            <h1 className='text-2xl md:text-4xl font-bold text-center'>My Today Appointments</h1>
            <p className='text-lg md:text-xl text-center opacity-70'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

            <div className='w-11/12 mx-auto mt-11'>
                <h1 className='mx-auto text-2xl font-semibold'>Total Appointment : <span className='text-blue-400'>{appointmentList.length}</span></h1>
            </div>





            {/* appointment boooked cards */}

            {
                appointmentList.map(bookedDoctor =>
                    <BookedDoctor
                        key={bookedDoctor.id}
                        bookedDoctor={bookedDoctor}
                        
                    >


                    </BookedDoctor>)
            }

        </div>
    );
};

export default Appointment;