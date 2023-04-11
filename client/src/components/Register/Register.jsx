import React, { useState } from 'react'
import '@/components/Register/register.css'
import axios from 'axios'
import {toast} from 'react-toastify'


const Register = (props) => {
   
    const [isLoading, setIsLoading] = useState(false)
    const handleRegister = async()=>{
        setIsLoading(true)
        try {
            if(checkData())
            {
                await axios.post(`${process.env.URL}/register`,{
                    firstName,
                    lastName,
                    email,
                    phone,
                    password
                })
                props.setIsLoginActive(true)
                
            }            
        } catch (error) {
            toast(error)
        }
        setIsLoading(false)
    }
    const checkData = ()=>{
        return true
    }
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)

  return (
    <div className='register'>
      <div className="input-box">
                <div className="input-title">First Name</div>
                <div className="input-password">
                    <input type="email"  placeholder='' onChange={(e)=>{setFirstName(e.target.value)}}/>
                </div>
        </div>
        <div className="input-box">
                <div className="input-title">Last Name</div>
                <div className="input-password">
                    <input type="email"  placeholder='' onChange={(e)=>{setLastName(e.target.value)}}/>
                </div>
        </div>
        <div className="input-box">
                <div className="input-title">Email</div>
                <div className="input-password">
                    <input type="email"  placeholder='' onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
        </div>
        <div className="input-box">
                <div className="input-title">Phone</div>
                <div className="input-password">
                    <input type="text"  placeholder='(optional)' onChange={(e)=>{setPhone(e.target.value)}}/>
                </div>
        </div>
        <div className="input-box">
                <div className="input-title">Password</div>
                <div className="input-password">
                    <input type="password" placeholder='' onChange={(e)=>{setPassword(e.target.value)}}/>
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" alt="eye" onClick={()=>{}}/>
                </div>
        </div>
        <button disabled={isLoading} className='btn btn-success' onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register
