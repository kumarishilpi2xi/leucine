import React from 'react';
import './CleaningInstrument.css';
import Counter from '../../Counter/Counter';

const instrument_list: Array<string> = [
    'Nylon Scrubber', 
    'Nylon Brush', 
    'Scrapper', 
    'Vaccum Cleaner', 
    'High Pressure Jet', 
    'Telescopic Pole',
    'Link Free Cloth'
];

const CleaningInstrument: React.FC = () => {
    return(
        <div className='cleaning-instruments'>
            <div className='item-list'>
            
                {instrument_list.map((item:string, index:number)=>
                <li className='item-instrument'>
                    <div className='i'>
                        <div className='instrument-number'>
                            {index+1}

                        </div>
                        <div className='item-detail'>
                        <div className='image-section'>
                            
                        </div>
                        <div className='instrument-name'>
                        {item}
                        </div>
                        </div>
                    </div>
                    <div className='instrument-counter'>
                        <Counter/>
                    </div>
                </li>)}
          
            </div>
            <div className='add-new-instrument'>
            + Add New Item
            </div>

        </div>
    );
}

export default CleaningInstrument;