import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App-container';
import Filters from './components/Filters';


const Routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Filters} />
    </Route>
  </Route>
);

export default Routes;

//Coming for SchoolFinder 2.0
// <Route path='profile' component={Profile} />
