import './App.css'
import { Route, Routes } from 'react-router-dom'
import Profile from '@/pages/Profile/Profile'
import '@/pages/Profile/profile.css'
import Navbar from '@/components/Navbar/Navbar'
import { useDispatch } from 'react-redux'
import {decodeToken} from 'react-jwt'
import { setUser } from '@/slice/userSlice'
import Home from './pages/Home/Home'
import Followers from './pages/Followers/Followers'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  if(token)
  {
    const {userId, name, email} = decodeToken(token)
    dispatch(setUser({
      userId,
      name,
      email
    }))
  }

  return (
    <div className="App">
      <ToastContainer autoClose={5000}
      position="top-right"
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={true}
      theme="light"
      />
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/followers' element={<Followers/>}></Route>
      </Routes>
    </div>
  )
}

export default App
