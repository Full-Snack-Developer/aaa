import React from "react";
import TitleComponent from "./TitleComponent";
import { Card, Input, message } from "antd";
import { useState } from "react";
import { getDatabase, push } from "firebase/database";
import { ref } from "firebase/storage";
import { db } from "../firebase/fireconfig";

const ChatComponent = () => {
  const [username, setUsername] = useState("");
  const [imessage, setImessage] = useState("");

  const handleSendMessage = () => {
    if (!username || !imessage) {
      message.error("Hãy nhập nội dung");
    }

    const data = {
      imessage,
      from: username,
      to: "uid to",
      createdAt: Date.now(),
      user1: username,
      user2: "uid",
    };

    push(ref(db, `MessageDB`), data).then(() => {
      setImessage("");
      console.log("DONE");
    });
  };

  return (
    <div className="container mt-4">
      <div className="col-8 offset-2">
        <Card
          title={
            <Input
              placeholder="Username"
              value={username}
              onChange={(val) => setUsername(val.target.value)}
              style={{ width: 250 }}
              allowClear
            />
          }
          actions={[
            <div style={{ padding: 12 }}>
              <Input
                onPressEnter={handleSendMessage}
                placeholder="Message"
                value={imessage}
                onChange={(val) => setImessage(val.target.value)}
                maxLength={100}
                allowClear
                size="large"
              />
            </div>,
          ]}
        >
          AHiHI
        </Card>
      </div>
    </div>
  );
};

export default ChatComponent;
