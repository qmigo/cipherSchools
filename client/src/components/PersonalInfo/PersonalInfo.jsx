import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


const PersonalInfo = () => {

    const [isProffInfopActive, setIsProffInfoActive] = useState(false)
    const [highestEd, setHighestEd] = useState(null)
    const [job, setJob] = useState(null)

    const handleChangeProffInfo = ()=>{
        setIsProffInfoActive(!isProffInfopActive)
    }

  return (
    <div className="profile-box profile-personal-info">
        <div className="head-strip">
            <span>PROFESSIONAL INFORMATION</span>
            <button className='btn' onClick={handleChangeProffInfo} >{isProffInfopActive?"Save":"Edit"}</button>
        </div>
        <div className="links-box">
            <div className="link">
                <div className="link-title">Highest Education</div>
                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" disabled={!isProffInfopActive}>
                    {highestEd===null?"Choose an education":highestEd}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item  onClick={(e)=>{setHighestEd(e.target.innerText)}} >Action</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setHighestEd(e.target.innerText)}} >Another action</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setHighestEd(e.target.innerText)}} >Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="link">
                <div className="link-title">What do you do currently ?</div>
                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic"  disabled={!isProffInfopActive}>
                {job===null?"Choose an occupation":highestEd}
                    
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item  onClick={(e)=>{setJob(e.target.innerText)}} >Action</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setJob(e.target.innerText)}} >Another action</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setJob(e.target.innerText)}} >Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
      </div>
  )
}

export default PersonalInfo
