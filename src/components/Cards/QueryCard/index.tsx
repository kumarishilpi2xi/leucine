import React from 'react';
import './index.css';
import Optional from '../../Optional';

const QueryCard: React.FC = () => {
    return(
        <div className='query-card'>
            <div className='enter-question'>
                <div className='query-label'>
                    Question
                </div>
                <input className='enter-query' placeholder='Question about something?'/>
            </div>

            <div className='complies'>
                <div className='button'>
                    <button className='positive'>Positive Button</button>
                </div>

                <div className='complies-label'>
                    Positive Button Label
                </div>
        
                <input className='enter-complies' placeholder='Complies'/>
            </div>

            <div className='no-complies'>
                <div className='button'>
                    <button className='negative'>Negative Button</button>
                </div>
                <div className='no-complies-label'>
                    Negative Button Label
                </div>
                    <input className='enter-no-complies' placeholder="Doesn't Comply"/>
            </div> 

            <Optional isOptional={false}/>
        </div>
    );
}
export default QueryCard;