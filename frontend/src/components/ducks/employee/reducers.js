// employeeReducer.js

import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  UPDATE_EMPLOYEE_SUCCESS,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
} from "./types";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST:
      return { ...state, loading: true };
    case FETCH_EMPLOYEES_SUCCESS:
      const newState = action.payload.data || [];
      return { ...state, loading: false, employees: newState };
    case FETCH_EMPLOYEES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ),
      };
    default:
      return state;
  }
};

const deleteEmployee = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_ITEM_SUCCESS:
      // Nếu xóa thành công, cập nhật danh sách items mới (loại bỏ item đã xóa)
      return {
        ...state,
        loading: false,
        items: state.items.filter((item) => item.id !== action.payload.itemId),
        error: null,
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default employeeReducer;
