import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredAppointment, removeAppointment } from '../../Utilities/AddToDB';
import NoAppointment from './MyBookings/NoAppointment/NoAppointment';
import Appointment from './MyBookings/Appointment/Appointment';
import { ToastContainer } from 'react-toastify';

const BookingSection = () => {

    const [appointmentList, setAppointmentList] = useState([]);
    const data = useLoaderData();


    useEffect(() => {
        const stored = getStoredAppointment().map(id => parseInt(id));
        const filtered = data.filter(doc => stored.includes(doc.id));
        setAppointmentList(filtered);
        // console.log(filtered)
    }, []);

    const handleRemoveAppointment = (id, name) => {
        removeAppointment(id, name);
        const updatedList = appointmentList.filter(doc => doc.id !== id);
        setAppointmentList(updatedList);

    };




    return (


        <div className='bg-base-300'>
            {
                appointmentList.length === 0 ? (
                    <NoAppointment></NoAppointment>

                ) : (
                    <Appointment
                        appointmentList={appointmentList}
                        onRemove={handleRemoveAppointment}
                    ></Appointment>

                )
            }

            
        </div>

    );
};

export default BookingSection;