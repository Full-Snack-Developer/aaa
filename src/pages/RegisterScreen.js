import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, message } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fs } from "@/firebase/fireconfig";
import Image from "next/image";
import login from "../assets/login.jpg";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({ onLogin }) => {
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);

    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        if (user) {
          const data = {
            email: user.email,
            // photoURL: user.photoURL,
          };

          await setDoc(doc(fs, `users/${user.uid}`), data)
            .then(() => {
              console.log("Done");
            })
            .catch((error) => console.log(error));

          // setDoc(doc(fs, `users/${user.uid}`), data)
          //   .then(() => console.log("DONE"))
          //   .catch((error) => console.log(error));

          // console.log("Success:", user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        columnGap: 10,
        marginTop: 220,
      }}
    >
      <div style={{ height: 500 }}>
        <Image src={login} style={{ objectFit: "cover", height: 300 }} />
      </div>
      <div style={{ width: 300 }}>
        <Card
          style={{
            height: 300,
            boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: 30 }}>REGISTER</h1>
          <Form
            name="normal_login"
            className="login-form"
            style={{ marginTop: 30 }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Repassword"
              />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" className="login-form-button">
                Register
              </Button>

              <Button style={{ marginLeft: 10 }} onClick={onLogin}>
                Back
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterScreen;
