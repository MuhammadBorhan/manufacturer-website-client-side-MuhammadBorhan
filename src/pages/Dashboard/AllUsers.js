import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const AllUsers = () => {
    // const [allusers, setAllusers] = useState([]);
    // useEffect(() => {
    //     const url = `http://localhost:5000/user`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setAllusers(data))

    // }, []);
    const { data: allusers, isLoading } = useQuery('allusers', () => fetch('http://localhost:5000/user').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className='mt-5 mb-3 text-center text-green-600 text-3xl font-bold'>Total users: {allusers.length}</h4>
            {
                allusers.length === 0 ? <p className='text-center'><Loading></Loading></p> : allusers.map(user => <li>{user.email}</li>)
            }
        </div>
    );
};

export default AllUsers;