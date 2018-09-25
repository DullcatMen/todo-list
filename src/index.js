import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './moudles/App';
import List from './moudles/List';
import Add from './moudles/Add';

var DATA = 1;

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route path="/list" component={List} />
      <Route path="/add" component={Add} />
    </App>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
