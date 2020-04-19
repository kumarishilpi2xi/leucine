import * as React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Stages from './components/Stages/Stages';
import MenuBar from './components/MenuBar/MenuBar';
import UploadCard from './components/Cards/UploadCard/UploadCard';
import DateCard from './components/Cards/DateCard/DateCard';
import URLCard from './components/Cards/URLCard/URLCard';

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
            
        </div>);
    }
}

