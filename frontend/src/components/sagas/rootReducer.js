// rootReducer.js

import { combineReducers } from "redux";
import { employeeReducer, deleteEmployee } from "../ducks/employee/reducers";

const rootReducer = combineReducers({
  employees: employeeReducer,
});

export default rootReducer;
