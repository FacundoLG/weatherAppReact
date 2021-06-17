import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import reducers from './redux/reducers';
import { Provider } from 'react-redux';
var initialState = {
  weatherData: {}
}

var store = createStore(reducers,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
