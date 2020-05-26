import React from 'react';
import './index.css';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

const DateTime:React.FC = () => {
    return(
        <div className='date-time-card'>
            <div className='question-date-time'>
                Select a Date below:
            </div>
            <div className='datepicker'>
                <CalendarComponent />
            </div>
            <div className='timepicker'>
                
            </div>
        </div>
    );
}

export default DateTime;