import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useSelector } from 'react-redux'

const Security = () => {

    const token = localStorage.getItem('token')
    const {userId} = useSelector(state=> state.user)
    
    const [isLoading, setIsLoading] = useState(false)

    const [isSecurityActive, setIsSecurityActive] = useState(false)
    const [password, setPassword] = useState('random string bcoz password are not stored at frontend')
    
    const [oldPassword, setOldPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    const handleChangeSecurity = ()=>{
        setIsSecurityActive(!isSecurityActive)
    }
    
    const savePassword = async()=>{
        if(!oldPassword || !newPassword || !confirmPassword)
        {
            alert('All fields are mandatory')
            return
        }

        if(newPassword !== confirmPassword)
        {
            alert("Password and Confirm Password not match")
            return
        }

        try {
            isLoading(true)
            const {data} = await axios.put(`${process.env.URL}/changePassword?userId=${userId}`,{
                oldPassword,
                newPassword
            },
            {
                headers: { Authorization: `Bearer ${token}` }

            }
            )
           
            alert("Password Changed Successfully")
            
        } catch (error) {
            alert(error.response.data.msg)
        }
        isLoading(false)
        setIsSecurityActive(false)
    }

  return (
    <div className="profile-box profile-password">
    <Modal show={isSecurityActive} onHide={()=>{setIsSecurityActive(false)}}>
        <Modal.Body>
            <div className="container">
            <div className="validation-error"></div>
            <div className="input-box">
                <div className="input-title">Old Password</div>
                <div className="input-password">
                    <input type="password" id="old-password" placeholder='Old Password' onChange={(e)=>{setOldPassword(e.target.value)}}/>
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" alt="eye" onClick={()=>{}}/>
                </div>
            </div>
            <div className="input-box">
                <div className="input-title">New Password</div>
                <div className="input-password">
                    <input type="password" id="new-password" placeholder='New Password' onChange={(e)=>{setNewPassword(e.target.value)}}/>
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" alt="eye" onClick={()=>{}}/>
                </div>
            </div>
            <div className="input-box">
                <div className="input-title">Confirm Password</div>
                <div className="input-password">
                    <input type="password" id="confirm-password" placeholder='Confirm Password' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" alt="eye" onClick={()=>{}}/>
                </div>
            </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' className='btn btn-sm ' onClick={()=>{setIsSecurityActive(false)}}>
            Close
          </Button>
          <Button variant='success' disabled={isLoading} className='btn btn-sm ' onClick={savePassword}>
            Save
          </Button>
        </Modal.Footer>
    </Modal>

      <div className="head-strip">
            <span>Password and Security</span>
            <button className='btn' onClick={handleChangeSecurity}>Change</button>
        </div>
        <div className="links-box">
            <div className="link">
                <div className="link-title">Password</div>
                <div className="input-link">
                    <input type="password" value={password} readOnly={true} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Security
