import React from 'react';
import { TbInfoHexagon } from "react-icons/tb";
import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { addToStoreAppointment } from '../../Utilities/AddToDB';
import InvalidDoctor from '../InvalidDoctor/InvalidDoctor';


const Details = () => {


    const navigate = useNavigate();

    const { id } = useParams();
    const bookedId = parseInt(id)
    const data = useLoaderData()
    const singleDoctor = data.find(doctor => doctor.id === bookedId);
    // console.log(singleDoctor)
    

    if (!singleDoctor) {
        return <InvalidDoctor id={id}></InvalidDoctor>
    }




    const { image, name, education, speciality, designation, registrationNumber, availability, workplace, fee, slogan } = singleDoctor;
    // console.log(typeof id)


    const handleAppointmentBooking = (id) => {

        const isBooked = addToStoreAppointment(id, name)

        if (isBooked) {
            navigate('/my-bookings')
        }

    }


    return (
        <div className='py-10 bg-base-300'>

            {/* heading div */}
            <div className='flex flex-col justify-center py-16 w-11/12 mx-auto bg-white rounded-3xl text-center h-72'>
                <div className='p-3'>
                    <h1 className='text-2xl md:text-5xl font-bold'>Doctor’s Profile Details</h1>
                    <p className='text-sm md:text-lg mt-4 opacity-70'>{slogan}</p>
                </div>
            </div>

            {/* whole details about doctor */}
            <div className='flex flex-col md:flex-row px-10 md:gap-10 py-6 md:py-16 my-16 w-11/12 mx-auto bg-white rounded-3xl '>
                <div className='md:w-4/12 mx-auto bg-base-300 p-4 md:p-10 rounded-3xl'>
                    <img src={image}
                        className='w-full mx-auto rounded-3xl'
                        alt="doctor" />
                </div>


                <div className='md:w-8/12 flex flex-col justify-center'>


                    <h1 className='text-xl md:text-3xl font-bold'>{name}</h1>
                    <p className='text-sm md:text-lg md:mt-3 opacity-70 text-gray-600 font-semibold'>{education}</p>
                    <p className='text-sm md:text-lg md:mt-3 opacity-70'>Speciality: <span className='text-sky-600 font-semibold'>{speciality}</span></p>
                    <p className='text-sm md:text-lg md:mt-3 opacity-70'>Designation: <span className='text-sky-500 font-semibold'>{designation}</span></p>


                    <p className='text-md md:text-xl mt-6 opacity-70'>Working at</p>
                    <h1 className='text-md md:text-xl font-bold'>{workplace}</h1>
                    <hr className='border-dashed opacity-30 my-2 md:mt-10' />
                    <div className="flex gap-2 items-center">
                        <div className='w-6 h-6 border-2 rounded-3xl border-green-800 text-green-800 flex items-center justify-center'>
                            <p className='text-center'>R</p>

                        </div>
                        <p className='font-semibold text-xs md:text-lg text-green-800 my-3'>Reg No:span <span className='text-sky-500'>{registrationNumber}</span> </p>
                    </div>
                    <hr className='border-dashed opacity-30 my-2' />

                    <h2 className='text-sm md:text-lg font-bold pt-2'>Availability

                    </h2>
                    <div className='flex flex-wrap md:my-2'>
                        {
                            availability.days.map(day => <div key={day} className=' py-2 bg-orange-100 text-orange-500 rounded-full p-1 px-4 font-semibold m-1'>{day}</div>)
                        }
                    </div>

                    <h2 className='text-md font-bold mt-4'>Consultation Fee: <span className='text-blue-400 text-md md:text-xl'>Taka:{fee}/=</span> <span className='text-gray-400'>(incl. Vat)</span> Per consultaion</h2>
                </div>
            </div>


            {/* booking Appointment div */}
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


                    <button
                        // to='/my-bookings'
                        onClick={() => {
                            (
                                handleAppointmentBooking(id),
                                window.scrollTo(0, 0)
                            )
                        }}
                        className='btn w-full bg-blue-400 text-white hover:bg-primary  text-xl py-6 my-6 rounded-full font-semibold '>
                        Book Appointment Now
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Details;