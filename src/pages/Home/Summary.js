import React from 'react';
import { FaHandshake, FaMoneyBillAlt, FaCarCrash, FaStar } from 'react-icons/fa';

const Summary = () => {
    return (
        <div className='py-8 border-b-2'>
            <div className='w-3/4 mx-auto text-center'>
                <h2 className='text-sky-500 text-3xl font-bold mb-3'>Manufacturer Justification</h2>
                <p className='text-xl font-bold'>We are a Leader in the Manufacturing Business For Several Industries.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center py-8'>
                <div>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaHandshake /></p>
                    <p className='text-5xl font-bold my-4'>50+</p>
                    <p className='text-xl text-blue-400 font-bold'>Served</p>
                </div>
                <div className='py-12 lg:py-0'>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaMoneyBillAlt /></p>
                    <p className='text-5xl font-bold my-4'>35M+</p>
                    <p className='text-xl text-blue-400 font-bold'>Annual Revenue</p>
                </div>
                <div className='pb-12 lg:pb-0'>
                    <p className='text-6xl text-blue-400 flex justify-center'><FaCarCrash /></p>
                    <p className='text-5xl font-bold my-4'>15+</p>
                    <p className='text-xl text-blue-400 font-bold'>Car Parts</p>
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