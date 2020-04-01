import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger'
import { searchRobots } from './reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App';

const logger =createLogger();
const store = createStore(searchRobots,applyMiddleware(logger));//created state.only 1 will be there
//provider will take care of passing the state to the required components. 
//if we do not use provider and pass the store in app, then it will passed to all the components(not optimal)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
