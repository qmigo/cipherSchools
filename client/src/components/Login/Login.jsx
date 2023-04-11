import React, {useState, useEffect} from 'react'
import '@/components/Login/login.css'
import {decodeToken} from 'react-jwt'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/slice/userSlice'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

const Login = (props) => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const handleLogin = async()=>{
      setIsLoading(true)
      try {
          if(checkData())
          {
              const {data} = await axios.post(`${process.env.URL}/login`,{
                  email,
                  password
              })
              localStorage.setItem('token', data.token)
              const {userId, name, email:emailId} = decodeToken(data.token)
              
              dispatch(setUser({
                userId,
                name,
                email:emailId
              }))
              props.setIsAuthOpen(false)
              navigate('/profile')
          }

      } catch (error) {
          toast(error)
      }
      setIsLoading(false)
  }
  const checkData = ()=>{
      return true
  }
 
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <div className='login'>
        <div className="input-box">
                <div className="input-title">Email</div>
                <div className="input-password">
                    <input type="email"  placeholder='' onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
        </div>
        <div className="input-box">
                <div className="input-title">Password</div>
                <div className="input-password">
                    <input type="password" placeholder='' onChange={(e)=>{setPassword(e.target.value)}}/>
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" alt="eye" onClick={()=>{}}/>
                </div>
        </div>
        <button className='btn btn-success' onClick={handleLogin}>Login</button>

    </div>
  )
}

export default Login
