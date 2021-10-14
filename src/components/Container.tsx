import React from "react";
interface containerInterface {
  style?: React.CSSProperties;
}

const Container: React.FC<containerInterface> = ({ children, style }) => {
  return <div style={{ ...style }}>{children}</div>;
};

export default Container;
