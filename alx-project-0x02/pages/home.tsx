import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import React, { useState } from "react";

const Home = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [card, setCard] = useState<CardProps>({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(card);
  };

  return (
    <div>
      <Header />
      <button onClick={() => setModal(!modal)}>Add Card</button>
      <Card title="Empty Title" content="Empty Content" />
      <Card title="Empty Title" content="Empty Content" />
      <Card title="Empty Title" content="Empty Content" />
      <Card title="Empty Title" content="Empty Content" />

      {modal && (
        <PostModal
          {...card}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Home;
