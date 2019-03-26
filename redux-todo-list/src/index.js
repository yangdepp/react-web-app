import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
