import React from 'react';
import './ComplyCard.css';

const ComplyCard: React.FC = () => {
    return(
        <div className='comply-card'>
            <div className='comply-label'>
                Label
                <div><input className='label-input' type='text' defaultValue='Is the tag affixed?'/></div>
            </div>
            
            <div className='comply-card-content'>
                <div className='comply-section'>
                    <div className='positive-label'>Positive Button Label</div>
                    <input className='positive-label-input' type='text' defaultValue='Complies'/>
                    <button className='comply-button'> Complies</button>
                </div>
                <div className='no-comply-section'>
                    <div className='negative-label'>Negative Button Label</div>
                    <input className='negative-label-input' type='text' defaultValue="Doesn't Comply"/>
                    <button className='no-comply-button'>Doesn't Comply</button>

                </div>
            </div>
        </div>
    );
};

export default ComplyCard;