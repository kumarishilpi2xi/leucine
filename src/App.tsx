import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Stages from './components/Stages/Stages';
import MenuBar from './components/MenuBar/MenuBar';
import CardContainer from './components/CardContainer/CardContainer';
// import SettingsDropdown from './components/SettingsDropdown/SettingsDropdown';
// import URLExecution from './components/Cards/URLExecution/URLExecution';
// import CleaningCard from './components/Cards/CleaningCard/CleaningCard';
// import MainComponent from './components/MainComponent/MainComponent';
// import DateTime from './components/Cards/DateTimeCard/DateTime';
import ArrowControllers from './components/ArrowControllers/ArrowControllers';
import RadioSelect from './components/Cards/SelectOptionCard/RadioSelect';
import QueryCard from './components/Cards/QueryCard/QueryCard';
import CleaningInstrument from './components/Cards/CleaningInstrument/CleaningInstrument';
import ComplyCard from './components/Cards/ComplyCard/ComplyCard';
import CleaningCheckBox from './components/Cards/CleaningCheckBox/CleaningCheckBox';
import CleaningQuery from './components/Cards/CleaningQuery/CleaningQuery';
import NewCardContainer from './components/CardContainer/NewCardContainer';

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
    // constructor(props: MyProps) {
    //     super(props);
    //     this.state = {
    //       myList: [
    //         { id: 1, component: <QueryCard/> },
    //         { id: 2, component: <RadioSelect isRadio isCheckbox={false}/>},
    //         { id: 3, component: <RadioSelect isRadio={false} isCheckbox />},
    //         { id: 4, component: <RadioSelect isRadio={false} isCheckbox={false} /> }
    //       ]
    //     };
    //   }
    render() {
        return (<div>
            <div className='corner'></div>
            <div className='header'>
                <Header/>
            </div>
            <div className='sidebar-section'>
                    <Sidebar/>
                </div>
            <div className='tab'>
                
            <div className='main-section'>
                
                           
                    <MenuBar/>
                  <Stages/>
                
                <div className='settings'>
                  
                <NewCardContainer question='Ensure that you have the following cleaning aids:' add_stop={false} timed='12sse' due_on={'12dec'} optional={true} com_arr={[<CleaningInstrument/>]}/>
               
                </div>
                
                <div className='url-exe'>
                <NewCardContainer question='Get the Cleaning Agent' add_stop={false} timed='12sse' due_on={'12dec'} optional={true} com_arr={[<CleaningQuery/>, <CleaningCheckBox/> ]}/>
                
                </div>
                
                <div className='cleaning'>
                <NewCardContainer question='Ensure that ‘TO BE CLEANED” label is affixed on the Equipment' add_stop={false} timed='12sse' due_on={'12dec'} optional={true} com_arr={[<ComplyCard/>]}/>
                </div> 
                <div className='main'>
                
                </div>

            </div>
               
                
                   
             
               
               

            </div>
            
            
        </div>);
    }
}

