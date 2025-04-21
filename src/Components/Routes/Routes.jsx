import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import MainLayout from '../MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import Blogs from '../../Pages/Blogs/Blogs';
import ErrorHandle from '../../Pages/ErrorHandle/ErrorHandle';
import Details from '../../Pages/Details/Details';




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
            },
            {
                path: '/details/:id',
                loader: () => fetch('/doctors.json'),
                Component:Details,
            }
            ,
            {
                path: '/my-bookings',
                // Component: Bookings,
            },
            {
                path: '/blogs',
                Component: Blogs,
            }
        ],
    },
    {
        path: '*',
        Component: ErrorHandle,
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