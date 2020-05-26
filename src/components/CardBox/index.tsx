import React from 'react';
import './index.css';

const ArrowStyle = {
    fontSize:'32px',
    color:'#999999',
    padding:'0 0 7px 0'
};

const DotStyle = {
    fontSize:'40px',
    color:'#999999'
};

const CardBox: React.FC = ({ children }) => {
    return(
        <div className='card-box'>
            <div className='arrow-control'>
                <div className='arrows'>
                    <span className="material-icons" style={ArrowStyle}>
                        arrow_upward
                    </span>
                    <span className="material-icons" style={ArrowStyle}>
                        arrow_downward
                    </span>
                </div>
            </div>
            <div className=''>
                { children }
            </div>
            <div className='three-dots'>
                <span className="material-icons" style={DotStyle}>
                    more_vert
                </span>
            </div>
        </div>
    );
}
export default CardBox;