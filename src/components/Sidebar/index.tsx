import React from 'react';
import './index.css';
import Hide from '../../assets/hide.png';

const Sidebar : React.FC = () => {
    return (
    <div className='sidebar'>
        <ul>
            <li>
                <div className='icons'>
                    <span className="material-icons" style={{color:'#808080'}}>
                        dashboard
                    </span>
                </div>
                <div>
                    <h1 className='menu'>Dashboard</h1>
                </div>
            </li>
            <li>
                <div className='icons'>
                    <span className="material-icons" style={{color:'#808080'}}>
                        featured_play_list
                    </span>
                </div>
                <div>
                    <h1 className='menu'>Tasks</h1>
                </div>
            </li>
            <li className='active'>
                <div className='icons'>
                    <span className="material-icons" style={{color:'white'}}>
                        library_add_check
                    </span>
                </div>
                <div>
                    <h1 className='menu active'>Checklists</h1>
                </div>
            </li>
            <li>
                <div className='icons'>
                    <span className="material-icons" style={{color:'#808080'}}>
                        assessment
                    </span>
                </div>
                <div>
                    <h1 className='menu'>Reports</h1>
                </div>
            </li>
            <li>
                <div className='icons'>
                    <span className="material-icons" style={{color:'#808080'}}>
                        menu_book
                    </span>
                </div>
                <div>
                    <h1 className='menu audit'>Audit Logs</h1>
                </div>
            </li>
        </ul>
        <ul className='hide-button'>
            <li className='hide-button'>
                <div className='hide-buttons'>
                   <img src={Hide} className='hide-img' alt='hide button'/>
                
                </div>
                <div>
                    <h1 className='hide-text'>Hide</h1>
                </div>
            </li>
        </ul>


    </div>
    );
}
export default Sidebar;