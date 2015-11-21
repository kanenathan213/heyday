import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import Index from './components/Index';
import TourDetail from './components/TourDetail';
import ToursList from './components/ToursList';

/*
  Routes
*/

const routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="tours" component={ToursList}>
          <Route path=":tourID" component={TourDetail} />
      </Route>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
