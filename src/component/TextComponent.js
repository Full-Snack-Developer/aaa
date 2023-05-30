import { red } from "@mui/material/colors";
import React from "react";

const TextComponent = (props) => {
  const { text, color, size, weight } = props;
  return (
    <p
      style={{
        color: color ?? "red",
        fontSize: size ?? 20,
        fontWeight: weight ?? "bold",
      }}
    >
      {text}
    </p>
  );
};

export default TextComponent;
