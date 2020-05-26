import React from 'react';
import './index.css';

const CleaningCard:React.FC = () => {
    return(
        <div className='cleaning-card'>
            <div className='cleaning-question'>
                Does this cleaning method comply?
            </div>
            <div className='cleaning-choice'>
                <div className='no-comply-button'>
                    Doesn't Comply
                </div>
                <div className='comply-button'>
                    Comply
                </div>
            </div>
        </div>
    );
}
export default CleaningCard;