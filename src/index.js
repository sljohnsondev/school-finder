import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import rootReducer from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

let preloadedState = { FilterResults: {activeSearch: false, schools: []} }

const store = createStore(rootReducer, preloadedState, devToolsEnhancer())

render(
  <Provider store={store}>
    <Router routes={Routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
)
