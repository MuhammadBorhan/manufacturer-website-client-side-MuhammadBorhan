import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import TableRow from '../TableRow/TableRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [myorders, setMyorders] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/orders?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyorders(data))

    }, [user]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/myorder/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = myorders.filter(product => product._id !== id);
                    console.log(rest)
                    setMyorders(rest);
                })
        }
    }
    return (
        <div>
            <h4 className='mt-5 mb-3'><span className='text-2xl font-bold'>My order:</span> <span className='text-3xl font-bold text-purple-900'>{myorders.length}</span></h4>
            <div>
                {
                    myorders.map((myorder, index) => <TableRow key={myorder._id} handleDelete={handleDelete} index={index} myorder={myorder}></TableRow>)
                }
            </div>
        </div>
    );
};

export default MyOrder;