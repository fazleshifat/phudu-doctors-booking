import React from 'react';
import CountUp from 'react-countup';

const VisibleCounter = ({ end, duration = 2 }) => {


    return (
        <div className="text-4xl font-bold text-center text-black">
            <CountUp enableScrollSpy={true} end={end} duration={duration} />
        </div>
    );
};

export default VisibleCounter;