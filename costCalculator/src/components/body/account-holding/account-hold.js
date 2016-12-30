import React, { Component } from 'react';
import './account-hold.css';
import Divider from 'material-ui/Divider';
import {GetTotal} from './../account-calculate';

export default class AccountHold  extends React.Component {
  constructor(props) {
    super(props);
    let INPUT_POSITION = props.INPUT_POSITION;
    INPUT_POSITION.total = GetTotal(INPUT_POSITION);
    this.states = INPUT_POSITION;
  }
  render() {

    return (
        <div className="account-hold-row">
            <span className="account-hold-title">
                Your Position
                <Divider />    
            </span>
            <div className="account-hold-50-Width">
              <span className="account-hold-label">SHARES</span>
              <span className="account-hold-value">{this.states.shares.toLocaleString()}</span>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-label">EQUITY VALUE $</span>
              <span className="account-hold-value">{this.states.total.totalEquity.toLocaleString()}</span>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-label">AVG COST $</span>
              <span className="account-hold-value">{this.states.avgCost}</span>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-label">LIVE SHARES $</span>
              <span className="account-hold-value">{this.states.liveShare}</span>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-label-disabled">TODAY'S RETURN</span>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-value-disabled">${this.states.total.todayReturn.toLocaleString()} ({this.states.total.todayReturnPerc.toLocaleString()}%)</span>
            </div>
            <div className="account-hold-100-Width">
              <Divider />
            </div>
            
            <div className="account-hold-50-Width">
              <span className="account-hold-label-disabled">TOTAL PAID</span>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-value-disabled">${this.states.total.totalReturn.toLocaleString()}</span>
            </div>
            <div className="account-hold-100-Width">
              <Divider />
            </div>
        </div>
    );
  }
}

//export default App;
