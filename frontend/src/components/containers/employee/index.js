// EmployeeManagement.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Space, Table, Tag } from "antd";
import {
  fetchEmployeesRequest,
  updateEmployeeRequest,
  deleteItemRequest,
} from "../../ducks/employee/actions";

const EmployeeManagement = () => {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchEmployeesRequest());
  }, [dispatch]);

  const handleDeleteEmployee = (itemId) => {
    dispatch(deleteItemRequest(itemId));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Domicile",
      dataIndex: "domicile",
      key: "domicile",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <Space size="middle">
          <a>Chỉnh sửa</a>
          <a onClick={handleDeleteEmployee}>Xóa</a>
        </Space>
      ),
    },
  ];

  // const handleUpdateEmployee = (id, newData) => {
  //   dispatch(updateEmployeeRequest(id, newData));
  // };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <Table dataSource={employees} columns={columns} />;
};

export default EmployeeManagement;
