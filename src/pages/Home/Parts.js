import React from 'react';
import useProducts from '../CustomHook/useProducts';
import Loading from '../Loading/Loading';
import Part from './Part';

const Parts = () => {
    const [products] = useProducts();
    return (
        <div className='px-12 py-8'>
            <h1 className='text-center text-indigo-500 font-bold text-3xl'>Total Parts: {products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.length === 0 ? <p className='text-center'><Loading></Loading></p> : products.slice(0, 6).map(product => <Part product={product}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;