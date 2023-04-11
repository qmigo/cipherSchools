import React, { useEffect, useState } from 'react'
import '@/pages/Followers/followers.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import dummyImage from '@/assets/dummy-image.jpg' 
import {toast} from 'react-toastify'

const Followers = () => {

  const token = localStorage.getItem('token')
  const {userId} = useSelector(state=> state.user)
  
  const [isLoading, setIsLoading] = useState(false)
  const [followers, setFollowers] = useState(null)

  useEffect(()=>{
    async function fetchData(){
      setIsLoading(true)
      try {
        const {data} = await axios.get(`${process.env.URL}/getFollowerDetails?userId=${userId}&pageSize=5&page=1`)
        setFollowers(data.list)
      } catch (error) {
        toast(error)
      }
      setIsLoading(false)
    }
    fetchData()
  },[])

  return (
    <>
    {
      followers && 
      <div className='followers'>
        <div className="follow-header">
          <span>Users Following You</span>
        </div>
        <div className="card-container">
        {
          followers.map((follower, index)=>(
            <div key={index} className="card">
              <div className="card-img">
                <img src={dummyImage} alt="" />
              </div>
              <div className="card-desc">
                <h5>{follower.firstName} {follower.lastName}</h5>
                <span>{follower.occupation}</span>
                <span>{follower.followers.length} Followers</span>
                <button className='btn btn-outline-dark w-100'>Follow</button>
              </div>
            </div>
          ))
        }
        </div>
        
      </div>
    }
    </>
  )
}

export default Followers
