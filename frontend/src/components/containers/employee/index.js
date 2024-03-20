// EmployeeManagement.js

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  Space,
  Table,
  Tag,
  Input,
  Row,
  Col,
  Typography,
  Button,
  Select,
} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  fetchEmployeesRequest,
  deleteItemRequest,
} from "../../ducks/employee/actions";

const EmployeeManagement = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { employees, loading, error } = useSelector((state) => state);
  const dataDepartment = useSelector((state) => console.log(state));

  useEffect(() => {
    dispatch(fetchEmployeesRequest());
  }, [dispatch]);

  const handleDeleteEmployee = (itemId) => {
    dispatch(deleteItemRequest(itemId));
  };

  const handleUpdate = useCallback(() => {
    console.log("update");
  }, []);

  const addNew = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleOk = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (tags) => (
        <Tag color={tags === "1" ? "green" : "red"}>
          {tags === "1" ? "Đang làm việc" : "Đã nghỉ việc"}
        </Tag>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <Space size="middle">
          <p
            onClick={handleUpdate}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Chỉnh sửa
          </p>
          <p
            style={{ cursor: "pointer", color: "blue" }}
            onClick={handleDeleteEmployee}
          >
            Xóa
          </p>
        </Space>
      ),
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <React.Fragment>
      <Button
        style={{
          backgroundColor: "#FF3300",
          color: "#fff",
          marginBottom: 10,
          marginTop: -10,
        }}
        onClick={addNew}
      >
        <PlusCircleOutlined /> Thêm nhân viên
      </Button>
      <Table dataSource={employees} columns={columns} />
      <Modal
        title="Thêm nhân viên"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Thêm nhân viên"
        cancelText="Hủy"
        width={"60%"}
      >
        <Row gutter={16}>
          <Col span={5}>
            <div>
              <Typography.Title level={5}>Mã nhân viên</Typography.Title>
              <Input placeholder="Mã nhân viên" name="employee_id" />
            </div>
          </Col>
          <Col span={9}>
            <div>
              <Typography.Title level={5}>Tên nhân viên</Typography.Title>
              <Input placeholder="Tên nhân viên" name="name" />
            </div>
          </Col>
          <Col span={10}>
            <div>
              <Typography.Title level={5}>Phòng ban</Typography.Title>
              <Select
                mode="tags"
                style={{
                  width: "100%",
                }}
                placeholder="Phòng ban"
                options={dataDepartment}
              />
            </div>
          </Col>
        </Row>
      </Modal>
    </React.Fragment>
  );
};

export default EmployeeManagement;
