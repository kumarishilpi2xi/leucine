import React from 'react';
import './index.css';
import Optional from '../../Optional';

const iconStyle = {
  fontSize: '48px',
  opacity: '0.6',
  backgroundColor: 'brown-grey'
};

const UploadCard: React.FC = () => {
    return(
        <div className='upload-card'>
            <div className='upload-box'>
                <div className='upload-icon-uploadcard'>
                    <span className="material-icons" style={iconStyle}>
                        cloud_upload
                    </span>
                </div>
                <div className='upload-description-text'>
                   File upload will be enabled during execution
                </div>
                <div className='upload-warning-text'>
                   File size cannot exceed 2 MB
                </div>
            </div>
            <Optional isOptional/>
        </div>
    );
}

export default UploadCard;