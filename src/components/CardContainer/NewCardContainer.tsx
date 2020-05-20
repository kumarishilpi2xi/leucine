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
            <div className='step-description-card'>
                <StepDescription question={question} add_stop={add_stop} due_on={due_on} timed={timed} optional={optional}/>
            </div>
            <div className='components-card'>
            {com_arr.map((item:any)=><div style={{listStyle:'none', paddingBottom:'20px'}}>{item}</div>)}
            </div>

        </div>
    );
}

export default NewCardContainer;