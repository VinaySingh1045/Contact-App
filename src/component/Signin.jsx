import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../features/authSlice'

const Signin = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here

    const Data = JSON.parse(localStorage.getItem("userDataa"));

    const findUser = Data.find((user) => user.email === userData.email && user.password === userData.password)

    if (findUser) {
      // alert('Login successful!')
      // window.location.href = '/list'; // Redirect to contact list page
      dispatch(setUser(findUser));
      navigate("/list");
    }
    else {
      alert('Invalid credentials!')
    }


  }

  return (
    <>
      <div className='flex justify-center min-h-[89vh] bg-gray-200'>
        <div className='bg-white p-8 max-w-md w-full my-20 rounded-md shadow-lg'>
          <h2 className='text-center font-bold text-2xl mb-5'>Login</h2>
          <form className='' onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label htmlFor='email' className=''>Email: </label>
              <input
                type="email"
                id="email"
                name='email'
                value={userData.email}
                onChange={handleChange}
                className='border w-full mt-2 rounded text-gray-700 py-2 px-3 shadow leading-tight border-black'
                placeholder="Enter your email"
                required
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='password'>Password: </label>
              <input
                type="password"
                id="password"
                name='password'
                value={userData.password}
                onChange={handleChange}
                className='border w-full mt-2 rounded text-gray-700 py-2 px-3 shadow leading-tight border-black'
                placeholder="Enter your Password"
                required
              />
            </div>
            <div>
              <button className='bg-blue-500 p-2 w-full rounded text-white hover:bg-blue-700'>
                Signin
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin
