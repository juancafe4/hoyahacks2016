import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';

injectTapEventPlugin();

import Splash from './components/Splash';
import App from './components/App';
import Add from './components/Add';
import Today from './components/Today';
import Goals from './components/Goals';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#8BC34A',
    accent1Color: '#A1887F'
  },
  snackbar: {
    textColor: '#A1887F',
    backgroundColor: '#8BC34A'
  },
  appBar: {
    textColor: '#A1887F'
  }
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Splash}/>
        <Route path='/add' component={Add}/>
        <Route path='/today' component={Today}/>
        <Route path='/goals' component={Goals}/>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
