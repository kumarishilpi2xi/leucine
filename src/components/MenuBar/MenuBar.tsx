import React from 'react';
import './MenuBar.css';


const MenuBar : React.FC = () => {
    return(
        <div className='menu-bar'>
            <div className='menu-item'>
                <span className='menu-text'>
                    Stages
                </span>
            </div>
            <div className='buttons'>
                <button className='discard-changes'>Discard Changes</button>
                <button className='save-changes'>Save Changes</button>
                <button className='publish-checklist'>Publish Checklist</button>
             

            </div>
        </div>

    );
}
export default MenuBar;