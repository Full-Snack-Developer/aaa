import { Row } from "antd";
import React from "react";
import IconSquare from "./IconSquare";
import TitleComponent from "./TitleComponent";

const MenuItem = (props) => {
  const { text, title, color, icon } = props;
  return (
    <div>
      <Row>
        <IconSquare text={text} color={color} icon={icon} />
        <TitleComponent title={title} />
      </Row>
    </div>
  );
};

export default MenuItem;
