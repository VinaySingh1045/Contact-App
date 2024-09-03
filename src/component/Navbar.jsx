import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../features/authSlice'

const Navbar = () => {
    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        // localStorage.removeItem("userDataa")
        dispatch(setUser(null))
        navigate("/")
    }

    return (
        <>
            <div className='bg-slate-400'>

                <div className='flex justify-between mx-7 p-4 '>
                    <div className='text-3xl font-bold'>CONTACT-APP</div>
                    <ul className='flex gap-4'>
                        {
                            !user ?
                                <>
                                    <li className='text-xl'><Link to={"/"}>Signin</Link></li>
                                    <li className='text-xl'><Link to={"/signup"}>Signup</Link></li>
                                </>
                                :
                                <>
                                    <li className='text-xl'><Link to={"/list"}>ContactList</Link></li>
                                    <li className='text-xl'><Link to={"/addlist"}>AddContact</Link></li>
                                    <li className='text-xl'>
                                        <button onClick={handleLogout} className=''>
                                            Logout
                                        </button>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
