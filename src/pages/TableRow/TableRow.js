import React from 'react';

const TableRow = ({ myorder, index, handleDelete }) => {
    const { product, quantity } = myorder;

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>{index + 1}</th>
                        <th className='text-left'>{product}</th>
                        <th className='text-left'>{quantity}</th>
                        <th className='text-right'><button onClick={() => handleDelete(myorder._id)} className='text-3xl font-bold text-red-500'>X</button></th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default TableRow;