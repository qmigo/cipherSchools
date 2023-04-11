import React, { useEffect, useState } from 'react'
import '@/pages/Profile/profile.css'

import { useSelector } from 'react-redux';
import axios from 'axios'
import About from '../../components/About/About';
import HeatMap from '../../components/HeatMap/HeatMap';
import OnTheWeb from '../../components/OnTheWeb/OnTheWeb';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';
import Security from '../../components/Security/Security';
import Interest from '../../components/Interest/Interest';

const Profile = () => {

    const {name, email} = useSelector(state => state.user)     

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
            <span className='header-followers'>0 Followers</span>
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
