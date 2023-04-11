import './App.css'
import { Route, Routes } from 'react-router-dom'
import Profile from '@/pages/Profile/Profile'
import '@/pages/Profile/profile.css'
import Navbar from '@/components/Navbar/Navbar'
import { useDispatch } from 'react-redux'
import {decodeToken} from 'react-jwt'
import { setUser } from '@/slice/userSlice'


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  if(token)
  {
    const {userId, name, email} = decodeToken(token)
    console.log(userId, name, email)
    dispatch(setUser({
      userId,
      name,
      email
    }))
  }

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path='/'  element={<Home/>}></Route> */}
        {/* <Route path='/login'  element={<Login/>}></Route> */}
        {/* <Route path='/register' element={<Register/>}></Route> */}
        <Route path='/profile' element={<Profile/>}></Route>
        {/* <Route path='/followers' element={<Followers/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
