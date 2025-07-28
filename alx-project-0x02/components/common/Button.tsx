import { type ButtonProps } from "@/interfaces";
import React from "react";

const Button = ({ size, shape }: ButtonProps) => {
  return (
    <div>
      <button className={`${size} ${shape}`}>Button</button>
    </div>
  );
};

export default Button;
