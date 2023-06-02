import { Card, Layout } from "antd";
import Image from "next/image";
import React from "react";
import TitleComponent from "./TitleComponent";
import TextComponent from "./TextComponent";
import weather from "../assets/weather.png";

const { Sider } = Layout;

const RightSiderComponent = () => {
  return (
    <Sider
      width={350}
      theme="light"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ marginLeft: 20 }}>
        <TitleComponent
          text="MY COMMUNITY"
          size={15}
          weight={500}
          color="grey"
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
          border: "1px solid grey",
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

      <div style={{ marginLeft: 20, marginTop: 20 }}>
        <TitleComponent
          text="SIMILAR COMMUNITY"
          size={15}
          weight={500}
          color="grey"
          style={{ margin: 20, padding: 10 }}
        />
      </div>
      <Card
        style={{
          width: 310,
          marginLeft: 20,
          marginTop: 10,
          borderRadius: 8,
          border: "1px solid grey",
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

export default RightSiderComponent;
