import React from "react";
import { colors } from "../contants/colors";

const IconSquare = (props) => {
  const { text, icon, color, size } = props;

  return (
    <div
      style={{
        backgroundColor: color ?? colors.red,
        width: size ?? 24,
        height: size ?? 24,
      }}
    >
      {text ? text : icon ? icon : null}
    </div>
  );
};

export default IconSquare;
