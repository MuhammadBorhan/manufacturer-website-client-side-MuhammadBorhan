import React from 'react';
import useProducts from '../CustomHook/useProducts';
import Loading from '../Loading/Loading';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = products.filter(product => product._id !== id);
                    console.log(rest)
                    setProducts(rest);
                })
        }
    }
    return (
        <div>
            <h4 className='mt-5 mb-3'><span className='text-2xl font-bold'>Total Manage Products:</span> <span className='text-3xl font-bold text-purple-900'>{products.length}</span></h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    products.length === 0 ? <p className='text-center'><Loading></Loading></p> : products.map(order => <div key={order._id} className='bg-slate-600 p-4 text-white'>
                        <div>
                            <img src={order.img} alt="" />
                            <div className='mt-4'>
                                <p>{order.name}</p>
                                <p>{order.email}</p>
                                <button onClick={() => handleDelete(order._id)} className='btn btn-error block mx-auto mt-6 font-bold'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;