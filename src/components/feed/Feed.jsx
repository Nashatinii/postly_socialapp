import React, { useState, useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Feed({ searchTerm }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filterPosts = () => {
      if (!searchTerm) {
        setFilteredPosts(posts);
      } else {
        const filtered = posts.filter(post =>
          (post.desc ?? "").toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
      }
    };

    filterPosts();
  }, [searchTerm, posts]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {filteredPosts.map(post => (
          <Link to={`/post/${post._id}`} style={{ textDecoration: "none" }} key={post._id}>
            <Post post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
