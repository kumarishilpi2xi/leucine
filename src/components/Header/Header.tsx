import React from "react";
import "./Header.css";

const Header: React.FC = () =>{
    return <div className='header'>
        <div className='logo'>
            <div className='shape'>
                
            </div>
            <div className='text'>
                    STREEM
            </div>

        </div>
        <div className='account'>
            <div className='icon-shape'>
                <span className="material-icons" style={{color:'#999999'}}>
                    account_circle
                </span>
            </div>
            <div className='account-text'>
                Account
            </div>
            <div className='shape'>
                <span className="material-icons" style={{color:'#3cd3ad'}}>
                    keyboard_arrow_down
                </span>
            </div>
        </div>
        
    </div>
}
export default Header;