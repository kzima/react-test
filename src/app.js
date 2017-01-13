import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import App from './views/app';
import store from './store';
import { Provider } from 'react-redux';
import { LibraryList, LibraryDetail, LibraryCreate } from './views/pages/library';

// some polyfill required so we could use finally() on Promise
require('promise.prototype.finally').shim();

// load boostrap scss file so webpack can compile it
import './scss/app.scss';

// on touch tap is required by Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';

// Material UI requires onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render((
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ LibraryList } />
        <Route path="libraries" component={ LibraryList } />
        <Route path="libraries/:lid" component={ LibraryDetail } />
        <Route path="new" component={ LibraryCreate } />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app'));
