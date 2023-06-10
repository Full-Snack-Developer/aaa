import React from "react";
import TitleComponent from "./TitleComponent";
import MessContentComponent from "./MessContentComponent";
import { Card, Input, message } from "antd";
import { useState } from "react";
import { getDatabase, push, ref } from "firebase/database";
import { auth, db } from "../firebase/fireconfig";
import { Router, useRouter } from "next/router";

const ChatComponent = () => {
  const [username, setUsername] = useState("");
  const [imessage, setImessage] = useState("");
  const user = auth.currentUser;
  const router = useRouter();
  const to = router.query.to;
  const handleSendMessage = () => {
    if (!imessage) {
      message.error("Hãy nhập nội dung");
    }

    const data = {
      imessage,
      from: user.uid,
      to: to ?? "",
      createdAt: Date.now(),
      user1: username,
      user2: "uid",
    };

    push(ref(db, `MessageDB`), data).then(() => {
      setImessage("");
      console.log("DONE");
    });
  };
  // console.log(imessage);
  return (
    <div className="  ">
      <div className="col-8 offset-2">
        <Card
          style={{
            padding: 10,
            boxShadow:
              "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div style={{ flex: "1 1 auto", overflow: "auto" }}>
            <MessContentComponent />
          </div>
          <Input
            onPressEnter={handleSendMessage}
            placeholder="Message"
            value={imessage}
            onChange={(val) => setImessage(val.target.value)}
            maxLength={100}
            allowClear
            size="large"
            style={{ marginTop: "auto" }}
          />
        </Card>
      </div>
    </div>
  );
};

export default ChatComponent;
