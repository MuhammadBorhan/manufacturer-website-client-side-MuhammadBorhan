import React from 'react';
import { FaFlagCheckered, FaTasks, FaUsers, FaStar } from 'react-icons/fa';

const Summary = () => {
    return (
        <div className='py-8 border-b-2'>
            <div className='w-3/4 mx-auto text-center'>
                <h2 className='text-sky-500 text-3xl font-bold mb-3'>Manufacturer Justification</h2>
                <p className='text-xl font-bold'>We are a Leader in the Manufacturing Business For Several Industries.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center py-8'>
                <div>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaFlagCheckered /></p>
                    <p className='text-5xl font-bold my-4'>50</p>
                    <p className='text-xl text-blue-400 font-bold'>Countries</p>
                </div>
                <div className='py-12 lg:py-0'>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaTasks /></p>
                    <p className='text-5xl font-bold my-4'>120+</p>
                    <p className='text-xl text-blue-400 font-bold'>Complete Project</p>
                </div>
                <div className='pb-12 lg:pb-0'>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaUsers /></p>
                    <p className='text-5xl font-bold my-4'>68+</p>
                    <p className='text-xl text-blue-400 font-bold'>Happy Clients</p>
                </div>
                <div>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaStar /></p>
                    <p className='text-5xl font-bold my-4'>92+</p>
                    <p className='text-xl text-blue-400 font-bold'>Feedbacks</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;