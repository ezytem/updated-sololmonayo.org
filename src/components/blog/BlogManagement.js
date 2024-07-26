// src/components/BlogManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const BlogManagement = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${API_URL}/blogs`);
        setPosts(res.data);
      } catch (err) {
        setMessage('Error fetching posts');
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`${API_URL}/blogs/${id}`, {
        headers: { 'x-auth-token': token }
      });
      setPosts(posts.filter(post => post._id !== id));
      setMessage('Post deleted successfully');
    } catch (err) {
      setMessage('Error deleting post');
    }
  };

  return (
    <div>
      <h2>Manage Blog Posts</h2>
      {message && <p>{message}</p>}
      <h3>Existing Posts</h3>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h4>{post.title}</h4>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogManagement;
