import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import Index from './components/Index';
import TourDetail from './components/TourDetail';
import ToursList from './components/ToursList';
import Account from './components/Account';
import Connect from './components/Connect';

/*
  Routes
*/

const routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="tours" component={ToursList} />
      <Route path="tours/:tourID" component={TourDetail} />
      <Route path="connect" component={Connect} />
      <Route path="account" component={Account} />
    </Route>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
