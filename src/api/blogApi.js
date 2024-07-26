import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/blogs`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    console.log('Fetched Blogs:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs", error);
    throw error;
  }
};

export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(`${API_URL}/blogs`, blogData, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating blog", error);
    throw error;
  }
};

export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/blogs/${id}`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting blog", error);
    throw error;
  }
};
