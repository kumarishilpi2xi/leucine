import React from 'react';
import './index.css';
import Optional from '../../Optional';

const URLCard: React.FC = () => {
    return(
        <div className='url-card'>
            <div className='enter-url'>
                Enter a URL below:
            </div>
            <div className='input-url'>
                <input className='input-url-text' type='text'/>
            </div>
            <Optional isOptional/>
        </div>
    );
}

export default URLCard;