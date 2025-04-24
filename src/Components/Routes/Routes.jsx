import React, { Suspense } from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import MainLayout from '../MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import Blogs from '../../Pages/Blogs/Blogs';
import ErrorHandle from '../../Pages/ErrorHandle/ErrorHandle';
import Details from '../../Pages/Details/Details';

import InvalidDoctor from '../../Pages/InvalidDoctor/InvalidDoctor';
import BookingSection from '../../Pages/BookingSection/BookingSection';
import Loader from '../Loader/Loader';




const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('/doctors.json'),
                Component: Home,
                HydrateFallback: Loader,
            },
            {
                path: '/details/:id',
                loader: () => fetch('/doctors.json'),
                Component: Details,
                HydrateFallback: Loader,
            }
            ,
            {
                path: '/my-bookings',
                loader: () => fetch('/doctors.json'),
                Component: BookingSection,
                HydrateFallback: Loader,

            },
            {
                path: '/blogs',
                loader: () => fetch('/questions.json'),
                Component: Blogs,
                HydrateFallback: Loader,
            }
        ],
    },
    {
        path: '*',
        Component: ErrorHandle,
        HydrateFallback: Loader,
    },
]);


const Routes = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Routes;