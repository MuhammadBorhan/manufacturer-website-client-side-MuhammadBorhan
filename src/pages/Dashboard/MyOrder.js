import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import TableRow from '../TableRow/TableRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [myorders, setMyorders] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/order?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyorders(data))

    }, [user]);
    return (
        <div>
            <h4 className='mt-5'><span className='text-2xl font-bold'>My order:</span> <span className='text-3xl font-bold text-purple-900'>{myorders.length}</span></h4>
            <div>
                {
                    myorders.map(myorder => <TableRow key={myorder._id} myorder={myorder}></TableRow>)
                }
            </div>
        </div>
    );
};

export default MyOrder;