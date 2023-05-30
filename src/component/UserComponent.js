import React from "react";
import { Avatar, Skeleton, Space, Switch } from "antd";
import TextComponent from "./TitleComponent";
import TitleComponent from "./TitleComponent";

const UserComponent = () => {
  return (
    <Space>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <div>
        <TitleComponent
          text="Jisoo Ababa"
          size={20}
          weight={400}
          color="#9BABB8"
        />
        <TextComponent
          text="@JisooAbaba"
          size={15}
          weight={200}
          color="#9BABB8"
        />
      </div>
    </Space>
  );
};

export default UserComponent;
