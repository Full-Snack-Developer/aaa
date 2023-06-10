import { Card, Layout } from "antd";
import React from "react";
import Image from "next/image";
import UserComponent from "./UserComponent";
import TitleComponent from "./TitleComponent";
import logo from "../assets/logo.png";
import { Menu } from "antd";
import { Home2, Message, Notification, Profile } from "iconsax-react";
import { colors } from "@/contants/colors";
import MenuItem from "./MenuItem";
import weather from "../assets/weather.png";
import TextComponent from "./TextComponent";
import { useRouter } from "next/router";
import { auth } from "@/firebase/fireconfig";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const { Sider } = Layout;

const LeftSiderComponent = () => {
  const router = useRouter();
  const items = [
    {
      key: 1,
      label: "Home",
      icon: <Home2 size={20} color={colors.grey} variant="Outline" />,
      onClick: () => router.push("/"),
    },

    {
      key: 2,
      label: "Message",
      icon: <Message size={20} color={colors.grey} variant="Outline" />,
      onClick: () => router.push("/MessageScreen"),
    },

    {
      key: 3,
      label: "Notification",
      icon: <Notification size={20} color={colors.grey} variant="Outline" />,
      onClick: () => router.push("/NotificationScreen"),
    },

    {
      key: 4,
      label: "Profile",
      icon: (
        <Profile
          size={20}
          color={colors.grey}
          variant="Outline"
          style={{ marginTop: 5 }}
        />
      ),
      onClick: () => router.push("/InfomationScreen"),
    },
  ];
  const itemss = [
    {
      key: 1,
      label: "Sambat Coding",
      icon: <Home2 color="#555555" variant="Outline" />,
    },

    {
      key: 2,
      label: "UI/UX Comunity",
      icon: <Home2 color="#555555" variant="Outline" />,
    },

    {
      key: 3,
      label: "AndroiDev indo",
      icon: <Home2 color="#555555" variant="Outline" />,
    },
  ];
  const user = auth.currentUser;

  return (
    <Sider width={350} theme="light" className="">
      <div style={{ marginLeft: 20, marginTop: 10 }}>
        <Image src={logo} width={32} height={32} style={{ marginLeft: 40 }} />
        <div>
          <TitleComponent text="SPACEPARK" color="#000" />
        </div>
      </div>
      <Card
        style={{
          padding: 10,
          margin: 20,
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        }}
      >
        <UserComponent uid={user.uid} />
      </Card>
      <Menu
        style={{
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          borderRadius: 8,
          marginTop: 20,
          padding: 10,
          margin: 20,
          color: colors.grey,
        }}
        items={items}
      />
      <div style={{ marginLeft: 20 }}>
        <TitleComponent
          text="LAST VISITED"
          size={15}
          weight={500}
          color={colors.grey}
          style={{ margin: 20, padding: 10 }}
        />
      </div>
      {/* <MenuItem text="UIX" title="UI/UX" color="blue" /> */}
      <Card
        style={{
          width: 310,
          marginLeft: 20,
          marginTop: 10,
          borderRadius: 8,
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Image src={weather} width={32} height={32} />
          <div style={{ marginLeft: 10, marginTop: 3 }}>
            <TextComponent
              text="UI/UI Comunity"
              color="#9BABB8"
              weight={450}
              size={15}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Image src={weather} width={32} height={32} />
          <div style={{ marginLeft: 10, marginTop: 3 }}>
            <TextComponent
              text="Sambat Coding"
              color="#9BABB8"
              weight={450}
              size={15}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Image src={weather} width={32} height={32} />
          <div style={{ marginLeft: 10, marginTop: 3 }}>
            <TextComponent
              text="AndroiDev Indo"
              color="#9BABB8"
              weight={450}
              size={15}
            />
          </div>
        </div>
      </Card>
    </Sider>
  );
};

export default LeftSiderComponent;
