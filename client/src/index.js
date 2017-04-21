import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import '../semantic/dist/semantic.min.css';
import './index.css';

ReactDOM.render(
   <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
