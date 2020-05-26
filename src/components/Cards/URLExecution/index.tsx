import React from 'react';
import './index.css';

const urlIconStyle = {
    fontSize:'16px',
    color:'#999999',
    padding:'5px 0px 0px 10px'
};
const URLExecution:React.FC = () => {
    return(
        <div className='url-execution-card'>
            <div className='optional-tag'>
                <h1 className='option-text'>Optional</h1>
            </div>

            <div className='url-exe-question'>
                Please visit this URL for additional instructions
            </div>
            <div className='url'>https://bit.ly/3ekY7cu
                <span className="material-icons" style={urlIconStyle}>
                    launch
                </span>
            </div>
        </div>
    );
}

export default URLExecution;