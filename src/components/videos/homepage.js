import axios from "axios";
import React, { useState, useEffect } from "react";
import VideoThumbnail from "./videothumbnails";

const baseURL = "https://internship-service.onrender.com/videos?page=2";

const API = () => {
  const [Post, setPost] = useState();
  // const [Image, setImage] = useState()
  //   const [CurrentPage, setCurrentPage] = useState('0');

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(baseURL);
        console.log(response.data.data);
        setPost(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchdata();
  }, []);

  if (!Post) return "no data";

  return (
    <div>
  
  <VideoThumbnail posts={Post.data.posts} />
    </div>
  );
};

export default API;
