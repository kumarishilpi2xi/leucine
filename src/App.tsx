import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Stages from './components/Stages/Stages';
import MenuBar from './components/MenuBar/MenuBar';
import CardContainer from './components/CardContainer/CardContainer';
// import NavigationButtons from './components/NavigationButtons/NavigationButtons';
import './App.css';


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
                  
                  <div className='card-content'>
                    <CardContainer/>
                </div>
            </div>
               
                
                   
             
               
               

            </div>
            
            
        </div>);
    }
}

