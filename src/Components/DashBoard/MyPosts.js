import React, { useState, useEffect } from "react";
import LoggedInNav from "../Nav/LoggedInNav";
import axios from "axios";
import { AllPosts, Post } from "./styles";

const BACKEND_API = process.env.REACT_APP_BACKEND;

export default function Dashboard() {
  const [getPosts, setPosts] = useState([]);
  const [length, setLength] = useState(0);
  const [first_name] = useState(localStorage.getItem("first_name"));
  const [id] = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/posts/myposts/${id}`)
      .then((response) => {
        setPosts(response.data);
        setLength(response.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [first_name, id]);
  if (setPosts === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <LoggedInNav />
      <h1>Hello {first_name}</h1>
      <h2>Here are your posts</h2>

      {length === 0 && <h2>You have no posts</h2>}
      <AllPosts>
        {getPosts.map((myposts) => {
          return (
            <Post key={myposts.id}>
              <h2>{myposts.title}</h2>
              <h3>{myposts.body}</h3>
            </Post>
          );
        })}
      </AllPosts>
    </>
  );
}
