import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import AppHeader from './components/header/app-header';
import AppBody from './components/body/app-body';


export default class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false, qtyVal: 0, priceVal: 0};
  }

  render() {
    return (
      <div className="App">
        <AppHeader />

          <div className="App-Body">
            <AppBody />
          <div>
        </div>
      </div>
    </div>
    );
  }
}

//export default App;
