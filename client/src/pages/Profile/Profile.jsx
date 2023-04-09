import React from 'react'
import '@/pages/Profile/profile.css'
import Dropdown from 'react-bootstrap/Dropdown';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

function getDatesInRange(d1='2023-01-01', d2='2023-03-01') {
    const startDate = new Date(d1)
    const endDate = new Date(d2)
    const date = new Date(startDate.getTime());
  
    const dates = [];
  
    while (date <= endDate) {
        
      dates.push({
        date: new Date(date).toISOString().split('T')[0],
        value:0
        });
      date.setDate(date.getDate() + 1);
    }
    console.log(dates)
    return dates;
}

const patternDate = [
    {date:"2022-01-03", count:1},
    {date:"2022-01-04", count:2},
    {date:"2022-01-05", count:3},
    {date:"2022-01-06", count:4},
    {date:"2022-01-07", count:3},


    {date:"2022-01-10", count:2},
    {date:"2022-01-17", count:1},
    {date:"2022-01-24", count:2},

    {date:"2022-01-24", count:3},
    {date:"2022-01-25", count:4},
    {date:"2022-01-26", count:3},
    {date:"2022-01-27", count:2},
    {date:"2022-01-28", count:1},

    {date:"2022-01-12", count:2},
    {date:"2022-01-19", count:3},


    {date:"2022-02-28", count:1},
    {date:"2022-03-1", count:2},
    {date:"2022-03-2", count:3},
    {date:"2022-03-3", count:4},
    {date:"2022-03-4", count:3},

    {date:"2022-03-7", count:3},
    {date:"2022-03-14", count:1},
    {date:"2022-03-15", count:2},
    {date:"2022-03-16", count:3},
    
    {date:"2022-03-21", count:4},
    {date:"2022-03-28", count:3},
    {date:"2022-03-29", count:2},
    {date:"2022-03-30", count:1},
    {date:"2022-03-31", count:2},
    {date:"2022-04-1", count:3},

]
const Profile = () => {
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
            <button className='btn'>Edit</button>
        </div>
        <div className="about-text">
            <textarea  rows="4" disabled placeholder='Something about you ...'></textarea>
        </div>
      </div>
      <div className="profile-box profile-cipher-map">
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
      </div>
      <div className="profile-box profile-web-links">
      <div className="head-strip">
            <span>On the Web</span>
            <button className='btn'>Edit</button>
        </div>
        <div className="links-box">
            <div className="link">
                <div className="link-title">LinkedIn</div>
                <div className="input-link">
                    <div className="input-icon">
                        <img src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg" alt="linkedIn" />
                    </div>
                    <input type="text" placeholder='LinkedIn'/>
                </div>
            </div>
            <div className="link">
                <div className="link-title">Github</div>
                <div className="input-link">
                    <div className="input-icon">
                    <img src="https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg" alt="github" />
                    </div>
                    <input type="text" placeholder='Github'/>
                </div>
            </div>
            <div className="link">
                <div className="link-title">Facebook</div>
                <div className="input-link">
                    <div className="input-icon">
                    <img src="https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg" alt="facebook" />
                    </div>
                    <input type="text" placeholder='Facebook'/>
                </div>
            </div>
            <div className="link">
                <div className="link-title">Twitter</div>
                <div className="input-link">
                    <div className="input-icon">
                    <img src="https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg" alt="Twitter" />
                    </div>
                    <input type="text" placeholder='Twitter'/>
                </div>
            </div>
            <div className="link">
                <div className="link-title">Instagram</div>
                <div className="input-link">
                    <div className="input-icon">
                    <img src="https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg" alt="Instagram" />
                    </div>
                    <input type="text" placeholder='Instagram'/>
                </div>
            </div>
            <div className="link">
                <div className="link-title">Website</div>
                <div className="input-link">
                    <div className="input-icon">
                    <img src="https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg" alt="Website" />
                    </div>
                    <input type="text" placeholder='Website'/>
                </div>
            </div>
        </div>
      </div>
      <div className="profile-box profile-personal-info">
        <div className="head-strip">
            <span>On the Web</span>
            <button className='btn'>Edit</button>
        </div>
        <div className="links-box">
            <div className="link">
                <div className="link-title">Highest Education</div>
                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    Choose an education
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item  onClick={()=>{alert('hi')}} >Action</Dropdown.Item>
                    <Dropdown.Item  onClick={()=>{alert('hi')}} >Another action</Dropdown.Item>
                    <Dropdown.Item  onClick={()=>{alert('hi')}} >Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="link">
                <div className="link-title">What do you do currently ?</div>
                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" disabled={true}>
                    Choose an occupation
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item  onClick={()=>{alert('hi')}} >Action</Dropdown.Item>
                    <Dropdown.Item  onClick={()=>{alert('hi')}} >Another action</Dropdown.Item>
                    <Dropdown.Item  onClick={()=>{alert('hi')}} >Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
      </div>
      <div className="profile-box profile-password">
      <div className="head-strip">
            <span>Password and Security</span>
            <button className='btn'>Change</button>
        </div>
        <div className="links-box">
            <div className="link">
                <div className="link-title">Password</div>
                <div className="input-link">
                    <input type="password" />
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
