// rootSaga.js

import { all } from "redux-saga/effects";
import {
  watchFetchEmployees,
  watchUpdateEmployee,
} from "../ducks/employee/sagas";

export default function* rootSaga() {
  yield all([
    watchFetchEmployees(),
    watchUpdateEmployee(),
    // Add other sagas here if needed
  ]);
}
