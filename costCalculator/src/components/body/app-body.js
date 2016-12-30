import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
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
    height: 480,
    margin: 20,
    textAligh: 'centre',
    display: 'inner-block'
  }
};

let INPUT_POSITION = {shares: 1358, avgCost: 5.01, liveShare: 3.10, total: {}};
export default class AppBody  extends React.Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
        <div>
          <Paper style={styles.paperHold} zDepth={2}>
              <div>
                <AccountHold INPUT_POSITION={INPUT_POSITION} />
              </div>
          </Paper>
          <Paper style={styles.paperAvg} zDepth={2}>
              <div>
                <AccountAverage INPUT_POSITION={INPUT_POSITION}/>
              </div>
          </Paper>
        </div>
    );
  }
}

//export default App;
