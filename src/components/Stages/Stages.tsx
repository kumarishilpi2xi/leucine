import React from 'react';
import './Stages.css';

const Stages: React.FC = () => {
    return(
        <div className='container'>
            <div className='cards'>
                <div className='step-counter'>
                    1
                </div>
                <div className='description'>
                    <div className='description-text'>
                        Ensure that "TO BE CLEANED” 
                        label is affixed on the machine
                    </div>
                </div>
            </div>
            <div className='cards'>
                <div className='step-counter'>
                    2
                </div>
                <div className='description'>
                    <div className='description-text'>
                        Record the cleaning start time 
                        details in sequential logbook
                    </div>
                </div>
            </div>
            <div className='cards'>
                <div className='step-counter'>
                    3
                </div>
                <div className='description'>
                    <div className='description-text'>
                        Initial Dry Cleaning/Dismantling
                    </div>
                </div>
            </div>
            <div className='cards'>
                <div className='step-counter'>
                    4
                </div>
                <div className='description'>
                    <div className='description-text'>
                    Pre-Wash/Initial Wash
                    </div>
                </div>
            </div>
            <div className='cards'>
                <div className='step-counter active-step-counter'>
                    5
                </div>
                <div className='description active-step'>
                    <div className='description-text active-description'>
                        Dismantling of Parts
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Stages;