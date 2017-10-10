import React from 'react';
import logo from './logo.svg';
import './AppView.css';

/* Import dispatcher :: https://github.com/facebook/flux/blob/master/src/Dispatcher.js */
//import {Dispatcher} from 'flux';
//export default new Dispatcher();



function AppView(){
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>;
}

export default AppView;
