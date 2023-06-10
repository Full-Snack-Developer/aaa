import React from "react";
import UserComponent from "./UserComponent";
import TitleComponent from "./TitleComponent";
import Image from "next/image";

import { Button, Space, message } from "antd";
import { Like1, Messages1, Share } from "iconsax-react";
import { deleteDoc, doc } from "firebase/firestore";
import { fs } from "@/firebase/fireconfig";

const BigCardComponent = ({ post, onEditPost }) => {
  const handRemovePost = async () => {
    await deleteDoc(doc(fs, `posts/${post.key}`)).then(() => {
      message.success("Delete done");
    });
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
          <UserComponent />
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
            style={{ marginTop: 10, width: "100%", objectFit: "cover" }}
          />
        )}
      </div>

      <div style={{ marginTop: 10 }}>
        <Button type="text" style={{ width: 200 }}>
          <Like1 style={{ marginLeft: 75 }} color="#9BABB8" />
        </Button>
        <Button type="text" style={{ width: 200 }}>
          <Messages1 style={{ marginLeft: 75 }} color="#9BABB8" />
        </Button>
        <Button type="text" style={{ width: 200 }}>
          <Share style={{ marginLeft: 75 }} color="#9BABB8" />
        </Button>
      </div>
    </div>
  );
};

export default BigCardComponent;
