import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import saga = from './saga';

const sagaMiddlware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddlware, logger());

const store = createStor(reducers, compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

sagaMiddlware.run(saga);

export default store;
