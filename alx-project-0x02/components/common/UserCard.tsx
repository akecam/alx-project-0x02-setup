import { type UserProps } from "@/interfaces";
import React from "react";

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default UserCard;
