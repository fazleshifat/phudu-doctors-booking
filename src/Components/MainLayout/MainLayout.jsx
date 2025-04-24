import React from 'react';
import Footer from '../../Pages/Footer/Footer';
import Navbar from '../../Pages/Header/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Loader from '../Loader/Loader';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <Loader></Loader> : <Outlet></Outlet>
            }

            <Footer></Footer>

            <ToastContainer className='text-xl'></ToastContainer>
        </div>
    );
};

export default MainLayout;