import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../features/authSlice';

const ContactList = () => {

  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const updatedContacts = user.contacts.filter((contact) => contact.id !== id);
    // update user state with updated contacts

    const updatedUser = { ...user, contacts: updatedContacts }

    console.log("Updated User:", updatedUser);
    localStorage.setItem("userDataa", JSON.stringify(updatedUser))


    dispatch(setUser(updatedUser));
    alert("User deleted Successfully");

  }


  return (
    <>
      <div className='flex justify-center min-h-[90vh] bg-gray-100'>
        <div className='bg-white p-8 my-20 w-full max-w-5xl rounded-lg shadow-lg'>
          <h2 className='text-center text-2xl font-bold mb-6'>Contact List</h2>
          <table className='min-w-full border border-gray-300'>
            <thead className='bg-gray-200'>
              <tr>
                <th className='py-3 px-4 border border-gray-300'>Name</th>
                <th className='py-3 px-4 border border-gray-300'>Email</th>
                <th className='py-3 px-4 border border-gray-300'>Phone</th>
                <th className='py-3 px-4 border border-gray-300'>Photo</th>
                <th className='py-3 px-4 border border-gray-300'>Action</th>
              </tr>
            </thead>
            <tbody>
              {user && user.contacts.map((contact, index) => (
                <tr key={index} className='hover:bg-gray-100 '>
                  <td className='py-3 px-4 border border-gray-300'>{contact.name}</td>
                  <td className='py-3 px-4 border border-gray-300'>{contact.email}</td>
                  <td className='py-3 px-4 border border-gray-300'>{contact.phoneno}</td>
                  <td className='py-3 px-4 border border-gray-300'>
                    <img src={contact.avatar} alt="Contact Avatar" className='w-12 h-12 rounded-full object-cover' />
                  </td>
                  <td className='py-3 px-4 border border-gray-300'>
                    <button className='bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 mr-2'>Edit</button>
                    <button onClick={() => handleDelete(contact.id)} className='bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ContactList
