import { Card } from "antd";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fs } from "@/firebase/fireconfig";
import { addDoc, doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import login from "../assets/login.jpg";

const onFinish = (values) => {
  console.log(values.email, values.password);

  signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      const data = {
        email: user.email,
        photoURL: user.photoURL,
      };
      setDoc(doc(fs, `users/${user.uid}`), data)
        .then(() => console.log("DONE"))
        .catch((error) => console.log(error));

      console.log("Success:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
    });
};

const LoginScreen = () => {
  return (
    <div>
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
        <div style={{}}>
          <Card
            style={{
              height: 300,
              boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
            }}
          >
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
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ backgroundColor: "#9DB2BF" }}
                >
                  Log in
                </Button>
                Or <Link href="/RegisterScreen">Register</Link>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
