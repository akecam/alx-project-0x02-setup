import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import React from "react";

const Posts = ({ title, content, userId }: PostProps) => {
  return (
    <div>
      <Header />
      <p>Posts</p>
    </div>
  );
};

export default Posts;
