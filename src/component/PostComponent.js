import React, { useEffect } from "react";
import { useState } from "react";
import { Avatar } from "antd";
import { Input } from "antd";
import { Button, Space } from "antd";
import ModalPost from "@/modals/ModalPost";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { fs } from "@/firebase/fireconfig";

const PostComponent = ({ uid }) => {
  const [isVisibleModalPost, setIsVisibleModalPost] = useState(false);
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    getUserById();
  }, [uid]);

  const getUserById = async () => {
    await getDoc(doc(fs, `users/${uid}`))
      .then((item) =>
        setUserDetail({
          key: item.id,
          ...item.data(),
        })
      )
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        width: 600,
        height: 130,
        backgroundColor: "#fff",
        borderRadius: 8,
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Avatar
        size={50}
        style={{ border: "1px solid #9BABB8" }}
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      /> */}

      <div style={{ marginLeft: 10 }}>
        <Input style={{ width: 450 }} placeholder="How the weather today ?" />
        <div style={{ display: "flex" }}>
          {/* <div style={{ marginTop: 5 }}>
            <UploadComponent />
          </div> */}
          <div style={{ marginTop: 5 }}>
            <Button onClick={() => setIsVisibleModalPost(true)}>
              Post It!
            </Button>
          </div>
        </div>
      </div>
      <ModalPost
        isVisible={isVisibleModalPost}
        onClose={() => setIsVisibleModalPost(false)}
      />
    </div>
  );
};

export default PostComponent;
