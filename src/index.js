import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import App from './containers/App-container';
import thunk from 'redux-thunk'

let preloadedState = { FilterResults: {activeSearch: false, schools: []} }

const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk), devToolsEnhancer())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
