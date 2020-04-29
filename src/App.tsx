import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Stages from './components/Stages/Stages';
import MenuBar from './components/MenuBar/MenuBar';
// import CardContainer from './components/CardContainer/CardContainer';
import SettingsDropdown from './components/SettingsDropdown/SettingsDropdown';
import URLExecution from './components/Cards/URLExecution/URLExecution';
import CleaningCard from './components/Cards/CleaningCard/CleaningCard';


export default class App extends React.Component {
    render() {
        return (<div>
            <div className='corner'></div>
            <div className='header'>
                <Header/>
            </div>
            <div className='sidebar'>
                    <Sidebar/>
                </div>
            <div className='tab'>
                
            <div className='main-section'>
                
                           
                    <MenuBar/>
                  <Stages/>
                  
                  {/* <div className='card-content'>
                    <CardContainer/>
                </div> */}
                <div className='settings'>
                    
                <SettingsDropdown/>
                </div>
                
                
                <div className='url-exe'>
                <URLExecution/>
                </div>
                <div className='cleaning'>
                <CleaningCard/>
                </div>
            </div>
               
                
                   
             
               
               

            </div>
            
            
        </div>);
    }
}

