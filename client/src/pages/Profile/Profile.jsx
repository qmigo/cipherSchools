import React, { useEffect, useState } from 'react'
import '@/pages/Profile/profile.css'
import { useSelector } from 'react-redux';
import About from '../../components/About/About';
import HeatMap from '../../components/HeatMap/HeatMap';
import OnTheWeb from '../../components/OnTheWeb/OnTheWeb';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';
import Security from '../../components/Security/Security';
import Interest from '../../components/Interest/Interest';
import axios from 'axios';
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const Profile = () => {

    const {userId, name, email} = useSelector(state => state.user)  
    const token = localStorage.getItem('token')
    
    const [isLoading, setIsLoading] = useState(false)
    const [followers, setFollowers] = useState(null)

    const navigate = useNavigate()

    useEffect(()=>{
      async function fetchData(){
        setIsLoading(true)
        try {
            const {data} = await axios.get(`${process.env.URL}/getUser?userId=${userId}`,{
                headers: { Authorization: `Bearer ${token}` }
            })
            setFollowers(data.user.followers.length)
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
        
    <div className='profile'>
      
    <div className="profile-bg">
      <div className="profile-header">
        <div className="avatar">
            <img src="https://lh3.googleusercontent.com/a/AGNmyxaL0ZtIr8uIhE-jjQ965aIQP7-JZkgKaOphtrnkgg=s96-c" alt="dp" />
        </div>
        <div className="header-info">
            <div className="header-info-left">
            <span>Hello,</span>
            <span>{name}</span>
            <span>{email}</span>
            </div>
            <span className='header-followers' onClick={()=>{navigate('/followers')}}>{followers===null?0:followers} Followers</span>
        </div>
      </div>
    </div>
        
     <About/>
     <HeatMap/>
     <OnTheWeb/>
     <PersonalInfo/>
     <Security/>
     <Interest/>
    </div>
    }
    </>
  )
}

export default Profile
