import { CardProps } from "@/interfaces";
import React from "react";

const Card = ({ title, content }: CardProps) => {
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default Card;
