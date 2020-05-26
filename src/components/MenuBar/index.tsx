import React from 'react';
import './index.css';


const MenuBar : React.FC = () => {
    return(
        <div className='menu-bar'>
            <div className='menu-item'>
                <span className='menu-text'>
                    Stages
                </span>
            </div>
            <div className='buttons'>
                <h1 className='save-changes'>
                    All changes saved automatically
                </h1>
                <button className='publish-checklist'>Publish Checklist</button>
            </div>
        </div>

    );
}
export default MenuBar;