import React from "react";
import Logo from '../../assets/logo.png';
import "./Header.css";

const Header: React.FC = () =>{
    return <div className='header'>
        <div className='logo'>
           <img src={Logo}/>

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