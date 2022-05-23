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
                <label for="confirm_purchase" class="btn modal-button">Confirm Purchase</label>
            </div>

            <div>
                <input type="checkbox" id="confirm_purchase" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div class="modal-action">
                            <label for="confirm_purchase" class="btn">Confirm</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;