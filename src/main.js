import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

//import store from './store';

import Splash from './components/Splash';
import App from './components/App';
import Add from './components/Add';
import Today from './components/Today';
import Goals from './components/Goals';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Splash}/>
      <Route path='/add' component={Add}/>
      <Route path='/today' component={Today}/>
      <Route path='/goals' component={Goals}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
