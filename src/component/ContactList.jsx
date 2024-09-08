import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../features/authSlice';

const ContactList = () => {

  const { user } = useSelector(state => state.auth)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // console.log(id);

    const updatedContacts = user.contacts.filter((contact) => contact.id !== id);

    const newUser = { ...user, contacts: updatedContacts }

    const users = JSON.parse(localStorage.getItem('userDataa')) || [];
    const updatedUsers = users.map((u) => u.email === newUser.email ? newUser : u) || [];
    localStorage.setItem('userDataa', JSON.stringify(updatedUsers));

    dispatch(setUser(newUser));

    alert('Contact deleted successfully');


  }

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }

  const handleEdit = (contact) => {
    setIsEditing(true);
    setEditData(contact);
  }

  const handleEditData = (e) => {
    e.preventDefault();
    const updatedContacts = user.contacts.map((contact) => (
      contact.id === editData.id ? editData : contact
    ))
    const newuser = { ...user, contacts: updatedContacts }

    //updating in LocalStorage.
    const datas = JSON.parse(localStorage.getItem("userDataa"));
    const updatedData = datas.map((data => data.email === newuser.email ? newuser : data))

    localStorage.setItem('userDataa', JSON.stringify(updatedData));

  // Update the Redux store
  dispatch(setUser(newuser));

  // Reset edit mode and clear form
  setIsEditing(false);
  setEditData(null);

  alert('Contact updated successfully');


  }


  return (
    <>
      <div className='flex justify-center min-h-[90vh] bg-gray-100'>
        <div className='bg-white p-8 my-20 w-full max-w-5xl rounded-lg shadow-lg'>
          <h2 className='text-center text-2xl font-bold mb-6'>Contact List</h2>

          {
            isEditing ? <>
              <h2 className='text-center text-2xl font-bold mb-6'>Edit Contact List</h2>

              <form className='' onSubmit={handleEditData}>
                <div className='mb-5'>
                  <label htmlFor='email' className=''>Email: </label>
                  <input
                    type="email"
                    id="email"
                    name='email'
                    value={editData.email}
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
                    value={editData.name}
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
                    value={editData.phoneno}
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
                    Update Contact
                  </button>
                </div>
                
                <div><button onClick={()=>setIsEditing(false)} className='bg-gray-500 p-2 w-full rounded mt-3 text-white hover:bg-blue-700'>
                    Cancel
                  </button></div>
              </form>
            </>
              :

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
                  {user && user?.contacts?.map((contact, index) => (
                    <tr key={index} className='hover:bg-gray-100 '>
                      <td className='py-3 px-4 border border-gray-300'>{contact.name}</td>
                      <td className='py-3 px-4 border border-gray-300'>{contact.email}</td>
                      <td className='py-3 px-4 border border-gray-300'>{contact.phoneno}</td>
                      <td className='py-3 px-4 border border-gray-300'>
                        <img src={contact.avatar} alt="Contact Avatar" className='w-12 h-12 rounded-full object-cover' />
                      </td>
                      <td className='py-3 px-4 border border-gray-300'>
                        <button onClick={() => handleEdit(contact)} className='bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 mr-2'>Edit</button>
                        <button onClick={() => handleDelete(contact.id)} className='bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600'>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          }
        </div>
      </div>
    </>
  )
}

export default ContactList
