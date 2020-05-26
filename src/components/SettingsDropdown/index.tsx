import React from 'react';
import './index.css';

const SettingsDropdown: React.FC = () => {
    return(
        <div className='settings-dropdown'>
            <div className='arrow-dropdown'>
            
            </div>
            <div className='settings-container'>
               <ul>
                   <li>
                        Add Stop
                    </li>
                    <li>
                        Assign
                    </li>
                    <li>
                        Expected Duration
                    </li>
                    <li>
                        Permissions
                    </li>
                    <li>
                        <div className='delete-option'>
                            Delete
                        </div>
                    </li>
               </ul>
            </div>
        </div>
    );
}

export default SettingsDropdown