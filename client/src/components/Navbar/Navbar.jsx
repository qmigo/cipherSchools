import React, { useState } from 'react'
import '@/components/Navbar/navbar.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import {AiOutlineHeart, AiOutlineUser} from'react-icons/ai'
import {useSelector} from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'


const listOfOptions = [
  {
    id: 1,
    name: "Game Development"
  },
  {
    id: 2,
    name: "Programming"
  },
  {
    id: 3,
    name: "Data Structures"
  },
  {
    id: 4,
    name: "Machine Learning"
  },
  {
    id: 5,
    name: "Data Science"
  },
  {
    id: 6,
    name: "Web Development"
  },
  {
    id: 7,
    name: "Others"
  },
  
]

const Navbar = () => {
  const navigate = useNavigate()
  const {userId, name} = useSelector(state=> state.user)

  const [isLoginActive, setIsLoginActive] = useState(true)
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const handleAuthBox = ()=>{
    if(userId===null)
    {
      setIsAuthOpen(true);
    }
    else{
      navigate('/profile')
    }
  }

  return ( 
    <div className="navbar">
      <div className="modal-container">
      <Modal show={isAuthOpen} onHide={()=>{setIsAuthOpen(false)}} >
        <Modal.Header closeButton>
        </Modal.Header>
        {
          isLoginActive===true
          ?
          <>
          <Modal.Body>
            <Login setIsAuthOpen={setIsAuthOpen} />
          </Modal.Body>
          <Modal.Footer >
            Get <button className='btn' onClick={()=>{setIsLoginActive(false)}}> <u>Registered</u> </button>  with us now...
          </Modal.Footer>
          </>
          :
          <>
          <Modal.Body>
            <Register setIsLoginActive={setIsLoginActive} />
          </Modal.Body>
          <Modal.Footer >
            Already Registered then <button className='btn' onClick={()=>{setIsLoginActive(true)}}> <u>Login</u> </button>
          </Modal.Footer>
          </>
        }
      </Modal>
      </div>
      <div className="nav-left">
        <div className="nav-logo">
          <img src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png' alt="logo" onClick={()=>{navigate("/")}}/>
        </div>
        <div className="nav-category">
          <span>Home</span>
          <span>Creator Access</span>
          <span>Courses</span>
          <span>Join Us</span>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-search">
          <div className="nav-search-component">
            <ReactSearchAutocomplete 
              className='nav-search-bar'
              items = {listOfOptions}
              placeholder='Search for courses, study material and more'
            />
          </div>
        </div>
        <div className="nav-profile">
          <span className='nav-wishlist'>
            <span><AiOutlineHeart size={"1.2rem"}/></span>
            <span>Wishlist</span> 
            </span>
          <span className='nav-person' onClick={handleAuthBox}>
              <span ><AiOutlineUser size={"1.3rem"} /></span>
              <span>Profile</span> 
            </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
