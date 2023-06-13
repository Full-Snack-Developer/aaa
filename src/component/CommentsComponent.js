import { auth, fs } from "@/firebase/fireconfig";
import { Avatar, Input, List } from "antd";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import React, { use, useEffect, useState } from "react";

const CommentsComponent = ({ postId, uid, photoURL }) => {
  const [content, setContent] = useState("");
  const [newComment, setNewComment] = useState([]);

  useEffect(() => {
    getComment();
    getUser();
  }, [postId, photoURL]);

  const getComment = async () => {
    const filter = query(
      collection(fs, "comments"),
      where("postId", "==", postId)
    );
    onSnapshot(filter, (snap) => {
      if (!snap.empty) {
        const items = [];
        snap.forEach((item) => {
          items.unshift({ key: item.id, ...item.data() });
        });
        setNewComment(items);
      }
    });
  };

  const addComment = () => {
    addDoc(collection(fs, `comments`), {
      createdBy: uid,
      createdAT: Date.now(),
      postId,
      content,
    }).then(() => setContent(""));
  };

  return (
    <div>
      <Input
        placeholder="HElo"
        onChange={(val) => setContent(val.target.value)}
        value={content}
        allowClear
        maxLength={500}
        onPressEnter={addComment}
      />

      <List
        style={{ maxHeight: 500, overflow: "scroll" }}
        dataSource={newComment}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={"Teen nguowif dung"}
              description={item.content}
              avatar={<Avatar />}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CommentsComponent;
