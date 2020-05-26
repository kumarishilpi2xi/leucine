import React from 'react';
import './index.css';
import Optional from '../../Optional';

const iconStyle = {
  fontSize: '35px',
  opacity: '0.6',
  color: '#666666',
  paddingRight:'23px',
  paddingLeft:'23px'
};
const iconStyleVcam = {
  fontSize: '41px',
  opacity: '0.6',
  color: '#666666',
  paddingRight:'8px',
  paddingLeft:'8px',
  borderLeft:'1px solid #dadada',
  borderRight:'1px solid #dadada',
  lineHeight:'80px'
};


const MediaUpload: React.FC =() => {
    return(
    <div className='media-card'>

      <div className='media-box'>
        <div className='media-icon'>

          <div>
            <span className="material-icons" style={iconStyle}>
              camera_alt
            </span>
          </div>

          <div>
            <span className='material-icons' style={iconStyleVcam}>
              videocam
            </span>
          </div>

          <div>
            <span className='material-icons' style={iconStyle}>
              keyboard_voice
            </span>
          </div>

        </div>

        <div className='media-description-text'>
          Media capture will be enabled during execution
        </div>
          
      </div>
      <Optional isOptional={false}/>
    </div>);
}

export default MediaUpload;