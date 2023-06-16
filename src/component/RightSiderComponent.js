import { Card, Layout } from "antd";
import Image from "next/image";
import React from "react";
import TitleComponent from "./TitleComponent";
import TextComponent from "./TextComponent";
import weather from "../assets/weather.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";

import icon9 from "../assets/icon9.png";
import icon10 from "../assets/icon10.png";
import icon11 from "../assets/icon11.png";
import icon12 from "../assets/icon12.png";
import icon13 from "../assets/icon13.png";

const { Sider } = Layout;

const RightSiderComponent = () => {
  return (
    <Sider
      width={350}
      theme="light"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ marginLeft: 5 }}>
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
          marginLeft: 5,
          marginTop: 10,
          borderRadius: 8,
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Image src={icon9} width={32} height={32} />
          <div style={{ marginLeft: 10, marginTop: 3 }}>
            <TextComponent
              text="Wibu Club"
              color="#9BABB8"
              weight={450}
              size={15}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Image src={icon10} width={32} height={32} />
          <div style={{ marginLeft: 10, marginTop: 3 }}>
            <TextComponent
              text="CS:GO Club"
              color="#9BABB8"
              weight={450}
              size={15}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Image src={icon11} width={32} height={32} />
          <div style={{ marginLeft: 10, marginTop: 3 }}>
            <TextComponent
              text="Dota FAN"
              color="#9BABB8"
              weight={450}
              size={15}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Image src={icon12} width={32} height={32} />
          <div style={{ marginLeft: 10, marginTop: 3 }}>
            <TextComponent
              text="LOL FAN"
              color="#9BABB8"
              weight={450}
              size={15}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Image src={icon13} width={32} height={32} />
          <div style={{ marginLeft: 10, marginTop: 3 }}>
            <TextComponent
              text="Valorant Newbie"
              color="#9BABB8"
              weight={450}
              size={15}
            />
          </div>
        </div>
      </Card>

      <div style={{ marginLeft: 5, marginTop: 20 }}>
        <TitleComponent
          text="SIMILAR COMMUNITY"
          size={15}
          weight={500}
          color="grey"
          style={{ margin: 10, padding: 10 }}
        />
      </div>
      <Card
        style={{
          width: 310,
          marginLeft: 5,
          marginTop: 10,
          borderRadius: 8,
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Image src={icon1} width={32} height={32} />
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
          <Image src={icon2} width={32} height={32} />
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
          <Image src={icon3} width={32} height={32} />
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
          <Image src={icon4} width={32} height={32} />
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
          <Image src={icon5} width={32} height={32} />
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
