import React from 'react';
import './DateTime.css';

const DateTime:React.FC = () => {
    return(
        <div className='date-time-card'>
            <div className='question'>

            </div>
            <div className='datepicker'></div>
            <div className='timepicker'></div>
        </div>
    );
}

export default DateTime;