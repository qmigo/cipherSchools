import './App.css'
import { Route, Routes } from 'react-router-dom'
import Profile from '@/pages/Profile/Profile'
import './pages/Profile/profile.css'
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
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
