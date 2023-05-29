import "@/styles/globals.css";
import HeaderComponent from "../component/HeaderComponent";
import LeftSiderComponent from "../component/LeftSiderComponent";
import RightSiderComponent from "../component/RightSiderComponent";
import { Layout, Space } from "antd";

const { Content } = Layout;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <LeftSiderComponent />
        <Content className="bg-[#7d5353]">
          <Component {...pageProps} />
        </Content>
        <RightSiderComponent />
      </Layout>
    </Layout>
  );
}
