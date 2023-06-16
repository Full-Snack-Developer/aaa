import "@/styles/globals.css";
import HeaderComponent from "../component/HeaderComponent";
import LeftSiderComponent from "../component/LeftSiderComponent";
import RightSiderComponent from "../component/RightSiderComponent";
import { Layout, Space } from "antd";
import LoginScreen from "./LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/fireconfig";
import { useEffect, useState } from "react";
import RegisterScreen from "./RegisterScreen";
// import MessageScreen from "./MessageScreen";

const { Content } = Layout;

export default function App({ Component, pageProps }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  // Để ở ngoài sẽ bị vòng lặp vô tận
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return isLogin ? (
    <Layout>
      <LeftSiderComponent />
      <Layout>
        <HeaderComponent />
        <Layout>
          <Content style={{}} className="bg-[#F5F7FB]">
            <Component {...pageProps} />
          </Content>
          <RightSiderComponent />
        </Layout>
      </Layout>
    </Layout>
  ) : isRegister ? (
    <RegisterScreen onLogin={() => setIsRegister(false)} />
  ) : (
    <LoginScreen onRegister={() => setIsRegister(true)} />
  );
}
