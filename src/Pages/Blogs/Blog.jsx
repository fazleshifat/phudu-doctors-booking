import React from 'react';
import { MdEditCalendar } from "react-icons/md";


const Blog = ({ blog }) => {
    return (
        <div className="hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl card mx-auto w-11/12 my-8 bg-base-100 card-xl shadow-xl rounded-3xl">
            <div className="card-body p-5 md:p-16 space-y-4">
                <h2 className="text-start text-gray-500 text-xl md:text-3xl font-bold">{blog.id}. {blog.question}</h2>

                <hr className='w-full opacity-30' />

                <p className='text-lg md:text-xl opacity-60'>{blog.answer}</p>

                <hr className='w-full opacity-30' />

                <div className='flex items-center gap-3'>
                <MdEditCalendar className='text-2xl md:text-4xl '/> Added on -- <span className='font-semibold'>{blog.date}</span>
                </div>

            </div>
        </div>
    );
};

export default Blog;