import React from 'react';

const Banner = () => {
    return (
        <div className="bg-base-300 min-h-[calc(100vh-72px)] flex items-center">
            <div className=" 
            bg-gradient-to-b from-gray-200 via-base-3000 to-white ...
            w-11/12 px-2 py-8 md:py-18 md:my-10 mx-auto border-7 border-white rounded-3xl text-center">
                <div className="md:my-3 space-y-5">
                    <h1 className="text-2xl md:text-5xl font-bold">Dependable Care, Backed by Trusted 
                        <br className='hidden md:flex'/> Professionals</h1>
                    <p className="text-lg md:text-xl md:py-6">
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a
                        <br />
                        routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust
                    </p>
                    <div className='md:flex gap-2 mx-auto w-fit items-center '>
                        <input type="text" placeholder="Search any doctor..." className="input mb-4 md:mb-0 md:w-2xl h-14 rounded-4xl  focus:outline-none" />
                        <button className="btn bg-sky-500 hover:bg-primary text-white h-12 w-32 rounded-4xl font-bold">Search Now</button>
                    </div>
                </div>

                <div className='flex justify-center flex-col md:flex-row gap-8 mt-12'>
                    <img src="/assets/banner-img-1.png" className='md:w-4/12 rounded-2xl' alt="banner" />
                    <img src="/assets/banner2.jpeg" className='md:w-4/12 rounded-2xl' alt="banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;