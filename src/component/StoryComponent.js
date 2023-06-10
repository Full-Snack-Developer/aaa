import React from "react";
import { Avatar } from "antd";
import TextComponent from "./TextComponent";

const StoryComponent = () => {
  return (
    <div
      style={{
        width: 600,
        height: 110,
        // border: "1px solid #9BABB8",
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",

        borderRadius: 8,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#fff",
        marginTop: 30,
      }}
    >
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            size={60}
            style={{ border: "1px solid #9BABB8BB8" }}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <TextComponent
            text="Jisoo Ababa"
            size={15}
            weight={200}
            color="#9BABB8"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            size={60}
            style={{ border: "1px solid #9BABB8" }}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <TextComponent
            text="Jisoo Ababa"
            size={15}
            weight={200}
            color="#9BABB8"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            size={60}
            style={{ border: "1px solid #9BABB8" }}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <TextComponent
            text="Jisoo Ababa"
            size={15}
            weight={200}
            color="#9BABB8"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            size={60}
            style={{ border: "1px solid #9BABB8" }}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <TextComponent
            text="Jisoo Ababa"
            size={15}
            weight={200}
            color="#9BABB8"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            size={60}
            style={{ border: "1px solid #9BABB8" }}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <TextComponent
            text="Jisoo Ababa"
            size={15}
            weight={200}
            color="#9BABB8"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            size={60}
            style={{ border: "1px solid #9BABB8" }}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <TextComponent
            text="Jisoo Ababa"
            size={15}
            weight={200}
            color="#9BABB8"
          />
        </div>
      </>
    </div>
  );
};

export default StoryComponent;
