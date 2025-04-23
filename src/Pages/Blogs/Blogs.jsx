import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {

    const data = useLoaderData();
    // console.log(data)

    return (
        <div className='bg-base-300 py-6 md:py-18'>
            <div className="card bg-gray-200 mx-auto w-11/12 card-xl shadow-2xl rounded-3xl">
                <div className="card-body mx-auto text-center space-y-4">
                    <h2 className="text-center text-gray-500 text-2xl md:text-5xl font-bold">Daily Blogs</h2>

                    <hr className='w-6/12 mx-auto opacity-30' />

                    <p>Here are some Important Concept Abount React Javascript</p>
                </div>
            </div>


            <div className='grid grid-cols-1 mx-auto mt-6 md:mt-18'>
                {
                    data.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>

        </div>
    );
};

export default Blogs;