import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App-container';
import Profile from './containers/Profile-container';
import Filters from './containers/Filters-container';


const Routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Filters} />
      <Route path='profile' component={Profile} />
    </Route>
  </Route>
);

export default Routes;
