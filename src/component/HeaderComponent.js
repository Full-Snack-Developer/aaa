import { Layout } from "antd";
import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
// import logo from "../assets/logo.png";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const { Header } = Layout;
const { Search } = Input;

const HeaderComponent = () => {
  return (
    <Header
      className="container-fluid"
      style={{ padding: "10px", backgroundColor: "white" }}
    >
      <div>
        <Row>
          <Col flex={3} className="flex flex-row">
            {/* <h1>Spacepark</h1> */}
          </Col>
          <Col flex={3}>
            <Search placeholder="input search text" style={{ width: 300 }} />
          </Col>
          <Avatar size="large" icon={<UserOutlined />} />
        </Row>
      </div>
    </Header>
  );
};

export default HeaderComponent;
