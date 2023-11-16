import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  const {
    data: blogs,
    error,
    isLoading,
  } = useFetch("http://localhost:3000/blogs");

  return (
    <div className="blogs">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {blogs &&
        blogs.map((blog) => {
          const { title, author, body, id } = blog;
          return (
            <div className="blog" key={id}>
              <Link className="titleLink" to={`/blogs/${id}`}>
                <h2 className="titleLinkH">{title}</h2>
              </Link>

              <Link to={`/blogs/${id}`}>
                {" "}
                <h3 className="authorLink">{author}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
