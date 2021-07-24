import React, { useState, useEffect } from "react";
import LoggedInNav from "../Nav/LoggedInNav";
import axios from "axios";
import { AllPosts, Post } from "./styles";

const BACKEND_API = process.env.REACT_APP_BACKEND;

export default function Dashboard() {
  const [getPosts, setPosts] = useState([]);
  const [first_name] = useState(localStorage.getItem("first_name"));

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <LoggedInNav />
      <h1>Hello {first_name}</h1>
      <h2>Here are all posts</h2>
      <AllPosts>
        {getPosts.map((allposts) => {
          return (
            <Post key={allposts.id}>
              <h2>{allposts.title}</h2>
              <h3>{allposts.body}</h3>
            </Post>
          );
        })}
      </AllPosts>
    </>
  );
}
