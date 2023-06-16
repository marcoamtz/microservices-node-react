import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://posts.com/posts/create", { title }).catch((err) => {
      console.log(err.message);
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" value={title} onChange={handleInputChange} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
