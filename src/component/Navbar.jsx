import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='bg-slate-400'>

                <div className='flex justify-between mx-7 p-4 '>
                    <div className='text-3xl font-bold'>CONTACT-APP</div>
                    <ul className='flex gap-4'>
                        <li className='text-xl'><Link to={"/"}>Signin</Link></li>
                        <li className='text-xl'><Link to={"/signup"}>Signup</Link></li>
                        <li className='text-xl'><Link to={"/list"}>ContactList</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
