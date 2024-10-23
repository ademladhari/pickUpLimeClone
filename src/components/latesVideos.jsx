import React, { useState } from 'react';

// Function to extract video ID from YouTube URL
const getVideoIdFromUrl = (url) => {
  const urlObj = new URL(url);
  // Check for both the `v` query parameter and the pathname
  if (urlObj.searchParams.has('v')) {
    return urlObj.searchParams.get('v');
  }
  const pathnameSegments = urlObj.pathname.split('/');
  return pathnameSegments[pathnameSegments.length - 1]; // The last segment should be the video ID for some URLs
};

const LatestVideos = ({ latestVideos, name }) => {
  const [visibleCount, setVisibleCount] = useState(5); // Start with 5 visible videos

  const handleMoreClick = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 5, latestVideos.length)); // Show next 5 or total available
  };

  return (
    <>
      {latestVideos && (
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center w-[90%] mx-auto md:text-left  mb-6">{name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-[90%] mx-auto gap-4">
  {latestVideos.slice(0, visibleCount).map((video, index) => {
                  const videoId = getVideoIdFromUrl(video.videoUrl); // Extract video ID from the URL
return (
    <div key={index} className="max-w-xs flex flex-col justify-between mx-auto mb-4">
      <a href={video.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        <img
           src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          alt={video.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="mt-2 text-sm font-semibold text-center flex-grow">{video.title}</h3>
      </a>
    </div>
 ) })}
</div>
          {visibleCount < latestVideos.length && ( // Show button only if there are more videos
            <div className="flex justify-center mt-6">
              <button
                onClick={handleMoreClick}
                className="bg-orange-500 text-white py-2 px-4 rounded-lg"
              >
                More
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default LatestVideos;
