import React, { use, useState } from "react";
import UserComponent from "./UserComponent";
import TitleComponent from "./TitleComponent";
import Image from "next/image";

import { Button, Space, message } from "antd";
import { Like1, Messages1, Share } from "iconsax-react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { auth, fs } from "@/firebase/fireconfig";
import ModalPost from "@/modals/ModalPost";
import CommentsComponent from "./CommentsComponent";

const BigCardComponent = ({ post, onEditPost }) => {
  const [isVisibleModalPost, setIsVisibleModalPost] = useState(false);

  const handRemovePost = async () => {
    await deleteDoc(doc(fs, `posts/${post.key}`)).then(() => {
      message.success("Delete done");
    });
  };
  const user = auth.currentUser;

  const handCheckLiked = async () => {
    if (user.uid) {
      const liked = post.likedBy;
      let items = [];
      if (liked && liked.includes(user.uid)) {
        const index = liked.indexOf(user.uid);
        liked.splice(index, 1);
        items = [...liked];
      } else {
        items = liked && liked.length > 0 ? [...liked, user.uid] : [user.uid];
        sendNoti();
      }

      await updateDoc(doc(fs, `posts/${post.key}`), {
        likedBy: items,
      }).then(() => {
        console.log("Send MEssage");
      });
      console.log(items);
    }
  };

  const sendNoti = () => {
    const data = {
      title: "",
      from: user.uid,
      content: "like your post",
      created: Date.now(),
      postID: post.key,
      isSeen: false,
      to: post.createBy,
    };
    console.log(data);
    addDoc(collection(fs, `notis`), data).then(() => console.log("send done"));
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        marginTop: 20,
        borderRadius: 8,
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",

        // padding: 10,
      }}
    >
      <div
        style={{
          marginLeft: 20,
          marginTop: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginTop: 20 }}>
          {/* Chỗ này không truyền uid vào thì qua bên kia nó biết lấy cái gfi */}
          <UserComponent uid={post.createBy} />
        </div>
        <Button
          style={{ marginTop: 20, marginRight: 20 }}
          onClick={handRemovePost}
        >
          Delete
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          wordBreak: "break-all",
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <div onClick={onEditPost}>
          <TitleComponent
            text={post.content}
            size={18}
            weight={100}
            color="#9BABB8"
          />
        </div>
      </div>

      <div>
        {post.imageURL && (
          <img
            src={post.imageURL}
            height={500}
            style={{
              padding: 10,
              marginTop: 10,
              width: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </div>

      <div style={{ marginTop: 10 }}>
        <Button onClick={handCheckLiked} type="text" style={{ width: 200 }}>
          <Space>
            <Like1
              variant="Bold"
              // color="#9BABB8"
              color={
                post.likedBy && post.likedBy.includes(user.uid)
                  ? "red"
                  : "black"
              }
            />

            {post.likedBy && post.likedBy.length > 0 && post.likedBy.length}
          </Space>
        </Button>
        <Button
          type="text"
          onClick={() => {
            setIsVisibleModalPost(true);
          }}
          style={{ width: 200 }}
        >
          <Space>
            <Messages1 variant="Bold" style={{}} />
          </Space>
        </Button>
        <Button type="text" style={{ width: 200 }}>
          <Space>
            <Share style={{}} variant="Bold" />
          </Space>
        </Button>

        <ModalPost
          isVisible={isVisibleModalPost}
          isEdit
          onClose={() => {
            setIsVisibleModalPost(false);
          }}
          post={post}
        />
      </div>
    </div>
  );
};

export default BigCardComponent;
