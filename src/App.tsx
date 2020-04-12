import * as React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import './App.css';


export default class App extends React.Component {
    render() {
        return (<div>
            <Header/>
            <Sidebar/>
        </div>);
    }
}

