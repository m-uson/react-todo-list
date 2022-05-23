import React, { useEffect, useState } from "react";
import { Project } from "../components";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/projects");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <Project items={posts} />;
};

export default Home;
