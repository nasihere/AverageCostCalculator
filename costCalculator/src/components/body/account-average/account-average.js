import React, { Component } from 'react';
import './account-average.css';
import Divider from 'material-ui/Divider';
import AvgSlider from './average-slider/average-slider';
import {position, updateNewShares, updateNewEquity, GETCostShares, GetNewTotal} from './../account-calculate';

export default class AccountAverage  extends React.Component {
  constructor(props) {
    super(props);
    //let INPUT_POSITION = props.INPUT_POSITION;
    this.state = {
      sharesNew: 1000, 
      equityNew: 6000,
      position: GetNewTotal(props.INPUT_POSITION)
    };
    console.log(this.state )
}
  
  handleChangeQty = (event, newValue) => {
    this.setState({
      sharesNew: newValue, 
      position: {
        share: this.props.INPUT_POSITION.shares + newValue
      }
  });
    
    
  };
  handleChangeEquity = (event, newValue) => {
    this.setState({
      equityNew: newValue
    });
  };
  render() {
    return (
        <div className="account-hold-row">
            <span className="account-hold-title">
                New Position
                <Divider />    
            </span>
            <div className="account-hold-50-Width">
              <span className="account-hold-label">SHARES</span>
              <span className="account-hold-value">{this.state.sharesNew}</span>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-label">EQUITY VALUE $</span>
              <span className="account-hold-value">{this.state.equityNew.toLocaleString()}</span>
            </div>
            <div className="account-average-slider-height">
                <div className="account-hold-50-Width">
                    <div className="qty-slider">
                        <AvgSlider change={this.handleChangeQty} />
                    </div>
                </div>
                <div className="account-hold-50-Width">
                    <div className="equity-slider">
                        <AvgSlider change={this.handleChangeEquity}/>
                    </div>
                </div>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-label">TOTAL SHARES</span>
              <span className="account-hold-value">{this.state.position.share}</span>
            </div>
            {/*<div className="account-hold-50-Width">
              <span className="account-hold-label">TOTAL EQUITY VALUE $</span>
              <span className="account-hold-value">{this.state.position.equity.toLocaleString()}</span>
            </div>
*/}
            <div className="account-hold-50-Width">
              <span className="account-hold-label-disabled">AVERAGE COST/SHARES</span>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-value-disabled">+$207.25 (+5.19%)</span>
            </div>
            <div className="account-hold-100-Width">
              <Divider />
            </div>
            
            <div className="account-hold-50-Width">
              <span className="account-hold-label-disabled">AVERAGE PERCENTAGE</span>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-value-disabled">-$2,702.81 (+39.11%)</span>
            </div>
            <div className="account-hold-100-Width">
              <Divider />
            </div>

        </div>
    );
  }
}

//export default App;
