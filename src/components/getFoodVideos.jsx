// getFoodVideos.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetFoodVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.youtube.com/results?search_query=Tunisian+food');
        // Note: You might need to parse the HTML to extract video information
        // Using cheerio in the browser environment won't work as intended.
        // Consider using server-side code for scraping or use a public API.
        console.log(response.data); // Check the response
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Latest Tunisian Food Videos</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetFoodVideos;
