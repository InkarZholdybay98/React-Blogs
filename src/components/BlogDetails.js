import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/blogs/${id}`);

  function deleteFn(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  }

  return (
    <div className="container">
      <div className="containerBlogDetalis">
        {blog && (
          <div className="blogDetails">
            <h1>{blog.title}</h1>
            <h2>{blog.body}</h2>
            <p>
              {" "}
              <span>Written by </span> : {blog.author}
            </p>
            <div className="btnDelContainer">
              {" "}
              <button className="deleteBtn" onClick={deleteFn}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
