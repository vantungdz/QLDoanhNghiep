// departmentSaga.js

import { put, takeLatest, call } from "redux-saga/effects";
import {
  fetchDepartmentsSuccess,
  fetchDepartmentsFailure,
  updateDepartmentSuccess,
  updateDepartmentFailure,
} from "./actions";
import {
  FETCH_DEPARTMENTS_REQUEST,
  UPDATE_DEPARTMENT_REQUEST,
  DELETE_ITEM_FAILURE,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_REQUEST,
} from "./types";
import { fetchDepartmentsApi, updateDepartmentApi, deleteItem } from "./api";

function* fetchDepartmentsSaga() {
  try {
    const departments = yield call(fetchDepartmentsApi);
    yield put(fetchDepartmentsSuccess(departments));
  } catch (error) {
    yield put(fetchDepartmentsFailure(error));
  }
}

function* updateDepartmentSaga(action) {
  try {
    const { id, newData } = action.payload;
    const updatedDepartment = yield call(updateDepartmentApi, id, newData);
    yield put(updateDepartmentSuccess(updatedDepartment));
  } catch (error) {
    yield put(updateDepartmentFailure(error));
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

export function* watchFetchDepartments() {
  yield takeLatest(FETCH_DEPARTMENTS_REQUEST, fetchDepartmentsSaga);
}

export function* watchUpdateDepartment() {
  yield takeLatest(UPDATE_DEPARTMENT_REQUEST, updateDepartmentSaga);
}

export function* watchDeleteItem() {
  yield takeLatest(DELETE_ITEM_REQUEST, deleteItemSaga);
}
