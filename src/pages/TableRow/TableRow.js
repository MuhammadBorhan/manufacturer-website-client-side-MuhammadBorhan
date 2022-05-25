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
                        <th className='text-right'> <label for="my-modal-6" class="btn modal-button">Delete</label></th>
                        <th> <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                    <div class="modal-action">
                                        <button onClick={() => handleDelete(myorder._id)} className='btn text-3xl font-bold text-red-500'>Confirm Delete</button>
                                        <label for="my-modal-6" class="btn">Cancel</label>
                                    </div>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
            </table>
        </div >
    );
};

export default TableRow;