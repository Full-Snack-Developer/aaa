import { onValue } from "firebase/database";
import { ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/firebase/fireconfig";
import { List } from "antd";
import UserComponent from "./UserComponent";

const MessContentComponent = () => {
  const [mess, setMess] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    onValue(ref(db, `MessageDB`), (snap) => {
      if (snap.val()) {
        const items = [];
        snap.forEach((item) => {
          items.push({
            key: item.key,
            ...item.val(),
          });
        });
        setMess(items);
      }
    });
  }, []);
  console.log(mess);

  return (
    <div style={{ height: 500 }}>
      {mess.length > 0 &&
        mess.map((item, index) => (
          <List.Item style={{ padding: 10 }}>
            <List.Item.Meta
              style={{
                backgroundColor: item.from === user.uid && "",

                backgroundColor: "",
              }}
              title={<UserComponent uid={item.from} />}
            />
            <div style={{ display: "inline-block", marginTop: 5 }}>
              <div
                style={{
                  backgroundColor: "#526D82",
                  padding: 10,
                  borderRadius: 15,
                }}
              >
                {item.imessage}
              </div>
            </div>
          </List.Item>
        ))}
    </div>
  );
};

export default MessContentComponent;
