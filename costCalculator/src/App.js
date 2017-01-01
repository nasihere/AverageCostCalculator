import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import AppHeader from './components/header/app-header';
import AppBody from './components/body/app-body';
import BottomNavigationTabs from './components/tabs/app-tabs';

export default class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabsIndex: 0,
    };
  }
  selectTab = (index) => {
    this.setState({selectedTabsIndex: index});
  }
  render() {
    return (
      <div className="App">
        <AppHeader />
          
          <BottomNavigationTabs selectedIndex={this.state.selectedTabsIndex} selectTab={this.selectTab} />
          
          <div className="App-Body">
            <AppBody selectTab={this.selectTab} selectedTabsIndex={this.state.selectedTabsIndex} />
          <div>

          
        </div>

      </div>
    </div>
    );
  }
}

//export default App;
