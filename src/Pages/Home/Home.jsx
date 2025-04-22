import React from 'react';
import Banner from '../Header/Banner/Banner';
import DoctorSection from '../DoctorSection/DoctorSection';
import { useLoaderData } from 'react-router';
import ProfileDetails from '../Details/Details';
import Services from '../Services/Services';

const Home = () => {

    const doctorsData = useLoaderData();
    // console.log(doctorsData)

    return (
        <div className='bg-base-300'>
            <Banner></Banner>
            <DoctorSection doctorsData={doctorsData}></DoctorSection>
            <Services></Services>
        </div>
    );
};

export default Home;