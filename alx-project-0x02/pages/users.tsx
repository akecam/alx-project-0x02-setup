import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("/data/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

const users = ({ users }) => {
  return (
    <div>
      <Header />
      <UserCard name={users.name} email={users.email} address={users.address} />
    </div>
  );
};

export default users;
