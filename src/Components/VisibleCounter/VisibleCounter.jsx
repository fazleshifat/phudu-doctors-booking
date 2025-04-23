import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const VisibleCounter = ({ end, duration = 2 }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // count only once
        threshold: 0.5,     // trigger when 50% visible
    });

    return (
        <div ref={ref} className="text-4xl font-bold text-center text-black">
            {inView ? <CountUp end={end} duration={duration} /> : 0}
        </div>
    );
};

export default VisibleCounter;