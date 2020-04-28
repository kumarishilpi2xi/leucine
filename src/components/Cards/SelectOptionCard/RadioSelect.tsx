import React from 'react';
import './RadioSelect.css';
import Optional from '../../Optional/Optional';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';

type SelectProps ={
    isRadio:boolean;
    isCheckbox:boolean;

}

const closebuttonStyle ={
    color:'#999999'
};

const RadioSelect: React.FC<SelectProps> = ({isRadio, isCheckbox}:SelectProps) => {
    return(
        <div className='radio-select-card'>
            <div className='question'>
            {isCheckbox?'Select one or more from the options below:'
            :'Select one of the options below:'}
                
            </div>
            <div className='options-container'>
                <ul>
                    <li>
                    <div className='item'>
                    {isCheckbox?<div className='checkbox' id='checkbox'>
                                    <CheckBoxComponent label="Base Plate" checked={false} cssClass='e-success e-small'/>
                                </div>
                                :isRadio? 
                                <RadioButtonComponent label="Base Plate" cssClass="radio e-small" name="custom"/>
                            :<CheckBoxComponent label="Base Plate" cssClass="e-custom" checked={true} />}
                            
                        <div className='close-button'>
                        <span className='material-icons' style={closebuttonStyle}>close</span>
                        </div>
                    </div>
                    </li>
                    <li>
                        <div className='item'>
                        {isCheckbox?<div className='checkbox' id='checkbox'>
                                        <CheckBoxComponent label="Dutch Mesh Assembly" checked={false} cssClass='e-success e-small'/>
                                    </div>
                                    :isRadio? 
                                    <RadioButtonComponent label="Dutch Mesh Assembly" cssClass="radio e-small" name="custom"/>
                                :<CheckBoxComponent label="Dutch Mesh Assembly" cssClass="e-custom" checked={true}/>}
                                
                            <div className='close-button'>
                            <span className='material-icons' style={closebuttonStyle}>close</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='item'>
                        {isCheckbox?<div className='checkbox' id='checkbox'>
                                    <CheckBoxComponent label="Support Cross" checked={false} cssClass='e-success e-small'/>
                                    </div>
                                :isRadio? 
                                <RadioButtonComponent label="Support Cross" cssClass="radio e-small" name="custom"/>
                            :<CheckBoxComponent label="Support Cross" cssClass="e-custom" checked={true}/>}
                            
                        <div className='close-button'>
                            <span className='material-icons' style={closebuttonStyle}>close</span>
                        </div>
                    </div>
                    </li>
                     <li>
                     <div className='item'>
                    {isCheckbox?<div className='checkbox' id='checkbox'>
                                    <CheckBoxComponent label="View glass(es)" checked={false} cssClass='e-success e-small'/>
                                </div>
                                :isRadio? 
                                <RadioButtonComponent label="View glass(es)" cssClass="radio e-small" name="custom"/>
                            :<CheckBoxComponent label="View glass(es)" cssClass="e-custom" checked={true}/>}
                            
                        <div className='close-button'>
                        <span className='material-icons' style={closebuttonStyle}>close</span>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='item'>
                    {isCheckbox?<div className='checkbox' id='checkbox'>
                                    <CheckBoxComponent label="Fluid" checked={false} cssClass='e-success e-small'/>
                                </div>
                                :isRadio? 
                                <RadioButtonComponent label="Fluid" cssClass="radio e-small" name="custom"/>
                                :<CheckBoxComponent label="Fluid" cssClass="e-custom" checked={true}/>     }                     
                        <div className='close-button'>
                        <span className='material-icons' style={closebuttonStyle}>close</span>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
            <div className='add-new'>
            + Add New Item
            </div>
            <Optional isOptional={false}/>

        </div>
    );
}

export default RadioSelect;