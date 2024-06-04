import React from "react";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import reducer from "./components/ducks/employee/reducers";
import DashboardPage from "./components/dashBoard";
import rootSaga from "./components/sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);
render(
  <Provider store={store}>
    <DashboardPage />
  </Provider>,
  document.getElementById("root")
);
