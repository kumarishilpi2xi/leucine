import React from 'react';
import './index.css';
import Optional from '../../Optional';

const dateiconStyle ={
  opacity: '0.36',
  borderRadius: '3px',
  color: '#12aab3'
};
const timeiconStyle ={
  borderRadius: '3px',
  color: '#12aab3'

};
const DateCard: React.FC= () => {
    return(
        <div className='date-card'>
            <div className='select-date'>
                Select a Date below:
            </div>
            <div className='date-input'>
                <div className='label'>
                    Label
                </div>
                <input className='date-input-text'/>
            </div>
            <div className='date-time-option'>
                <div className='pick-date'>
                    <span className="material-icons" style={dateiconStyle}>
                    check_box
                    </span>
                    <span className='pick-date-text'>
                        Pick Date
                    </span>
                </div>
                <div className='pick-time'>
                    <span className="material-icons" style={timeiconStyle}>
                    check_box
                    </span>
                    <span className='pick-time-text'>
                        Pick Time
                    </span>
                </div>
            </div>
           <Optional isOptional={false}/>
        </div>
    );
}

export default DateCard;