import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const history = useHistory();

  function addBlog(e) {
    e.preventDefault();

    const newBlog = { title, body, author };

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      history.push("/");
    });
  }

  return (
    <div className="addBlog">
      <div className="addBlogDiv">
        <form onSubmit={addBlog}>
          <div className="title">
            <label htmlFor="title"></label>
            <input
              type="text"
              placeholder="Title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="blogBody">
            <label htmlFor="body"></label>
            <textarea
              type="text"
              placeholder="Your Blog..."
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="author">
            <label htmlFor="author"></label>
            <input
              type="text"
              placeholder="Author"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="btn">
            {" "}
            <button className="addBlogBtn">Add a new Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
}
