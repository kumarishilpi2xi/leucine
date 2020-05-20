import React from 'react';
import './CleaningQuery.css';

const CleaningQuery:React.FC = () => {
    return(
        
        <div className='cleaning-query'>
            
            <textarea className='cleaning-query-input' defaultValue='Use 5% KOH when Eudragit is used.Use Acetone for scrubbing where Omeprazole is used. In all other cases use 1.0% v/ v Hempton solution' 
       />

        </div>
    );
}

export default CleaningQuery;