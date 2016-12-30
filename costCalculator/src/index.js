import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';


ReactDOM.render(
  	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

		<App />
	</MuiThemeProvider>,
  document.getElementById('root')
);
