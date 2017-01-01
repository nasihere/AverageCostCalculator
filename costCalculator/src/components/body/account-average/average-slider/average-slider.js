import React, {Component} from 'react';
import Slider from 'material-ui/Slider';

const styles = {
  root: {
    display: 'flex',
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};



export default class AvgSlider  extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.root}>
        <Slider onChange={this.props.change} max={this.props.max} min={1} value={this.props.value} style={{height: 150}} axis="y" />
      </div>
    )
  }
};
