import * as React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Stages from './components/Stages/Stages';
import MenuBar from './components/MenuBar/MenuBar';
import UploadCard from './components/Cards/UploadCard/UploadCard';
import DateCard from './components/Cards/DateCard/DateCard';
import URLCard from './components/Cards/URLCard/URLCard';
import SignatureUpload from './components/Cards/SignatureUpload/SignatureUpload';
import MediaUpload from './components/Cards/MediaUpload/MediaUpload';
import QueryCard from './components/Cards/QueryCard/QueryCard';
import RadioSelect from './components/Cards/SelectOptionCard/RadioSelect';


import './App.css';


export default class App extends React.Component {
    render() {
        return (<div>
            <div className='header'>
                <Header/>
            </div>
            <div className='stages'>
                <Stages/></div>
            <div className='sidebar'>
                <Sidebar/>
            </div>
            <div className='menubar'>
                <MenuBar/>
            </div>
            <div className='upload'>
            
            <UploadCard/>
            
            </div>
            <div className='box'>
            <DateCard/>
            </div>
            <div className='box1'>
            <URLCard/>
            </div>
            <div className='box2'>
            <SignatureUpload/>
            </div>
            <div className='box3'>
            <MediaUpload/>
            </div>
            <div className='box4'>
            <QueryCard/>
            </div>
            <div className='box5'>
            <RadioSelect isRadio isCheckbox={false}/>
            </div>
            <div className='box6'>
            <RadioSelect isRadio={false} isCheckbox />
            </div>
            <div className='box7'>
            <RadioSelect isRadio={false} isCheckbox={false} />          {/**If checkbox is false then isRadio signifies simple radio button or checked
                                                                        circle */}
            </div>
            
            
        </div>);
    }
}

