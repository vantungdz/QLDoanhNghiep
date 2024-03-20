// departmentReducer.js

import {
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE,
  UPDATE_DEPARTMENT_SUCCESS,
  // DELETE_ITEM_REQUEST,
  // DELETE_ITEM_SUCCESS,
  // DELETE_ITEM_FAILURE,
} from "./types";

const initialState = {
  departments: [],
  loading: false,
  error: null,
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEPARTMENTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_DEPARTMENTS_SUCCESS:
      const newState = action.payload.data || [];
      return { ...state, loading: false, departments: newState };
    case FETCH_DEPARTMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        departments: state.departments.map((department) =>
          department.id === action.payload.id ? action.payload : department
        ),
      };
    default:
      return state;
  }
};

// const deleteDepartment = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_ITEM_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case DELETE_ITEM_SUCCESS:
//       // Nếu xóa thành công, cập nhật danh sách items mới (loại bỏ item đã xóa)
//       return {
//         ...state,
//         loading: false,
//         items: state.items.filter((item) => item.id !== action.payload.itemId),
//         error: null,
//       };
//     case DELETE_ITEM_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.error,
//       };
//     default:
//       return state;
//   }
// };

export default departmentReducer;
