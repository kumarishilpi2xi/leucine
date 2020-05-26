import React from 'react';
import Buttons from './Buttons';
import NewSection from '../../assets/new-section.png';
import Duplicate from '../../assets/duplicate.png';
import ArrowDown from '../../assets/arrow-down.png';
import ArrowUpward from '../../assets/arrow-up.png';
import './index.css';

const images = {
        image1: NewSection,
        image2: Duplicate,
        image3: ArrowDown,
        image4: ArrowUpward
    }


const NavigationButtons: React.FC = () => {
    return(
        <div className='nav-buttons'>
            
            <div className='but'>
                <Buttons image={images.image1} alt={'New Section'} title={'New Section'} />
            </div>
            <div className='but'>
                <Buttons image={images.image2} alt={'Duplicate'} title={'Duplicate'} />
            </div>
            <div className='but'>
                <Buttons image={images.image4} alt={'ArrowUp'} title={'Move Up'} />
            </div>
            <div>
                <Buttons image={images.image3} alt={'ArrowDown'} title={'Move Down'} />
            </div>
            
        </div>
    );
}
export default NavigationButtons;