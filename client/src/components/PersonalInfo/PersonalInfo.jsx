import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios'
import { useSelector } from 'react-redux'

const PersonalInfo = () => {

    const token = localStorage.getItem('token')
    const {userId} = useSelector(state=> state.user)
    
    const [isLoading, setIsLoading] = useState(false)

    const [isProffInfopActive, setIsProffInfoActive] = useState(null)
    const [highestEd, setHighestEd] = useState(null)
    const [job, setJob] = useState(null)

    const handleChangeProffInfo = ()=>{
        if(isProffInfopActive===null)
        setIsProffInfoActive(true)
        else
        setIsProffInfoActive(!isProffInfopActive)
    }

    async function fetchData(){
        setIsLoading(true)
        try {
            const {data} = await axios.get(`${process.env.URL}/getUser?userId=${userId}`,{
                headers: { Authorization: `Bearer ${token}` }
            })
            setHighestEd(data.user.education)
            setJob(data.user.occupation)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    async function postData(){
        if(!userId)
        {
            console.log('userId not exist')
            return
        }
        setIsLoading(true)
        try {
            await axios.put(`${process.env.URL}/updateUser?userId=${userId}`,{
                occupation: job,
                education: highestEd
            },{
                headers: { Authorization: `Bearer ${token}` }
            })
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        if(isProffInfopActive===false)
        {       
            async function reFetch(){
                await postData()
                await fetchData()
                
            }
            reFetch()
        }
    },[isProffInfopActive])

    useEffect(()=>{
        fetchData()
    }, [])

  return (
    <>
    {!isLoading?
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
                    <Dropdown.Item  onClick={(e)=>{setHighestEd(e.target.innerText)}} >Primary</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setHighestEd(e.target.innerText)}} >Secondary</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setHighestEd(e.target.innerText)}} >Higher Secondary</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setHighestEd(e.target.innerText)}} >Graduation</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setHighestEd(e.target.innerText)}} >Post Graduation</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="link">
                <div className="link-title">What do you do currently ?</div>
                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic"  disabled={!isProffInfopActive}>
                {job===null?"Choose an occupation":job}
                    
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item  onClick={(e)=>{setJob(e.target.innerText)}} >Schooling</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setJob(e.target.innerText)}} >College Student</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setJob(e.target.innerText)}} >Teaching</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setJob(e.target.innerText)}} >Job</Dropdown.Item>
                    <Dropdown.Item  onClick={(e)=>{setJob(e.target.innerText)}} >Freelancing</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
      </div>
        :
        <h1>Loading</h1>    
    }
      </>
  )
}

export default PersonalInfo
