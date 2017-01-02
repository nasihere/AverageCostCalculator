import React, { Component } from 'react';
import './account-average.css';
import Divider from 'material-ui/Divider';
import AvgSlider from './average-slider/average-slider';
import {position, updateNewShares, updateNewEquity, GETCostShares, GetNewTotal} from './../account-calculate';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 40,
  color: '#a9a9a9',
  textAlign: 'center',
  display: 'inline-block',
};

let MAX_EQUITY = 10000;
let MAX_SHARES = 10000;
let MAX_PRICE  = 100;
export default class AccountAverage  extends React.Component {
  constructor(props) {
    super(props);

    let INPUT_POSITION = props.INPUT_POSITION;
    MAX_EQUITY = INPUT_POSITION.equity * 3;
    MAX_SHARES = INPUT_POSITION.shares * 5;
    MAX_PRICE  = INPUT_POSITION.liveShare;
    this.state = {
      shares    : 0, 
      equity    : INPUT_POSITION.equity,
      price     : INPUT_POSITION.liveShare,
      average   : INPUT_POSITION.avgCost,
      sharesNew  : INPUT_POSITION.shares,
      equityNew : INPUT_POSITION.shares * INPUT_POSITION.avgCost
    };
    console.log(this.state)
   }
  handleChangePrice = (event, newValue) => {
    const totalShares     = this.props.INPUT_POSITION.shares + this.state.shares;
    const newShare        = this.state.shares;
    const totalEquity     = this.props.INPUT_POSITION.equity + (newValue * newShare);
    const avgNew          = totalEquity / totalShares;
    MAX_EQUITY            = newValue * newShare;
    MAX_SHARES            = MAX_EQUITY * newValue;
    this.setState({
        price       : newValue,
        equity      : newValue * newShare,
        equityNew   : totalEquity,
        average     : avgNew
    });
  };
  handleChangeQty = (event, newValue) => {
    const totalShares = this.props.INPUT_POSITION.shares + newValue;
    const newPrice  = this.state.price;
    const newEquity = this.state.equityNew;
    const totalEquity= (newValue * newPrice) + this.props.INPUT_POSITION.equity;
    const avgNew     = totalEquity / totalShares
    MAX_EQUITY       = newValue * newPrice;
    this.setState({
        shares      : newValue, 
        sharesNew   : totalShares,
        equity      : newValue * newPrice,
        equityNew   : totalEquity,
        average     : avgNew
    });
  };
  handleChangeEquity = (event, newValue) => {
    const totalEquity     = this.props.INPUT_POSITION.equity + newValue;
    const NewPosShare     = newValue / this.state.price
    const totalShare      = NewPosShare + parseInt(this.props.INPUT_POSITION.shares);
    const avgNew          = totalEquity / totalShare
    this.setState({
      equity    : newValue,
      equityNew : totalEquity,
      shares    : NewPosShare,
      sharesNew : totalShare,
      average   : avgNew
    });
  };
  render() {
    return (
        <div className="account-hold-row">
            <span className="account-hold-title">
                New Position
                <Divider />    
            </span>
            
            <div className="account-average-35-Width">
              <span className="account-hold-label">SHARES</span>
              <span className="account-hold-value">{this.state.shares.toLocaleString()}</span>
            </div>

            <div className="account-average-35-Width">
              <span className="account-hold-label">PRICE $</span>
              <span className="account-hold-value">{this.state.price.toLocaleString()}</span>
            </div>

            <div className="account-average-35-Width">
              <span className="account-hold-label">EQUITY VALUE $</span>
              <span className="account-hold-value">{this.state.equity.toLocaleString()}</span>
            </div>

            <div className="account-average-slider-height">
                <div className="account-average-35-Width">
                    <div className="qty-slider">
                        <AvgSlider max={MAX_SHARES} value={this.state.shares} change={this.handleChangeQty} />
                    </div>
                </div>
                <div className="account-average-35-Width">
                    <div className="price-slider">
                        <AvgSlider max={MAX_PRICE} value={this.state.price} change={this.handleChangePrice}/>
                    </div>
                </div>

                <div className="account-average-35-Width">
                    <div className="equity-slider">
                        <AvgSlider max={MAX_EQUITY} value={this.state.equity} change={this.handleChangeEquity}/>
                    </div>
                </div>
            </div>
            <div className="account-hold-50-Width">
              <span className="account-hold-label">TOTAL SHARES</span>
              <span className="account-hold-value">{this.state.sharesNew.toLocaleString()}</span>
            </div>
             <div className="account-hold-50-Width">
              <span className="account-hold-label">TOTAL EQUITY VALUE $</span>
              <span className="account-hold-value">{this.state.equityNew.toLocaleString()}</span>
            </div>

            <div className="account-hold-50-Width bg-average">
                <span className="account-hold-label "> NEW AVERAGE COST/SHARES: </span>
                <span className="account-hold-value account-color-blue ">${this.state.average.toLocaleString()}</span>
             </div>

            
            

        </div>
    );
  }
}

//export default App;
