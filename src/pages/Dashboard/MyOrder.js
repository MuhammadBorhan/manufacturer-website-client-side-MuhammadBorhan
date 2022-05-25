import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';
import TableRow from '../TableRow/TableRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [myorders, setMyorders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/orders?email=${email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
            .then(data => setMyorders(data))

    }, [user, navigate]);

    const handleDelete = id => {
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
    return (
        <div>
            <h4 className='mt-5 mb-3'><span className='text-2xl font-bold'>My order:</span> <span className='text-3xl font-bold text-purple-900'>{myorders.length}</span></h4>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                        <div>
                            {
                                myorders.length === 0 ? <p className='text-center'><Loading></Loading></p> : myorders.map((myorder, index) => <TableRow key={myorder._id} handleDelete={handleDelete} index={index} myorder={myorder}></TableRow>)
                            }
                        </div>
                    </tbody>
                </table>
            </div >
        </div>
    );
};

export default MyOrder;