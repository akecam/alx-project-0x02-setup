import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import React from "react";

const users = ({ users }) => {
  return (
    <div>
      <Header />
      <UserCard name={users.name} email={users.email} address={users.address} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("/data/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default users;
