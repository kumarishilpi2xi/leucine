import React from 'react';
import './index.css';
import UploadIcon from '../../assets/upload-icon.png';
import DotIcon from '../../assets/dots.png';
import DelIcon from '../../assets/del-icon.png';
import Expand from '../../assets/expand.png';

const MainComponent:React.FC = () => {
    return(
        <div className='main-component'>

            <div className='del-media'>
                <img src={DelIcon} alt='del-icon' />
                <span className='del-media-text'>
                    Delete All Media
                </span>
            </div>

            <div className='part-image'>
                <div className='image-details'>
                    <div className='name-of-part'>Damper Valves</div>
                    <img src={Expand} alt='expand-arrows' className='expand-arrows'/>
                </div>
            </div>

            <div className='parts-choice'>
                
                <div className='parts active'>
                    <div className='thumbnail'>
                    </div>
                    <div className='name-part'>
                        Damper Valves
                    </div>
                    <div className='dots'>
                        <img src={DotIcon} alt='dot-icon'/>
                    </div>
                </div>
                
                <div className='parts'>
                    <div className='thumbnail'>
                    </div>
                    <div className='name-part'>
                        Inlet & 
                        Exhaust...
                    </div>
                    <div className='dots'>
                        <img src={DotIcon} alt='dot-icon'/>
                    </div>
                </div>
               
                <div className='parts'>
                    <div className='thumbnail'>
                    </div>
                    <div className='name-part'>Heating Bed
                    </div>
                    <div className='dots'>
                        <img src={DotIcon} alt='dot-icon'/>
                    </div>
                </div>
               

            </div>

            <div className='upload-icon'>
                <img src={UploadIcon} alt='upload-icon'/>
            </div>

        </div>
    );
}

export default MainComponent;