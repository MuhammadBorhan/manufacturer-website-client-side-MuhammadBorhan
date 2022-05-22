import React from 'react';

const Part = ({ product }) => {
    const { name, img, price, minQuantity, avlbQuantity, description, } = product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Minimum Quantity: {minQuantity}</p>
                <p>Available Quantity: {avlbQuantity}</p>
                <p>Per unit price: {price}</p>
                <p>{description}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;