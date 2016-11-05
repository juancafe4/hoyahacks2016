import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import Splash from './components/Splash';
import Add from './components/Add';
import Today from './components/Today';
import Goals from './components/Goals';

render(
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={Splash}/>
      <Route path='/add' component={Add}/>
      <Route path='/today' component={Today}/>
      <Route path='/goals' component={Goals}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
