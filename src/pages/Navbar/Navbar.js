import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }



    const menuItems = <>
        <li><Link to='/home' className='text-xl font-bold'>Home</Link></li>
        <li><Link to='/home' className='text-xl font-bold'>Cotact</Link></li>
        {
            user ? <button onClick={logout} className='text-xl font-bold'>Logout</button> : <li><Link to='/login' className='text-xl font-bold'>Login</Link></li>
        }
        <li><Link to='/register' className='text-xl font-bold'>Register</Link></li>
    </>
    return (
        <div className="navbar px-12 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl">daisyUI</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div>
                <p className='text-xl text-indigo-600 font-bold'>{user?.displayName}</p>
            </div>
        </div>
    );
};

export default Navbar;