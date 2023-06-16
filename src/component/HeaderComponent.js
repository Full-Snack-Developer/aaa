import { Button, Layout } from "antd";
import { Col, Row } from "antd";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { auth } from "@/firebase/fireconfig";
import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { fs } from "@/firebase/fireconfig";
import { Logout } from "iconsax-react";

const { Header } = Layout;
const { Search } = Input;

const HeaderComponent = () => {
  const user = auth.currentUser;

  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    getUserById();
  }, [user.uid]);

  const getUserById = async () => {
    await getDoc(doc(fs, `users/${user.uid}`))
      .then((item) =>
        setUserDetail({
          key: item.id,
          ...item.data(),
        })
      )
      .catch((error) => console.log(error));
  };
  return (
    <Header
      className="container-fluid"
      style={{ padding: "10px", backgroundColor: "white" }}
    >
      <div>
        <Row>
          <Col flex={3} className="flex flex-row">
            {/* <h1>Spacepark</h1> */}
          </Col>
          <Col flex={3} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Search
              placeholder="input search text"
              style={{ width: 290, marginRight: 255, marginTop: 5 }}
            />
            {userDetail && userDetail.photoURL ? (
              <Avatar
                src={userDetail.photoURL}
                size={40}
                icon={<UserOutlined />}
                style={{
                  marginRight: 10,
                  borderRadius: "50%",
                  border: "1px solid grey",
                }}
              />
            ) : (
              ""
            )}
          </Col>
          <Button
            icon={<Logout size={16} />}
            danger
            type="text"
            style={{ marginTop: 5 }}
            onClick={() => auth.signOut()}
          ></Button>
        </Row>
      </div>
    </Header>
  );
};

export default HeaderComponent;
