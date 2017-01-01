import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AccountInfo  extends React.Component {
  constructor(props) {
    super(props);
    
  }
  showCalculator = () => {
    this.props.changeEquty();
    this.props.selectTab(1);
  };
  
  render() {

    return (
        <div className="account-hold-row">
            <span className="account-hold-title">
                SHARES POSITIONS
                <Divider />    
            </span>
              
              <div className="account-hold-100-Width">
                  <span className="account-hold-label">NUMBER OF SHARES HOLD</span>
                  <TextField type="number" onChange={this.props.changePrice.bind(this)} value={this.props.PositionInput.shares} hintText="1000.00" />
              </div>

              <div className="account-hold-100-Width">
                <span className="account-hold-label">PRICE PAID PER SHARES</span>
                <TextField type="number" onChange={this.props.changeShares.bind(this)} value={this.props.PositionInput.avgCost} hintText="$5.01"/>
              </div>

              <div className="account-hold-100-Width">
                  <span className="account-hold-label">TODAY CURRENT SHARES PRICE</span>
                  <TextField type="number" onChange={this.props.changeCurrent.bind(this)} value={this.props.PositionInput.liveShare} hintText="$3.10"/>
              </div>
            <div className="account-hold-100-Width">
              <RaisedButton label="Full width" onClick={this.showCalculator} label="Calculate" primary={true}/>
            </div>
        </div>
    );
  }
}

//export default App;
