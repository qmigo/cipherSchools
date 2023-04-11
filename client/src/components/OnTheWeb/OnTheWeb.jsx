import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {toast} from 'react-toastify'


const OnTheWeb = () => {

    const token = localStorage.getItem('token')
    const {userId} = useSelector(state=> state.user)
    const [isLoading, setIsLoading] = useState(false)

    const [isOnTheWebActive, setIsOnTheWebActive] = useState(null)  
      
    const [linkedIn, setLinkedIn] = useState(null)
    const [github, setGithub] = useState(null)
    const [facebook, setFacebook] = useState(null)
    const [twitter, setTwitter] = useState(null)
    const [instagram, setInstagram] = useState(null)
    const [website, setWebsite] = useState(null)

    const handleChangeOnTheWeb = ()=>{
        if(isOnTheWebActive===null)
        setIsOnTheWebActive(true)
        else
        setIsOnTheWebActive(!isOnTheWebActive)
    }

    async function fetchData(){
        setIsLoading(true)
        try {
            const {data} = await axios.get(`${process.env.URL}/getUser?userId=${userId}`,{
                headers: { Authorization: `Bearer ${token}` }
            })
            setFacebook(data.user.facebook)
            setTwitter(data.user.twitter)
            setInstagram(data.user.instagram)
            setLinkedIn(data.user.linkedin)
            setGithub(data.user.github)
            setWebsite(data.user.website)
        } catch (error) {
            toast(error)
        }
        setIsLoading(false)
    }

    async function postData(){
        if(!userId)
        {
            toast('userId not exist')
            return
        }
        setIsLoading(true)
        try {
            await axios.put(`${process.env.URL}/updateUser?userId=${userId}`,{
                linkedin: linkedIn,
                github,
                facebook,
                twitter,
                instagram,
                website
            },{
                headers: { Authorization: `Bearer ${token}` }
            })
        } catch (error) {
            toast(error)
        }
        setIsLoading(false)
    }

    useEffect(()=>{

        if(isOnTheWebActive===false)
        {       
            async function reFetch(){
                await postData()
                await fetchData()
                
            }
            reFetch()
        }
        
    },[isOnTheWebActive])

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
    {
    !isLoading?
    <div className="profile-box profile-web-links">
      <div className="head-strip">
            <span>On the Web</span>
            <button className='btn' onClick={handleChangeOnTheWeb}>{isOnTheWebActive?"Save":"Edit"}</button>
        </div>
        <div className="links-box">
            <div className="link">
                <div className="link-title">LinkedIn</div>
                <div className="input-link" >
                    <div className="input-icon">
                        <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" alt="linkedIn" />
                    </div>
                    <input value={linkedIn} type="text" placeholder='LinkedIn' onChange={(e)=>setLinkedIn(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:!isOnTheWebActive===true?"none":"block"}}>
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt="pencil" />
                    </span>
                </div>
            </div>
            <div className="link">
                <div className="link-title">Github</div>
                <div className="input-link">
                    <div className="input-icon">
                    <img src="https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg" alt="github" />
                    </div>
                    <input value={github} type="text" placeholder='Github' onChange={(e)=>setGithub(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:!isOnTheWebActive===true?"none":"block"}}>
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt="pencil" />
                    </span>
                </div>
            </div>
            <div className="link">
                <div className="link-title">Facebook</div>
                <div className="input-link">
                    <div className="input-icon">
                    <img src="https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg" alt="facebook" />
                    </div>
                    <input value={facebook} type="text" placeholder='Facebook' onChange={(e)=>setFacebook(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:!isOnTheWebActive===true?"none":"block"}}>
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt="pencil" />
                    </span>
                </div>
            </div>
            <div className="link">
                <div className="link-title">Twitter</div>
                <div className="input-link">
                    <div className="input-icon">
                    <img src="https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg" alt="Twitter" />
                    </div>
                    <input value={twitter} type="text" placeholder='Twitter' onChange={(e)=>setTwitter(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:!isOnTheWebActive===true?"none":"block"}}>
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt="pencil" />
                    </span>
                </div>
            </div>
            <div className="link">
                <div className="link-title">Instagram</div>
                <div className="input-link">
                    <div className="input-icon">
                    <img src="https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg" alt="Instagram" />
                    </div>
                    <input value={instagram} type="text" placeholder='Instagram' onChange={(e)=>setInstagram(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:!isOnTheWebActive===true?"none":"block"}}>
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt="pencil" />
                    </span>
                </div>
            </div>
            <div className="link">
                <div className="link-title">Website</div>
                <div className="input-link">
                    <div className="input-icon">
                    <img src="https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg" alt="Website" />
                    </div>
                    <input value={website} type="text" placeholder='Website' onChange={(e)=>setWebsite(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:!isOnTheWebActive===true?"none":"block"}}>
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt="pencil" />
                    </span>
                </div>
            </div>
        </div>
      </div>
      :<h1>Loading</h1>
      }
      </>
  )
}

export default OnTheWeb
