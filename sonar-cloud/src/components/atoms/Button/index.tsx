import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

const Button: React.FC<ButtonProps> = (props) => {
  return <MuiButton {...props } data-testid="button"
/>;
};

export default Button;
