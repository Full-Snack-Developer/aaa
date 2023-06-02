import { Button, Layout } from "antd";
import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
// import logo from "../assets/logo.png";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { auth } from "@/firebase/fireconfig";

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
          <Col flex={3} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Search
              placeholder="input search text"
              style={{ width: 290, marginRight: 210, marginTop: 5 }}
            />
            <Avatar
              size="large"
              icon={<UserOutlined />}
              style={{ marginRight: 10 }}
            />
          </Col>
          <Button style={{ marginTop: 5 }} onClick={() => auth.signOut()}>
            Log out
          </Button>
        </Row>
      </div>
    </Header>
  );
};

export default HeaderComponent;
