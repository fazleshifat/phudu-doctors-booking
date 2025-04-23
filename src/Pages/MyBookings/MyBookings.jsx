import React from 'react';
import ChartFee from './ChartFee/ChartFee';
import Appointment from './Appointment/Appointment';



const MyBookings = () => {
    return (
        <div className='max-full py-16 mx-auto bg-base-300'>
            {/* <ChartFee></ChartFee> */}
            <Appointment></Appointment>
        </div>
    );
};

export default MyBookings;