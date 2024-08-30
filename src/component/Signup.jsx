import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("userData")) || []
    console.log(getData)
    setData(getData);
  }, [])


  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert("Password and Confirm Password does not match");
      return;
    }


    const newData = { id: uuidv4(), ...userData }
    const updatedData = [...data, newData]

    setData(updatedData)

    localStorage.setItem("userData", JSON.stringify(updatedData))

    setUserData({ email: "", password: "", confirmPassword: "" });
    // alert("User Registered Successfully");
    navigate("/")

  }

  return (
    <>
      <div className='flex justify-center min-h-[85vh] bg-gray-200'>
        <div className='bg-white p-8 max-w-md w-full my-20 rounded-md shadow-lg'>
          <h2 className='text-center font-bold text-2xl mb-5'>Signup</h2>
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
            <div className='mb-5'>
              <label htmlFor='confirmPassword'>Confirm Password: </label>
              <input
                type="password"
                id="confirmPassword"
                name='confirmPassword'
                value={userData.confirmPassword}
                onChange={handleChange}
                className='border w-full mt-2 rounded text-gray-700 py-2 px-3 shadow leading-tight border-black'
                placeholder="Enter your Confirm Password"
                required
              />
            </div>
            <div>
              <button className='bg-blue-500 p-2 w-full rounded text-white hover:bg-blue-700'>
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
