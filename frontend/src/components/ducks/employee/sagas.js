// employeeSaga.js

import { put, takeLatest, call } from "redux-saga/effects";
import {
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  updateEmployeeSuccess,
  updateEmployeeFailure,
} from "./actions";
import {
  FETCH_EMPLOYEES_REQUEST,
  UPDATE_EMPLOYEE_REQUEST,
  DELETE_ITEM_FAILURE,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_REQUEST,
} from "./types";
import { fetchEmployeesApi, updateEmployeeApi, deleteItem } from "./api";

function* fetchEmployeesSaga() {
  try {
    const employees = yield call(fetchEmployeesApi);
    yield put(fetchEmployeesSuccess(employees));
  } catch (error) {
    yield put(fetchEmployeesFailure(error));
  }
}

function* updateEmployeeSaga(action) {
  try {
    const { id, newData } = action.payload;
    const updatedEmployee = yield call(updateEmployeeApi, id, newData);
    yield put(updateEmployeeSuccess(updatedEmployee));
  } catch (error) {
    yield put(updateEmployeeFailure(error));
  }
}

function* deleteItemSaga(action) {
  try {
    console.log(action.payload);
    const { itemId } = action.payload;
    yield call(deleteItem, itemId); // Call API to delete item
    yield put({ type: DELETE_ITEM_SUCCESS });
  } catch (error) {
    yield put({ type: DELETE_ITEM_FAILURE, payload: { error: error.message } });
  }
}

export function* watchFetchEmployees() {
  yield takeLatest(FETCH_EMPLOYEES_REQUEST, fetchEmployeesSaga);
}

export function* watchUpdateEmployee() {
  yield takeLatest(UPDATE_EMPLOYEE_REQUEST, updateEmployeeSaga);
}

export function* watchDeleteItem() {
  yield takeLatest(DELETE_ITEM_REQUEST, deleteItemSaga);
}
