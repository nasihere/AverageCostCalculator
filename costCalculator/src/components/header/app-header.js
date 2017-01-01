import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';

const AppTitle = 'Average Share Cost Calculator';

const styles = {
  title: {
    cursor: 'pointer',
  }
};
export default class AppHeader  extends React.Component {
 constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <AppBar
          title={<span style={styles.title}>{AppTitle}</span>}
          iconElementRight={<span></span>}
          iconElementLeft={<span></span>} />
      
    );
  }
}

//export default App;
