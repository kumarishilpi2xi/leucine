import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Stages from './components/Stages/Stages';
import MenuBar from './components/MenuBar/MenuBar';
// import CardContainer from './components/CardContainer/CardContainer';
// import SettingsDropdown from './components/SettingsDropdown/SettingsDropdown';
// import URLExecution from './components/Cards/URLExecution/URLExecution';
// import CleaningCard from './components/Cards/CleaningCard/CleaningCard';
// import MainComponent from './components/MainComponent/MainComponent';
// import DateTime from './components/Cards/DateTimeCard/DateTime';
import ArrowControllers from './components/ArrowControllers/ArrowControllers';
import RadioSelect from './components/Cards/SelectOptionCard/RadioSelect';
import QueryCard from './components/Cards/QueryCard/QueryCard';

type MyType = {
    id: number,
    component: React.ReactNode
}
interface MyState {
    
    myList: MyType[]
}
interface MyProps{
   
}
export default class App extends React.Component<MyProps, MyState>{
    constructor(props: MyProps) {
        super(props);
        this.state = {
          myList: [
            { id: 1, component: <QueryCard/> },
            { id: 2, component: <RadioSelect isRadio isCheckbox={false}/>},
            { id: 3, component: <RadioSelect isRadio={false} isCheckbox />},
            { id: 4, component: <RadioSelect isRadio={false} isCheckbox={false} /> }
          ]
        };
      }
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
                    <ArrowControllers items={this.state.myList}/>
                {/* <SettingsDropdown/>  */}
                
                </div>
                {/* 
                
                
                <div className='url-exe'>
                <URLExecution/>
                </div>
                <div className='cleaning'>
                <CleaningCard/>
                </div>
                <div className='main'>
                    <MainComponent/>
                    <DateTime/>
                    
                </div> */}

            </div>
               
                
                   
             
               
               

            </div>
            
            
        </div>);
    }
}

