import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Interest = () => {

    const [isInterestActive, setIsInterestActive] = useState(false)
    const [interests, setInterests] = useState(null)

    const saveInterest = ()=>{
        console.log("interests")
        setIsInterestActive(false)
    }

  return (
    <div className="profile-box profile-interests">
        <Modal show={isInterestActive} onHide={()=>{setIsInterestActive(false)}}>
        <Modal.Body>
            <div className="interest-container">
                <div className="interest-item">App Development</div>
                <div className="interest-item">Game Development</div>
                <div className="interest-item">Programming</div>
                <div className="interest-item">Data Structures</div>
                <div className="interest-item">Machine Learning</div>
                <div className="interest-item">Data Science</div>
                <div className="interest-item">Web Development</div>
                <div className="interest-item">Others</div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' className='btn btn-sm ' onClick={()=>{setIsInterestActive(false)}}>
            Close
          </Button>
          <Button variant='success' className='btn btn-sm ' onClick={saveInterest}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <div className="head-strip">
            <span>Password and Security</span>
            <button className='btn' onClick={()=>{setIsInterestActive(true)}}>Change</button>
        </div>
        <div className="interest-box">
            <span className="interest-item">Machine Learning</span>
            <span className="interest-item">Data Structures and Algorithms</span>
            <span className="interest-item">MERN STACK Development</span>
            <span className="interest-item">Machine Learning</span>
            <span className="interest-item">Machine Learning</span>
        </div>
      </div>
  )
}

export default Interest
