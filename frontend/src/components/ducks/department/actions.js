// departmentActions.js
import {
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
} from "./types";

export const fetchDepartmentsRequest = () => ({
  type: FETCH_DEPARTMENTS_REQUEST,
});

export const fetchDepartmentsSuccess = (departments) => ({
  type: FETCH_DEPARTMENTS_SUCCESS,
  payload: departments,
});

export const fetchDepartmentsFailure = (error) => ({
  type: FETCH_DEPARTMENTS_FAILURE,
  payload: error,
});

export const updateDepartmentRequest = (id, newData) => ({
  type: UPDATE_DEPARTMENT_REQUEST,
  payload: { id, newData },
});

export const updateDepartmentSuccess = (updatedDepartment) => ({
  type: UPDATE_DEPARTMENT_SUCCESS,
  payload: updatedDepartment,
});

export const updateDepartmentFailure = (error) => ({
  type: UPDATE_DEPARTMENT_FAILURE,
  payload: error,
});

export const deleteItemRequest = (itemId) => ({
  type: DELETE_ITEM_REQUEST,
  payload: { itemId },
});

export const deleteItemSuccess = () => ({
  type: DELETE_ITEM_SUCCESS,
});

export const deleteItemFailure = (error) => ({
  type: DELETE_ITEM_FAILURE,
  payload: { error },
});
