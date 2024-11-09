import React, { useState } from 'react';
import StarRating from './StarRating';

const DiscussionAndRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="max-w-3xl mx-auto p-6 cotrisFont ">
      <h1 className="text-4xl  font-light mb-6">Discussion & Rating</h1>
      
      <div className="space-y-4 text-base">
        <textarea
          className="w-full h-48 p-2 border  rounded-lg resize-none focus:outline-none ring-1 ring-[#50684B]"
          placeholder="Leave your comment here!"
        />
        
        <div className="flex justify-between space-x-4">
          <input
            type="text"
            className="flex-1 p-2 border border-green-700/30 rounded-lg focus:outline-none ring-1 ring-[#50684B]"
            placeholder="Name (shown with your comment)"
          />
          <input
            type="email"
            className="flex-1 p-2 border border-green-700/30 rounded-lg focus:outline-none ring-1 ring-[#50684B]"
            placeholder="Email (used only to notify you of replies)"
          />
        </div>
        <div className='flex justify-center'>
       <StarRating size={"h-4 w-4"}></StarRating>
       </div>
       <p className='text-center text-base' >Rate this post</p>
        <div className="text-center">
          <button className="px-3 py-1 bg-[#50684B] text-white text-base rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Submit ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscussionAndRating;