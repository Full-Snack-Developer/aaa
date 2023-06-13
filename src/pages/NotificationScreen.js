import NotiComponent from "@/component/NotiComponent";
import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, fs } from "@/firebase/fireconfig";

const NotificationScreen = () => {
  const [notis, setNotis] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    getAllNotiUnSeen();
  }, []);

  const getAllNotiUnSeen = () => {
    if (user.uid) {
      const filter = query(
        collection(fs, "notis"),
        where("to", "==", user.uid)
      );
      onSnapshot(filter, (snap) => {
        if (!snap.empty) {
          const items = [];
          snap.forEach((item) => {
            items.push({ key: item.id, ...item.data() });
          });
          setNotis(items);
        }
      });
    }
  };
  // console.log(notis);

  return (
    <div>
      {notis.length > 0 && notis.map((item) => <NotiComponent item={item} />)}
    </div>
  );
};

export default NotificationScreen;
