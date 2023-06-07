import Image from "next/image";
import React from "react";
import dd from "../assets/dd.jpg";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { Button, Space } from "antd";

const InfoComponent = () => {
  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          objectFit: "cover",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={dd}
          width={600}
          style={{
            borderRadius: 10,
          }}
        />
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          size={100}
          icon={<UserOutlined />}
          style={{ position: "absolute", bottom: 5 }}
        />
      </div>

      <div
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          gap: 300,
        }}
      >
        <Button>Change Avatar</Button>
        <Button style={{}}>Change background</Button>
      </div>

      <Card></Card>
    </div>
  );
};

export default InfoComponent;
