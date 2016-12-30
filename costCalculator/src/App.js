import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Checkbox from 'material-ui/Checkbox';
const AppTitle = 'Average Cost Calculator';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};



export default class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  
  requestCalculate = () => {
    let currentShare = parseFloat(this.state.valueCurrentPrice);
    let futureShare  = parseFloat(this.state.valueFuturePrice);
    let newShare = parseFloat(this.state.valueCurrentShare) + parseFloat(this.state.valueFutureShare);
    let currentValue = parseFloat(this.state.valueCurrentShare) * parseFloat(this.state.valueCurrentPrice);
    let futureValue = parseFloat(this.state.valueFutureShare) * parseFloat(this.state.valueFuturePrice);
    let newValue = (currentValue + futureValue) / newShare;
    this.setState({
      newShares:newShare,
      newValue:newValue.toFixed(2),
      lossValue: (currentShare - futureShare ) * currentShare
    });
  };

  handleChangeCurrentShare = (event) => {
    this.setState({
      valueCurrentShare: event.target.value,
    });
  };
  handleChangeCurrentPrice = (event) => {
    this.setState({
      valueCurrentPrice: event.target.value,
    });
  };
  handleChangeFutureShare = (event) => {
    this.setState({
      valueFutureShare: event.target.value,
    });
  };
  handleChangeFuturePrice = (event) => {
    this.setState({
      valueFuturePrice: event.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <AppBar
          className="bg_app"
          title={<span style={styles.title}>{AppTitle}</span>}
          onTitleTouchTap={handleTouchTap}
          iconElementLeft={<IconButton onClick={this.handleToggle} ><NavigationMenu /></IconButton>}
          iconElementRight={<Avatar src="/profilepic.jpg" />} />
      
        <Drawer
          docked={true}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Average Cost</MenuItem>
          <MenuItem onClick={this.handleClose}>Next Feature</MenuItem>
        </Drawer>



      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React Project</h2>

      </div>
        <div className="App-Body">
           <div>
               <p>if i have {<TextField onChange={this.handleChangeCurrentShare} value={this.state.valueCurrentShare} hintText="1250" floatingLabelText="Current Shares Qty"/>} shares brougt at $ {<TextField onChange={this.handleChangeCurrentPrice} value={this.state.valueCurrentPrice}  hintText="6.7" floatingLabelText="Current Shares Price"/>}
               Later on I buy {<TextField onChange={this.handleChangeFutureShare} value={this.state.valueFutureShare} hintText="1250" floatingLabelText="Buy Qty"/>} shares bought at $ {<TextField onChange={this.handleChangeFuturePrice} value={this.state.valueFuturePrice} hintText="6.7" floatingLabelText=" Shares Price"/>}
              </p>
              <RaisedButton onClick={this.requestCalculate} label="Calculate" />
          </div>    
          <div>

            <p>
              I have {this.state.newShares} shares at an average price of ${this.state.newValue}. Loss from current share ${this.state.lossValue}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

//export default App;
