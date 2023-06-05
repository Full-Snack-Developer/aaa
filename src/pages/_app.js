import "@/styles/globals.css";
import HeaderComponent from "../component/HeaderComponent";
import LeftSiderComponent from "../component/LeftSiderComponent";
import RightSiderComponent from "../component/RightSiderComponent";
import { Layout, Space } from "antd";
import LoginScreen from "./LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/fireconfig";
import { useState } from "react";
// import MessageScreen from "./MessageScreen";

const { Content } = Layout;

export default function App({ Component, pageProps }) {
  const [isLogin, setIsLogin] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  return isLogin ? (
    <Layout>
      <LeftSiderComponent />
      <Layout>
        <HeaderComponent />
        <Layout>
          <Content className="bg-[#F5F7FB]">
            <Component {...pageProps} />
          </Content>
          <RightSiderComponent />
        </Layout>
      </Layout>
    </Layout>
  ) : (
    <LoginScreen />
  );
  // return <div></div>;
}
