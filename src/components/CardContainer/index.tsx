import React from 'react';
import './index.css';
import CardBox from '../CardBox';
import DateCard from '../Cards/DateCard';
import MediaUpload from '../Cards/MediaUpload';
import QueryCard from '../Cards/QueryCard';
import RadioSelect from '../Cards/SelectOptionCard';
import SignatureUpload from '../Cards/SignatureUpload';
import URLCard from '../Cards/URLCard';
import UploadCard from '../Cards/UploadCard';

const controlStyle = {
    fontSize:'32px',
    color:'#999999'
};

const CardContainer:React.FC = () => {

    return(
    <div className='card-container'>
                <div className='question-box'>
                    <div className='text-box'>
                        <div className='quest-text'>
                        Open the clamps and dismantle following parts from the product container bowls
                        </div>
                    </div>
                    <div className='question-box-controls'>
                            <span className="material-icons" style={controlStyle}>
                            add_circle
                            </span>
                            <span className="material-icons" style={controlStyle}>
                            settings
                            </span>
                        
                    </div>
                </div>
                <CardBox><UploadCard/></CardBox>
                <CardBox><DateCard/></CardBox>
                <CardBox><MediaUpload/></CardBox>
                <CardBox><QueryCard/></CardBox>
                <CardBox><RadioSelect isRadio isCheckbox={false}/></CardBox>
                <CardBox><SignatureUpload/></CardBox>
                <CardBox><URLCard/></CardBox>
                <CardBox><RadioSelect isRadio={false} isCheckbox /></CardBox>
                <CardBox><RadioSelect isRadio={false} isCheckbox={false} /> </CardBox>


    </div>
    );
}

export default CardContainer;