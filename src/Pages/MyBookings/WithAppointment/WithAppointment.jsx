import React from 'react';

const WithAppointment = () => {
    return (
        <div className='m-4 w-11/12 mx-auto'>


            {/* getting data fo bart chart */}
            {/* <ChartSection bookingList={bookingList}></ChartSection> */}
            <ChartFee bookingList={bookingList}></ChartFee>


            <h1 className='text-2xl md:text-4xl font-bold text-center'>My Today Appointments</h1>
            <p className='text-lg md:text-xl text-center opacity-70'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

            <div className='w-11/12 mx-auto mt-11'>
                <h1 className='mx-auto text-2xl font-semibold'>Total Appointment : <span className='text-blue-400'>{bookingList.length}</span></h1>
            </div>





            {/* appointment boooked cards */}

            {
                bookingList.map(bookedDoctor => <BookedDoctor key={bookedDoctor.id} bookedDoctor={bookedDoctor}></BookedDoctor>)
            }

        </div>
    );
};

export default WithAppointment;