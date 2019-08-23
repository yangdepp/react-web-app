import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import App from "./components/App";
import loggerEnhancer from "./enhancers/logger";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    loggerEnhancer
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
