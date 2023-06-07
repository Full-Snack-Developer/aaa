import React, { useEffect, useState } from "react";
import { Avatar, Skeleton, Space, Switch } from "antd";
import TextComponent from "./TitleComponent";
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
  console.log(userDetail);
  return userDetail ? (
    <Space>
      {userDetail.photoURL ? (
        <Avatar src={userDetail.photoURL} />
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
        {/* <TextComponent
          text="@JisooAbaba"
          size={15}
          weight={200}
          color="#9BABB8"
        /> */}
      </div>
    </Space>
  ) : (
    <></>
  );
};

export default UserComponent;
