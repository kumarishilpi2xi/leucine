import React from 'react';
import './index.css';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

const CleaningCheckBox : React.FC = () => {
    return(
        <div className='cleaning-checkbox'>
            <div className='cleaning-checkbox-question'>
                Choose the items you’ve selected
            </div>
            <div className='checkbox-options-container'>
                <ul>
                    <li>
                    <div className='checkbox-item'>
                        <div className='checkbox' id='checkbox'>
                                    <CheckBoxComponent label="1.0% v/v Hempton Solution" checked={false} cssClass='e-success e-small'/>
                        </div>
                            
                        <div className='close-button'>
                            <span className='material-icons' style={ {color:'#999999', fontSize:'18px'}}>close</span>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='checkbox-item'>
                        <div className='checkbox' id='checkbox'>
                                    <CheckBoxComponent label="Acetone" checked={false} cssClass='e-success e-small'/>
                        </div>
                            
                        <div className='close-button'>
                            <span className='material-icons' style={ {color:'#999999', fontSize:'18px'}}>close</span>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='checkbox-item'>
                        <div className='checkbox' id='checkbox'>
                                    <CheckBoxComponent label="5% KOH Solution" checked={false} cssClass='e-success e-small'/>
                        </div>
                            
                        <div className='close-button'>
                            <span className='material-icons' style={ {color:'#999999', fontSize:'18px'}}>close</span>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
            <div className='add-new'>
                +Add New Item
            </div>

        </div>
    );
};
export default CleaningCheckBox;