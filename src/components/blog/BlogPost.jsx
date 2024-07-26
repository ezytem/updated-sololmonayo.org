import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { preloadImage } from '../../utils/preloadImages';  // Import the utility
import SkeletonLoader from '../common/SkeletonLoader';
import Back from '../common/back/Back';
import './blog.css';

// Use the environment variable for the API URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs/${id}`);
        const data = response.data;

        // Preload the cover image
        await preloadImage(data.cover);

        setPost(data);
      } catch (error) {
        console.error('Error fetching blog post', error);
        setError('Error loading post');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Back title={post.title} />
      <section className='blog-post-section padding'>
        <div className='container'>
          <div className='post-content'>
            <div className='post-img'>
              <img src={post.cover} alt={post.title} />
            </div>
            <div className='post-text'>
              <div className='admin flexSB'>
                <span>
                  <i className='fa fa-user'></i>
                  <label>{post.type}</label>
                </span>
                <span>
                  <i className='fa fa-calendar-alt'></i>
                  <label>{post.date}</label>
                </span>
                <span>
                  <i className='fa fa-comments'></i>
                  <label>{post.com}</label>
                </span>
              </div>
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              {post.youtubeLink && (
                <div className='youtube-link'>
                  <a href={post.youtubeLink} target='_blank' rel='noopener noreferrer'>
                    Watch on YouTube
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
