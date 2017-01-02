import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AccountInfo from './account-info/account-info';
import AccountHold from './account-holding/account-hold';
import AccountAverage from './account-average/account-average';
const styles = {
  paperHold: {
    height: 300,
    margin: 20,
    textAligh: 'centre',
    display: 'inner-block'
  },
  paperAvg: {
    height: 450,
    margin: 20,
    textAligh: 'centre',
    display: 'inner-block'
  },
  paperInput: {
    height: 350,
    margin: 20,
    textAligh: 'centre',
    display: 'inner-block'
  }
};

let SHOW_CALCULATOR = false;
export default class AppBody  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: 1000.00,
      avgCost: 5,
      equity: 5000,
      liveShare: 2.5,
      total: {}
    };
  }
  changeEquty = () => this.setState({equity: this.state.shares * this.state.avgCost});
  changePrice = (event, newValue) => this.setState({ shares: newValue });
  changeShares = (event, newValue) => this.setState({ avgCost: newValue });
  changeCurrent = (event, newValue) => this.setState({ liveShare: newValue });
  
  render() {
    if (this.props.selectedTabsIndex === 0) {
        return (
          <Paper style={styles.paperInput} zDepth={2}>
              <div>
                <AccountInfo changeEquty={this.changeEquty} changeCurrent={this.changeCurrent} changePrice={this.changePrice} changeShares={this.changeShares} PositionInput={this.state} selectTab={this.props.selectTab} />
              </div>    
          </Paper>
        );
    }
    else {
      return (
          <div>
            <Paper style={styles.paperHold} zDepth={2}>
                <div>
                  <AccountHold INPUT_POSITION={this.state} />
                </div>
            </Paper>
            <Paper style={styles.paperAvg} zDepth={2}>
                <div>
                  <AccountAverage INPUT_POSITION={this.state}/>
                </div>
            </Paper>
          </div>
      );
    }
  }
}

//export default App;
