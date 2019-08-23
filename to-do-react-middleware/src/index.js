import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import App from "./components/App";
import loggerMiddleWare from "./middlewares/logger";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleWare));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
