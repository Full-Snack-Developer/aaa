import React, { useEffect, useState } from "react";
import { Avatar, Space } from "antd";
import TitleComponent from "./TitleComponent";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { fs } from "@/firebase/fireconfig";

const UserComponent = ({ uid }) => {
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
  return userDetail ? (
    <Space>
      {userDetail.photoURL ? (
        <Avatar
          src={userDetail.photoURL}
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
          }}
        />
      ) : (
        <Avatar>
          {userDetail.email
            ? userDetail.email.substring(0, 1).toUpperCase()
            : "A"}
        </Avatar>
      )}

      <div>
        <TitleComponent
          text={userDetail.email}
          size={20}
          weight={400}
          color="#9BABB8"
        />
      </div>
    </Space>
  ) : (
    <></>
  );
};

export default UserComponent;
