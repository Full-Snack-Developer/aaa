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
import { comment } from "postcss";
import React, { useEffect, useState } from "react";
import UserComponent from "./UserComponent";

const CommentsComponent = ({ postId, uid, photoURL }) => {
  const [content, setContent] = useState("");
  const [newComment, setNewComment] = useState([]);

  const user = auth.currentUser;

  useEffect(() => {
    getComment();
    // getUser();
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
      // không có uid
      // phải để user.uid vào đây, đây là id của người comment, chính là người đang đăng nhập
      createdBy: user.uid ?? "",
      createdAT: Date.now(),
      postId,
      content,
    }).then(() => setContent(""));
  };

  return (
    <div>
      <Input
        placeholder="Write your comment here..."
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
              // Ở đây phải truyền vào id của người tạo comment chứ không phải người đang đăng nhập
              // Từ cái id này sẽ hiển thị tên của người comment
              title={<UserComponent uid={item.createdBy} />}
              description={item.content}
              avatar={photoURL}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CommentsComponent;
