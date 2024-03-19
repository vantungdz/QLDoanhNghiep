// api.js

import axios from "axios";

const API_URL = "http://localhost:3001";
export const fetchEmployeesApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/employees`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to fetch employees");
  }
};

export const updateEmployeeApi = async (id, newData) => {
  try {
    const response = await axios.put(`${API_URL}/employees/${id}`, newData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to update employee");
  }
};

export const deleteItem = async (itemId) => {
  try {
    console.log(`${API_URL}/${itemId}`);
    const response = await axios.delete(`${API_URL}/${itemId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};
