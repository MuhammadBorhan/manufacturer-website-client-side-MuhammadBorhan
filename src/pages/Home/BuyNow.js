import React from 'react';

const BuyNow = () => {
    return (
        <div className='py-12'>
            <div class="card w-96 bg-base-100 mx-auto shadow-xl">
                <figure class="px-10 pt-10">
                    <img src='buynow' alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Name</h2>
                    <p>Minimum Quantity: </p>
                    <p>Available Quantity: </p>
                    <p>Per unit price:</p>
                    <p>Description</p>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;