import { Card } from "antd";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fs } from "@/firebase/fireconfig";
import { addDoc, doc, setDoc } from "firebase/firestore";

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
    <Card style={{ width: 300 }}>
      <Form
        name="normal_login"
        className="login-form"
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
          >
            Log in
          </Button>
          Or <Link href="/RegisterScreen">Register</Link>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginScreen;
