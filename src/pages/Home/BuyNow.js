import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const BuyNow = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [relode, setRelode] = useState(false);
    const { _id, name, img, price, minQuantity, avlbQuantity } = product;


    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setRelode(!relode)
            })
    }, [id, relode, product]);
    return (
        <div className='py-12'>
            <div className="card w-96 bg-base-100 mx-auto shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Minimum Quantity: {minQuantity}</p>
                    <p>Available Quantity: {avlbQuantity}</p>
                    <p>Per unit price: ${price}</p>
                </div>
                <label for="confirm_purchase" className="btn modal-button">Confirm Order</label>
            </div>

            <div>
                <input type="checkbox" id="confirm_purchase" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Product name</h3>
                        <input type="text" disabled value={user.displayName} className="input input-bordered w-full max-w-xs text-xl font-bold mb-2" />
                        <input type="text" disabled value={user.email} className="input input-bordered w-full max-w-xs text-xl font-bold" />
                        <div className="modal-action">
                            <label for="confirm_purchase" className="btn">Confirm</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;