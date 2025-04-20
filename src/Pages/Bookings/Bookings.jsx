import React from 'react';
import { TbInfoHexagon } from "react-icons/tb";

const Bookings = () => {
    return (
        <div className='py-10 bg-base-300'>

            {/* heading div */}
            <div className='flex flex-col justify-center py-16 w-11/12 mx-auto bg-white rounded-3xl text-center h-72'>
                <div className='p-3'>
                    <h1 className='text-2xl md:text-5xl font-bold'>Doctor’s Profile Details</h1>
                    <p className='text-sm md:text-lg mt-4 opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptates consectetur rerum similique,
                        <br />
                        quae voluptatem quos nisi accusantium, animi repellat repudiandae, pariatur alias veritatis voluptatibus tenetur ducimus fugiat tempore odio.</p>
                </div>
            </div>

            {/* whole details about doctor */}
            <div className='flex flex-col md:flex-row px-10 md:gap-10 py-16 my-16 w-11/12 mx-auto bg-white rounded-3xl '>
                <div className='md:w-4/12 mx-auto bg-base-300 p-4 md:p-10 rounded-3xl'>
                    <img src="https://i.ibb.co.com/DHkjfXGK/male11.jpg"
                        className='w-full mx-auto rounded-3xl'
                        alt="doctor" />
                </div>


                <div className='w-8/12 flex flex-col justify-center'>


                    <h1 className='text-2xl md:text-3xl font-bold'>Doctor Name</h1>
                    <p className='text-sm md:text-lg md:mt-3 opacity-70'>MBBS</p>
                    <p className='text-sm md:text-lg md:mt-3 opacity-70'>speciality</p>


                    <p className='text-md md:text-xl mt-6 opacity-70'>Working at</p>
                    <h1 className='text-lg md:text-xl font-bold'>Hospital Name</h1>
                    <hr className='border-dashed opacity-30 my-2 mt-10' />
                    <div className="flex gap-2 items-center">
                        <div className='w-6 h-6 border-2 rounded-3xl border-green-800 text-green-800 flex items-center justify-center'>
                            <p className='text-center'>R</p>

                        </div>
                        <p className='font-semibold text-md md:text-lg text-green-800 my-3'>Reg No:</p>
                    </div>
                    <hr className='border-dashed opacity-30 my-2' />

                    <h2 className='text-md md:text-lg font-bold pt-2'>Availability</h2>

                    <h2 className='text-md font-bold mt-4'>Consultation Fee:</h2>
                </div>
            </div>


            {/* booking appoinment div */}
            <div className='flex flex-col justify-center w-11/12 mx-auto bg-white rounded-3xl text-center'>
                <div className='p-3'>
                    <h1 className='text-xl md:text-3xl font-bold'>Book an Appointment</h1>
                    <hr className='w-full mx-auto border-dashed opacity-30 my-2' />
                    <div className='flex justify-between '>

                        <h2 className='text-md md:text-lg font-bold pt-2'>Availability</h2>



                        <h3 className='bg-green-100 text-green-600 w-fit py-2 px-3 rounded-3xl outline-1 outline-green-500 font-semibold my-auto mb-3 md:mb-0'>
                            Doctor Available Today
                        </h3>

                    </div>
                    <hr className='w-full mx-auto border-dashed opacity-30 my-2' />

                    <div className='flex w-11/12 mx-auto items-center my-8 gap-2 bg-orange-100 text-orange-400 py-2 px-4 rounded-3xl font-semibold mb-3 md:mb-0'>
                        <div className='flex items-center gap-2 mx-auto '>
                            <TbInfoHexagon />
                            <h3 className='mx-auto text-center'>
                                Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                            </h3>
                        </div>

                    </div>


                    <button className='btn w-full bg-blue-400 text-white text-xl py-6 my-6 rounded-full font-semibold '>Book Appointment Now</button>
                </div>
            </div>

        </div>
    );
};

export default Bookings;