import React from "react";
import { Card } from "antd";
import TitleComponent from "./TitleComponent";

const NotiComponent = () => {
  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: 10,
      }}
    >
      <Card
        title="New Notication"
        bordered={false}
        style={{
          width: 500,
          boxShadow:
            "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        }}
      >
        <TitleComponent
          text="Jisoo like your post"
          size={15}
          weight={350}
          color="#9BABB8"
        />
      </Card>

      <Card
        title="New Notication"
        bordered={false}
        style={{
          width: 500,
          boxShadow:
            "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        }}
      >
        <TitleComponent
          text="Jisoo like your post"
          size={15}
          weight={350}
          color="#9BABB8"
        />
      </Card>

      <Card
        title="New Notication"
        bordered={false}
        style={{
          width: 500,
          boxShadow:
            "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        }}
      >
        <TitleComponent
          text="Jisoo like your post"
          size={15}
          weight={350}
          color="#9BABB8"
        />
      </Card>

      <Card
        title="New Notication"
        bordered={false}
        style={{
          width: 500,
          boxShadow:
            "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        }}
      >
        <TitleComponent
          text="Jisoo like your post"
          size={15}
          weight={350}
          color="#9BABB8"
        />
      </Card>

      <Card
        title="New Notication"
        bordered={false}
        style={{
          width: 500,
          boxShadow:
            "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        }}
      >
        <TitleComponent
          text="Jisoo like your post"
          size={15}
          weight={350}
          color="#9BABB8"
        />
      </Card>
    </div>
  );
};

export default NotiComponent;
