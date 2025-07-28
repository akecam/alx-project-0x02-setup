import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import React from "react";

const posts = ({ posts }) => {
  return (
    <div>
      <Header />
      <PostCard
        title={posts.title}
        content={posts.content}
        userId={posts.userId}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("/data/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default posts;
