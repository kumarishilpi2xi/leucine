import React from 'react';
import './App.css';

import Header from './components/Header/index';
import Sidebar from './components/Sidebar/index';
import Stages from './components/Stages/index';
import MenuBar from './components/MenuBar/index';
import CardContainer from './components/CardContainer/index';
import SettingsDropdown from './components/SettingsDropdown/index';
import URLExecution from './components/Cards/URLExecution/index';
import CleaningCard from './components/Cards/CleaningCard/index';
import MainComponent from './components/MainComponent/index';
import DateTime from './components/Cards/DateTimeCard/index';
import ArrowControllers from './components/ArrowControllers/index';
import RadioSelect from './components/Cards/SelectOptionCard/index';
import QueryCard from './components/Cards/QueryCard/index';
import CleaningInstrument from './components/Cards/CleaningInstrument/index';
import ComplyCard from './components/Cards/ComplyCard/index';
import CleaningCheckBox from './components/Cards/CleaningCheckBox/index';
import CleaningQuery from './components/Cards/CleaningQuery/index';
import NewCardContainer from './components/CardContainer/NewCardContainer';
import UploadCard from './components/Cards/UploadCard/index';
import DateCard from './components/Cards/DateCard/index';
import MediaUpload from './components/Cards/MediaUpload/index';
import SignatureUpload from './components/Cards/SignatureUpload/index';
import URLCard from './components/Cards/URLCard/index';

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
            { id: 4, component: <RadioSelect isRadio={false} isCheckbox={false} /> },
            { id: 5, component: <UploadCard/> },
            { id: 6, component: <DateCard/>},
            { id: 7, component: <MediaUpload/>},
            { id:8, component: <SignatureUpload/>},
            { id:9, component:<URLCard/>}
          ]
        };
      }
    render() {
        return (

            <div className="exp-div">
                <div>
                    <div className='corner' />
                    <Header/>
                    <div className='sidebar-section'>
                        <Sidebar/>
                    </div>
                    <div className='tab'>
                        <div className='main-section'>
                            <MenuBar/>
                            <div className="exp1">
                                <div className="exp2">
                                    <Stages/>
                                </div>
                                <div className="exp2">
                                    <div className='disp-inline-block' style={{padding: '1.5em 2em'}}>
                                    <div className='all'>
                                        <div className='settings'>
                                            <NewCardContainer question='Ensure that you have the following cleaning aids:' add_stop={false} timed='12sse' due_on={'12dec'} optional={true} com_arr={[<CleaningInstrument/>]}/>
                                        </div>
                                        
                                        <div className='url-exe'>
                                            <NewCardContainer question='Get the Cleaning Agent' add_stop={false} timed='12sec' due_on={'12dec'} optional={true} com_arr={[<CleaningQuery/>, <CleaningCheckBox/> ]}/>
                                        </div>
                                        
                                        <div className='cleaning'>
                                            <NewCardContainer question='Ensure that ‘TO BE CLEANED” label is affixed on the Equipment' add_stop={false} timed='12sse' due_on={'12dec'} optional={true} com_arr={[<ComplyCard/>]}/>
                                        </div>

                                        <div className='main'>
                                            <ArrowControllers items={this.state.myList}/>
                                          
                                        </div>
                                        <div className='other-components'>
                                            <SettingsDropdown/>
                                        </div>
                                        <div className='main-comp'>
                                            <MainComponent/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

      
        );
    }
}

