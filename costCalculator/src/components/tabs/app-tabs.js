import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import CallSplit from 'material-ui/svg-icons/communication/call-split';
import IconLocationOff from 'material-ui/svg-icons/communication/business';

const recentsIcon = <IconLocationOff />;
const favoritesIcon = <CallSplit />;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationTabs extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.props.selectedIndex}>
          <BottomNavigationItem
            label="My Position"
            icon={recentsIcon}
            onClick={() => this.props.selectTab(0)}
          />
          <BottomNavigationItem
            label="CALCULATE"
            icon={favoritesIcon}
            onClick={() => this.props.selectTab(1)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationTabs;