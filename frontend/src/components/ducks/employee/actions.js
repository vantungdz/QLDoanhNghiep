// employeeActions.js
import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
} from "./types";

export const fetchEmployeesRequest = () => ({
  type: FETCH_EMPLOYEES_REQUEST,
});

export const fetchEmployeesSuccess = (employees) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees,
});

export const fetchEmployeesFailure = (error) => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload: error,
});

export const updateEmployeeRequest = (id, newData) => ({
  type: UPDATE_EMPLOYEE_REQUEST,
  payload: { id, newData },
});

export const updateEmployeeSuccess = (updatedEmployee) => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  payload: updatedEmployee,
});

export const updateEmployeeFailure = (error) => ({
  type: UPDATE_EMPLOYEE_FAILURE,
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
