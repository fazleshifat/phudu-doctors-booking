import React from 'react';
import ChartFee from '../ChartFee/ChartFee';

const ChartSection = ({bookingList}) => {
    console.log(bookingList)
    return (
        <div className='max-w-full'>
            {
                // bookingList.map(bookedChart => <ChartFee bookedChart={bookedChart}></ChartFee>)
            }
        </div>
    );
};

export default ChartSection;