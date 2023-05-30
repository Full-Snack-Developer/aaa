import { red } from "@mui/material/colors";
import React from "react";

const TitleComponent = (props) => {
  const { text, color, size, weight } = props;
  return (
    <h1
      style={{
        color: color ?? "red",
        fontSize: size ?? 20,
        fontWeight: weight ?? "bold",
      }}
    >
      {text}
    </h1>
  );
};

export default TitleComponent;
