import React from "react";

type TextDisplayProps = {
  text: string;
};

const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default TextDisplay;
