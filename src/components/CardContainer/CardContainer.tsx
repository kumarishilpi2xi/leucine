import React from 'react';
import './CardContainer.css';
import DateCard from '../Cards/DateCard/DateCard';
import MediaUpload from '../Cards/MediaUpload/MediaUpload';
import QueryCard from '../Cards/QueryCard/QueryCard';
import RadioSelect from '../Cards/SelectOptionCard/RadioSelect';
import SignatureUpload from '../Cards/SignatureUpload/SignatureUpload';
import URLCard from '../Cards/URLCard/URLCard';
import UploadCard from '../Cards/UploadCard/UploadCard';

const CardContainer:React.FC = () => {
    return(<div className='card-container'>
                <div className='box'>
                
                <UploadCard/>
                
                </div>
                <div className='box'>
                <DateCard/>
                </div>
                <div className='box'>
                <URLCard/>
                </div>
                <div className='box'>
                <SignatureUpload/>
                </div>
                <div className='box'>
                <MediaUpload/>
                </div>
                <div className='box'>
                <QueryCard/>
                </div>
                <div className='box'>
                <RadioSelect isRadio isCheckbox={false}/>
                </div>
                <div className='box'>
                <RadioSelect isRadio={false} isCheckbox />
                </div>
                <div className='box'>
                <RadioSelect isRadio={false} isCheckbox={false} />          {/**If checkbox is false then isRadio signifies simple radio button or checked
                                                                            circle */}
                </div>

    </div>);
}

export default CardContainer;