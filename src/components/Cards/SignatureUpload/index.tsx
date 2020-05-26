import React from 'react';
import './index.css';
import Optional from '../../Optional';

const iconStyle = {
  fontSize: '35px',
  opacity: '0.6',
  color: '#666666',
  borderBottom:'3px solid #666666'
};


const SignatureUpload: React.FC =() => {
    return(
        <div className='sign-card'>
            <div className='sign-box'>
                <div className='sign-icon'>
                    <span className="material-icons" style={iconStyle}>
                        close
                    </span>
                    <span className='material-icons'>
                    
                    </span>
                </div>
                <div className='sign-description-text'>
                   Signature upload will be enabled during execution
                </div>
                
            </div>

            <Optional isOptional={false}/>

        </div>);
}

export default SignatureUpload;