import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'


const About = () => {
    
    const token = localStorage.getItem('token')
    const {userId} = useSelector(state=> state.user)
    
    const [isLoading, setIsLoading] = useState(false)

    const [aboutMe, setAboutMe] = useState("")
    const [isAboutMeActive, setIsAboutMeActive] = useState(null)
    const handleChangeAboutMe = ()=>{
        if(isAboutMeActive===null)
        setIsAboutMeActive(true)
        else
        setIsAboutMeActive(!isAboutMeActive)
    }

    async function fetchData(){
        setIsLoading(true)
        try {
            const {data} = await axios.get(`${process.env.URL}/getUser?userId=${userId}`,{
                headers: { Authorization: `Bearer ${token}` }
            })
            setAboutMe(data.user.about)
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
                about: aboutMe
            },{
                headers: { Authorization: `Bearer ${token}` }
            })
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    useEffect(()=>{

        if(isAboutMeActive===false)
        {       
            async function reFetch(){
                await postData()
                await fetchData()
                
            }
            reFetch()
        }
        
    },[isAboutMeActive])

    useEffect(()=>{
        fetchData()  
    },[])
    return (
    <>
    {
    !isLoading ? 
    <div className="profile-box profile-about-me">
        <div className="head-strip">
            <span>About Me</span>
            <button className='btn' onClick={handleChangeAboutMe} >{isAboutMeActive?"Save":"Edit"}</button>
        </div>
        <div className="about-text">
            <textarea  rows="4" disabled={!isAboutMeActive} placeholder='Something about you ...' value={aboutMe} onChange={(e)=>{setAboutMe(e.target.value)}}></textarea>
            
            <span className="edit-icon" style={{display:isAboutMeActive===true?"block":"none"}}>
                <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt="pencil" />
            </span>
        </div>
    </div>
    : <h1>Loading</h1>
    }
    </>
  )
}

export default About
