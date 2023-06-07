import React from "react";
import { Card } from "antd";
import TitleComponent from "./TitleComponent";

const NotiComponent = () => {
  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        rowGap: 10,
      }}
    >
      <Card title="New Notication" bordered={false} style={{ width: 500 }}>
        <TitleComponent
          text="Jisoo like your post"
          size={15}
          weight={350}
          color="#9BABB8"
        />
      </Card>

      <Card title="New Notication" bordered={false} style={{ width: 500 }}>
        <TitleComponent
          text="Jisoo like your post"
          size={15}
          weight={350}
          color="#9BABB8"
        />
      </Card>

      <Card title="New Notication" bordered={false} style={{ width: 500 }}>
        <TitleComponent
          text="Jisoo like your post"
          size={15}
          weight={350}
          color="#9BABB8"
        />
      </Card>

      <Card title="New Notication" bordered={false} style={{ width: 500 }}>
        <TitleComponent
          text="Jisoo like your post"
          size={15}
          weight={350}
          color="#9BABB8"
        />
      </Card>

      <Card title="New Notication" bordered={false} style={{ width: 500 }}>
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
