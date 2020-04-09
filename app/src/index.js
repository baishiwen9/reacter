import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './pages/home';
import My from './pages/my';
import { HashRouter } from 'react-router-dom';
import Route from './component/route/router';
import Link from './component/route/link';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer/index';
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const routeList = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/my', component: My},
];

const linkList = [
    {path: 'home', text: '首页', id: 'home', activeColor: '#FF0000'},
    {path: 'my', text: '我的', id: 'my', activeColor: '#0033CC'},
];

const middleware = [thunk];
if(process.env.NODE_ENV !== 'production'){
    middleware.push(logger)
}

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
          <HashRouter>
              <Route routeList={routeList} />
              <Link linkList={linkList} />
          </HashRouter>
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
