import React, { useState } from 'react'
import '@/pages/Profile/profile.css'
import Dropdown from 'react-bootstrap/Dropdown';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {patternDate} from '../../components/PatternDate/patternDate';


const Profile = () => {

    const [aboutMe, setAboutMe] = useState(null)
    const [isAboutMeActive, setIsAboutMeActive] = useState(false)
    const handleChangeAboutMe = ()=>{
        setIsAboutMeActive(!isAboutMeActive)
    }

    const [isOnTheWebActive, setIsOnTheWebActive] = useState(false)    
    const [linkedIn, setLinkedIn] = useState(null)
    const [github, setGithub] = useState(null)
    const [facebook, setFacebook] = useState(null)
    const [twitter, setTwitter] = useState(null)
    const [instagram, setInstagram] = useState(null)
    const [website, setWebsite] = useState(null)

    const handleChangeOnTheWeb = ()=>{
        setIsOnTheWebActive(!isOnTheWebActive)
    }

    const [isProffInfopActive, setIsProffInfoActive] = useState(false)
    const [highestEd, setHighestEd] = useState(null)
    const [job, setJob] = useState(null)

    const handleChangeProffInfo = ()=>{
        setIsProffInfoActive(!isProffInfopActive)
    }

    const [isSecurityActive, setIsSecurityActive] = useState(false)
    const [password, setPassword] = useState(null)
    
    const handleChangeSecurity = ()=>{
        setIsSecurityActive(!isSecurityActive)
    }

  return (
    <div className='profile'>

    <div className="profile-bg">
      <div className="profile-header">
        <div className="avatar">
            <img src="https://lh3.googleusercontent.com/a/AGNmyxaL0ZtIr8uIhE-jjQ965aIQP7-JZkgKaOphtrnkgg=s96-c" alt="dp" />
        </div>
        <div className="header-info">
            <div className="header-info-left">
            <span>Hello,</span>
            <span>Ankur Mishra</span>
            <span>ank031100@gmail.com</span>
            </div>
            <span className='header-followers'>0 Followers</span>
        </div>
      </div>
    </div>
      <div className="profile-box profile-about-me">
        <div className="head-strip">
            <span>About Me</span>
            <button className='btn' onClick={handleChangeAboutMe} >{isAboutMeActive?"Save":"Edit"}</button>
        </div>
        <div className="about-text">
            <textarea  rows="4" disabled={!isAboutMeActive} placeholder='Something about you ...' onChange={(e)=>{setAboutMe(e.target.value)}}></textarea>
            <span className="edit-icon" style={{display:isAboutMeActive===false?"none":"block"}}>
                <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt="pencil" />
            </span>
        </div>
      </div>
      <div className="profile-box profile-cipher-map">
      <div className="head-strip">
            <span>Cipher Map</span>
        </div>
        <CalendarHeatmap
            startDate={new Date('2022-01-01')}
            endDate={new Date('2023-05-01')}
            showMonthLabels={true}
            showWeekdayLabels={true}
            showOutOfRangeDays={true}
            monthLabels={["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Nov", "Dec"]}
            weekdayLabels={['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat','Sun']}
            values={patternDate}
            classForValue={(value) => {
                if (!value) {
                return 'color-empty';
                }
                return `color-scale-${value.count}`;
            }}
        />
        <div className="labels">
            <div>Less</div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div>More</div>
        </div>
      </div>
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
                    <input type="text" placeholder='LinkedIn' onChange={(e)=>setLinkedIn(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:isOnTheWebActive===false?"none":"block"}}>
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
                    <input type="text" placeholder='Github' onChange={(e)=>setGithub(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:isOnTheWebActive===false?"none":"block"}}>
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
                    <input type="text" placeholder='Facebook' onChange={(e)=>setFacebook(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:isOnTheWebActive===false?"none":"block"}}>
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
                    <input type="text" placeholder='Twitter' onChange={(e)=>setTwitter(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:isOnTheWebActive===false?"none":"block"}}>
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
                    <input type="text" placeholder='Instagram' onChange={(e)=>setInstagram(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:isOnTheWebActive===false?"none":"block"}}>
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
                    <input type="text" placeholder='Website' onChange={(e)=>setWebsite(e.target.value)} disabled={!isOnTheWebActive}/>
                    <span className="edit-icon" style={{display:isOnTheWebActive===false?"none":"block"}}>
                        <img src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg" alt="pencil" />
                    </span>
                </div>
            </div>
        </div>
      </div>
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
      <div className="profile-box profile-password">
      <div className="head-strip">
            <span>Password and Security</span>
            <button className='btn' onClick={handleChangeSecurity}>Change</button>
        </div>
        <div className="links-box">
            <div className="link">
                <div className="link-title">Password</div>
                <div className="input-link">
                    <input type="password" readOnly={true} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="profile-box profile-interests">
        <div className="head-strip">
            <span>Password and Security</span>
            <button className='btn'>Change</button>
        </div>
        <div className="interest-box">
            <span className="interest-item">Machine Learning</span>
            <span className="interest-item">Data Structures and Algorithms</span>
            <span className="interest-item">MERN STACK Development</span>
            <span className="interest-item">Machine Learning</span>
            <span className="interest-item">Machine Learning</span>
        </div>
      </div>
      
    </div>
  )
}

export default Profile
