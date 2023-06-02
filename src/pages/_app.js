import "@/styles/globals.css";
import HeaderComponent from "../component/HeaderComponent";
import LeftSiderComponent from "../component/LeftSiderComponent";
import RightSiderComponent from "../component/RightSiderComponent";
import { Layout, Space } from "antd";

const { Content } = Layout;

export default function App({ Component, pageProps }) {
  return (
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
  );
}
