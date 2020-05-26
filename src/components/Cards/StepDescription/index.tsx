import React from 'react';
import './index.css';

type MyProps = {
    question:string,
    add_stop:boolean,
    due_on: string,
    timed:string,
    optional:boolean
}

const StepDescription = ({question, add_stop, due_on, timed, optional}: MyProps) =>{
    return(
        <div className='step-description'>
            <div className='step-question'><div className='q'>
                {question}</div>
            </div>
            <div className='step-menu'>
                
                    <div className='step-menu-item'>
                        <span className="material-icons" style={{fontSize:'20px', lineHeight:'40px', paddingLeft:'10px'}}>
                            report
                        </span>
                        {/* <img src={Report}> */}
                        <span className='step-menu-options'>
                        Add Stop
                        </span>
                    </div>

                    <div className='step-menu-item'>
                        <span className="material-icons" style={{fontSize:'20px', paddingLeft:'10px', lineHeight:'40px'}}>
                            date_range
                        </span>
                        <span className='step-menu-options'>
                            Due On
                        </span>
                    </div>

                    <div className='step-menu-item'>
                        <span className="material-icons" style={{fontSize:'20px', lineHeight:'40px', paddingLeft:'10px' }}>
                            timer
                        </span>
                        <span className='step-menu-options'>
                            Timed
                        </span>
                    </div>

                    <div className='step-menu-item last'>
                        <span className="material-icons" style={{fontSize:'20px', lineHeight:'40px', paddingLeft:'10px' }}>
                            radio_button_unchecked
                        </span>
                        <span className='step-menu-options'>
                            Optional
                        </span>
                    </div>
            </div>
        </div>
    );
}
export default StepDescription;