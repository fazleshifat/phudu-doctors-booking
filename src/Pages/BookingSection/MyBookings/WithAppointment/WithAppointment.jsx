
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBooking } from '../../../Utilities/AddToDB';
import BookedDoctor from '../BookedDoctor/BookedDoctor';
import ChartFee from '../ChartFee/ChartFee';
import NoAppointment from '../NoAppointment/NoAppointment';
import Appointment from '../Appointment/Appointment';

const WithAppointment = () => {


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




    return (
        <div className='m-4 w-11/12 mx-auto'>


            {
                bookingList.length === 0 ? (
                    <NoAppointment></NoAppointment>
                ) : (
                    <Appointment></Appointment>
                )

            }

        </div>
    );
};

export default WithAppointment;