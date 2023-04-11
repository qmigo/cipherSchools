import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const {userId} = useSelector(state=> state.user)

  useEffect(()=>{
    if(userId)
    navigate('/profile')
  },[])
  return (
    <div className='Home'>
      <h1 className='text-center my-3'>Kindly Login or Register first</h1>
      <h4 className='text-center my-3'>In the Navbar the Profile Icon at right most is for Login/Register</h4>
    </div>
  )
}

export default Home
