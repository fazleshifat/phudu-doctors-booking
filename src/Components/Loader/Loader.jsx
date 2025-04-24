import React from 'react';

const Loader = () => {
    return (
        <div className='w-11/12 mx-auto text-center h-screen flex items-center justify-center'>
            <span className="loading loading-infinity w-30 text-gray-500"></span>
        </div>
    );
};

export default Loader;