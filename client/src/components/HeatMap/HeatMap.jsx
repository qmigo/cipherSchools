import React, { useEffect, useStattoastconse } from 'react'
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {patternDate} from '@/components/PatternDate/patternDate';


const HeatMap = () => {
  return (
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
  )
}

export default HeatMap
