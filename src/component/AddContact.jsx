import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const AddContact = () => {

    const { user } = useSelector(state => state.auth)

    const [contactData, setContactData] = useState({
        email: "",
        name: "",
        phoneno: "",
        avatar: "",
    })

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        // how to submit contact list  on same user in localStorage 

        const users = JSON.parse(localStorage.getItem("userDataa")) || []
        // const updatedUsers = users.map(user => user.email === user.email? {...user, contacts: [...user.contacts, contactData]} : user)
        
        const currentUser = users.find(u => u.email === user.email);

        if (currentUser) {
            currentUser.contacts = currentUser.contacts ? [...currentUser.contacts, contactData] : [contactData];

            const updatedUsers = users.map(u => u.email === user.email ? currentUser : u);
            localStorage.setItem("userDataa", JSON.stringify(updatedUsers));
            setContactData({
                email: "",
                name: "",
                phoneno: "",
                avatar: "",
            });

            alert("Contact added successfully!");

        } else {
            alert("User not found!");
        }
    }

    return (
        <>
            <div className='flex justify-center min-h-[85vh] bg-gray-200'>
                <div className='bg-white p-8 max-w-md w-full my-20 rounded-md shadow-lg'>
                    <h2 className='text-center font-bold text-2xl mb-5'>Add Contact List</h2>
                    <form className='' onSubmit={handleSubmit}>
                        <div className='mb-5'>
                            <label htmlFor='email' className=''>Email: </label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                value={contactData.email}
                                onChange={handleChange}
                                className='border w-full mt-2 rounded text-gray-700 py-2 px-3 shadow leading-tight border-black'
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='name'>Name: </label>
                            <input
                                type="text"
                                id="name"
                                name='name'
                                value={contactData.name}
                                onChange={handleChange}
                                className='border w-full mt-2 rounded text-gray-700 py-2 px-3 shadow leading-tight border-black'
                                placeholder="Enter your Name"
                                required
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='phoneno'>Phone Number: </label>
                            <input
                                type="tel"
                                id="phoneno"
                                name='phoneno'
                                value={contactData.phoneno}
                                onChange={handleChange}
                                className='border w-full mt-2 rounded text-gray-700 py-2 px-3 shadow leading-tight border-black'
                                placeholder="Enter your Phone Number"
                                required
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='avatar'>Profile Photo: </label>
                            <input
                                type="file"
                                name='avatar'
                                accept='image/*'
                                onChange={handleChange}
                                className='border w-full mt-2 rounded text-gray-700 py-2 px-3 shadow leading-tight border-black'
                            />
                        </div>
                        <div>
                            <button className='bg-blue-500 p-2 w-full rounded text-white hover:bg-blue-700'>
                                Add Contact
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddContact
