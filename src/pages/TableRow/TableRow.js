import React from 'react';

const TableRow = ({ myorder, index, handleDelete, setOrderDelete }) => {
    const { product, quantity } = myorder;

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='text-left'>{product}</td>
            <td className='text-left'>{quantity}</td>
            <td className='text-right'>
                <label onClick={() => setOrderDelete(myorder)} for="Delete-order-modal" class="btn btn-error text-white font-bold">Delete</label>

            </td>

        </tr>
    );
};

export default TableRow;