import React from 'react';
import './RadioSelect.css';
import Optional from '../../Optional/Optional';

type SelectProps ={
    isRadio:boolean;
    isCheckbox:boolean;

}

const iconStyle = {
      color: '#bababa',
      fontSize:'18px',
     
      backgroundColor:'#666666',
      borderRadius:'80%'
};

const closebuttonStyle ={
    color:'#999999'
};

const myStyle ={
    color:'white',
    border:'1px solid #999999',
    borderRadius:'50%',
    fontSize:'12px',
   
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
                        <div className='list-style'>
                            {isCheckbox?<div className='checkbox'></div>
                            :isRadio? 
                            <span className='material-icons' style={myStyle}>fiber_manual_record</span>
                            :
                            <span className='material-icons' style={iconStyle}>check_circle</span>
                            
                            }
                            
                        </div>
                        <div className='option-description'>
                        Base Plate
                        </div>
                        <div className='close-button'>
                        <span className='material-icons' style={closebuttonStyle}>close</span>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='item'>
                        <div className='list-style'>
                            {isCheckbox?<div className='checkbox'></div>
                            :isRadio? 
                            <span className='material-icons' style={myStyle}>fiber_manual_record</span>
                            :
                            <span className='material-icons' style={iconStyle}>check_circle</span>
                            
                            }
                        </div>
                        <div className='option-description'>
                        Dutch mesh Assembly
                        </div>
                        <div className='close-button'>
                        <span className='material-icons' style={closebuttonStyle}>close</span>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='item'>
                        <div className='list-style'>
                            {isCheckbox?<div className='checkbox'></div>
                            :isRadio? 
                            <span className='material-icons' style={myStyle}>fiber_manual_record</span>
                            :
                            <span className='material-icons' style={iconStyle}>check_circle</span>
                            
                            }
                        </div>
                        <div className='option-description'>
                        Support cross
                        </div>
                        <div className='close-button'>
                        <span className='material-icons' style={closebuttonStyle}>close</span>
                        </div>
                    </div>
                    </li>
                     <li>
                    <div className='item'>
                        <div className='list-style'>
                            {isCheckbox?<div className='checkbox'></div>
                            :isRadio? 
                            <span className='material-icons' style={myStyle}>fiber_manual_record</span>
                            :
                            <span className='material-icons' style={iconStyle}>check_circle</span>
                            
                            }
                        </div>
                        <div className='option-description'>
                        View glass(es)
                        </div>
                        <div className='close-button'>
                        <span className='material-icons' style={closebuttonStyle}>close</span>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className='item'>
                        <div className='list-style'>
                            {isCheckbox?<div className='checkbox'></div>
                            :isRadio? 
                            <span className='material-icons' style={myStyle}>fiber_manual_record</span>
                            :
                            <span className='material-icons' style={iconStyle}>check_circle</span>
                            
                            }
                        </div>
                        <div className='option-description'>
                        Fluid
                        </div>
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