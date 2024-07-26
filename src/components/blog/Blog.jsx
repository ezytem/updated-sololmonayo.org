import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost";
import axios from "axios";
import "./blog.css";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Blog = () => {
  let { path } = useRouteMatch();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs`);
        console.log('Fetched Blogs:', response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blog posts", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <section className="blog-hero">
        <div className="blog-title">Blogs</div>
      </section>
      <section className="blog padding">
        <div className="container grid2">
          <Switch>
            <Route exact path={path}>
              <BlogCard blogs={blogs} />
            </Route>
            <Route path={`${path}/:id`} component={BlogPost} />
          </Switch>
        </div>
      </section>
    </>
  );
};

export default Blog;
