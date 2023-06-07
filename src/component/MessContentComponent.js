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
      hhhhhh
      {mess.length > 0 &&
        mess.map((item, index) => (
          <List.Item>
            <List.Item.Meta
              style={{ backgroundColor: item.from === user.uid && "#BFBFBF" }}
              title={<UserComponent uid={item.from} />}
            />
            {item.imessage}
          </List.Item>
        ))}
    </div>
  );
};

export default MessContentComponent;
