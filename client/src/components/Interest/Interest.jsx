import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useSelector } from 'react-redux'
import {toast} from 'react-toastify'


const codeMap = {
  'appDev':'App Development',
  'prog':'Programming',
  'ds':'Data Structures',
  'ml':'Machine Learning',
  'dataSci':'Data Science',
  'webDev':'Web Development',
  'others':'Others'
}

const Interest = () => {

    const token = localStorage.getItem('token')
    const {userId} = useSelector(state=> state.user)
    
    const [isLoading, setIsLoading] = useState(false)

    const [isInterestActive, setIsInterestActive] = useState(null)
    const [interests, setInterests] = useState([])

    const [appDev, setAppDev] = useState(false)
    const [prog, setProg] = useState(false)
    const [ds, setDs] = useState(false)
    const [ml, setMl] = useState(false)
    const [dataSci, setDataSci] = useState(false)
    const [webDev, setWebDev] = useState(false)
    const [others, setOthers] = useState(false)


    async function fetchData(){
      setIsLoading(true)
      try {
          const {data} = await axios.get(`${process.env.URL}/getUser?userId=${userId}`,{
              headers: { Authorization: `Bearer ${token}` }
            })
            setInterests(data.user.interest)
            data.user.interest.forEach((item)=>{
              if(item==='appDev') setAppDev(true)
              if(item==='prog') setProg(true)
              if(item==='ds') setDs(true)
              if(item==='ml') setMl(true)
              if(item==='dataSci') setDs(true)
              if(item==='webDev') setWebDev(true)
              if(item==='others') setOthers(true)
            })
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
        let dataInterst = []
        appDev?dataInterst.push('appDev'): '';
        prog?dataInterst.push('prog'): '';
        ds?dataInterst.push('ds'): '';
        ml?dataInterst.push('ml'): '';
        dataSci?dataInterst.push('dataSci'): '';
        webDev?dataInterst.push('webDev'): '';
        others?dataInterst.push('others'): '';

        try {
            await axios.put(`${process.env.URL}/updateInterest?userId=${userId}`,{
                dataInterst
            },{
                headers: { Authorization: `Bearer ${token}` }
            })
            setIsInterestActive(false)
        } catch (error) {
            toast(error)
        }
        fetchData()
        setIsLoading(false)
    }

    useEffect(()=>{
      fetchData()
    },[])
    
  return (
    <div className="profile-box profile-interests">
        <Modal show={isInterestActive} onHide={()=>{setIsInterestActive(false)}}>
        <Modal.Body>
            <div className="interest-container">
                <div className={`interest-item interest-item-${appDev?"active":"false"}`} onClick={()=>{setAppDev(!appDev)}}>App Development</div>
                <div className={`interest-item interest-item-${prog?"active":"false"}`} onClick={()=>{setProg(!prog)}}>Programming</div>
                <div className={`interest-item interest-item-${ds?"active":"false"}`} onClick={()=>{setDs(!ds)}}>Data Structures</div>
                <div className={`interest-item interest-item-${ml?"active":"false"}`} onClick={()=>{setMl(!ml)}}>Machine Learning</div>
                <div className={`interest-item interest-item-${dataSci?"active":"false"}`} onClick={()=>{setDataSci(!dataSci)}}>Data Science</div>
                <div className={`interest-item interest-item-${webDev?"active":"false"}`} onClick={()=>{setWebDev(!webDev)}}>Web Development</div>
                <div className={`interest-item interest-item-${others?"active":"false"}`} onClick={()=>{setOthers(!others)}}>Others</div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' className='btn btn-sm ' onClick={()=>{setIsInterestActive(false)}}>
            Close
          </Button>
          <Button variant='success' disabled={isLoading} className='btn btn-sm ' onClick={postData}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <div className="head-strip">
            <span>Password and Security</span>
            <button className='btn' onClick={()=>{setIsInterestActive(true)}}>Change</button>
        </div>
        <div className="interest-box">
        {
          interests.length>0 ? 
            interests.map((interest, index)=>(
              <div key={index} className="interest-item">{codeMap[interest]}</div>
            ))
            :"Add Interesting Fields , nothing to show as of now"}
        </div>
      </div>
  )
}

export default Interest
