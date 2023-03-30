import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../atoms/Post";

interface IBlog {
  apiUrl: string;
}

type PostType = {
  id: number;
  title: string;
  content: string;
};

const Blog = ({ apiUrl }: IBlog) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    axios.get(apiUrl).then((response) => setPosts(response.data));
  }, [apiUrl]);

  return (
    <div className="blog">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
