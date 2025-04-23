import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredAppointment } from '../../Utilities/AddToDB';
import NoAppointment from '../../../public/MyBookings/NoAppointment/NoAppointment';
import Appointment from '../../../public/MyBookings/Appointment/Appointment';

const BookingSection = () => {

    const [appointmentList, setAppointMentList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const appointmentList = getStoredAppointment();
        const convertedStoredAppointment = appointmentList.map(id => parseInt(id));
        const myAppointmentList = data.filter(appointment => convertedStoredAppointment.includes(appointment.id));
        setAppointMentList(myAppointmentList);
    }, [])

    // console.log(appointmentList)


    return (


        <div>
            {
                appointmentList.length === 0 ? (
                    <NoAppointment></NoAppointment>
                ) : (
                    <Appointment appointmentList={appointmentList}></Appointment>
                )
            }
        </div>
    );
};

export default BookingSection;