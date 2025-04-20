import React from 'react';
import Banner from '../Header/Banner/Banner';
import DoctorSection from '../DoctorSection/DoctorSection';
import { useLoaderData } from 'react-router';

const Home = () => {

    const doctorsData = useLoaderData();
    // console.log(doctorsData)

    return (
        <div>
            <Banner></Banner>
            <DoctorSection doctorsData={doctorsData}></DoctorSection>
        </div>
    );
};

export default Home;