import React from 'react';
import Banner from '../Header/Banner/Banner';
import DoctorSection from '../DoctorSection/DoctorSection';
import { useLoaderData } from 'react-router';
import ProfileDetails from '../Bookings/Bookings';

const Home = () => {

    const doctorsData = useLoaderData();
    // console.log(doctorsData)

    return (
        <div className='bg-base-300'>
            <Banner></Banner>
            <DoctorSection doctorsData={doctorsData}></DoctorSection>
        </div>
    );
};

export default Home;