import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const MoneyPayment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Payment for: {order.name}</h1>
        </div>
    );
};

export default MoneyPayment;