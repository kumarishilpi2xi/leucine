import React from 'react';
import './NewCardContainer.css';
import StepDescription from '../Cards/StepDescription/StepDescription';

type CardProps = {
    question:string,
    add_stop:boolean,
    due_on: string,
    timed:string,
    optional:boolean,
    com_arr: Array<React.ReactNode>
}
const NewCardContainer = ({add_stop,due_on,timed,optional, question, com_arr}:CardProps) => {
    return(
        <div className='new-card-container'>
            <div className='question-section'>
                <div className='step-description-card'>
                    <StepDescription question={question} add_stop={add_stop} due_on={due_on} timed={timed} optional={optional}/>
                </div>
                <div className='add-button'>
                    <span className='material-icons' style={{color:'#999999',fontSize:'32px'}}>add_circle</span>
                </div>

            </div>
            <div className='components-section'>
                
                    {com_arr.map((item:any)=>
                    
                    <div className='component-card'>
                        <div style={{listStyle:'none', paddingBottom:'20px'}}>
                            {item}
                        </div>
                        <div className='three-dots'>
                            <span className="material-icons" style={{fontSize:'38px',color:'#999999'}}>
                                more_vert
                            </span>
                        </div>
                </div>)}
            
                

            </div>

        </div>
    );
}

export default NewCardContainer;