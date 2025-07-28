import React from "react";

const PostModal = ({ title, content, handleSubmit, handleChange }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text"></label>
        <input
          type="text"
          name="text"
          id="text"
          value={title}
          onChange={handleChange}
          placeholder="Title"
        />

        <label htmlFor="content"></label>
        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={handleChange}
          placeholder="Content"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostModal;
