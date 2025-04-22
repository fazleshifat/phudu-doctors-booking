import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBooking } from '../../../Utilities/AddToDB';
import BookedDoctor from '../BookedDoctor/BookedDoctor';

const Appointment = () => {

    const [bookingList, setBookingList] = useState([]);

    const data = useLoaderData();
    // console.log(data)


    useEffect(() => {
        const bookingList = getStoredBooking();
        //   console.log(bookingList) 
        const convertedStoredBookings = bookingList.map(id => parseInt(id));
        // console.log(convertedStoredBookings)

        const myBookingList = data.filter(booking => convertedStoredBookings.includes(booking.id));
        setBookingList(myBookingList)
    }, [])

    // console.log(bookingList)


    return (
        <div className='m-4 w-11/12 mx-auto'>
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

export default Appointment;