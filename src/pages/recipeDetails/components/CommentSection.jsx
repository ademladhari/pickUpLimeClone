import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="flex text-yellow-400 ml-[10%]  text-xs">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

const Comment = ({ author, date, rating, content }) => {
  return (
    <div className="mb-6 pb-6 border-b-2 border-gray-200">
      <div className="flex items-center  mb-2">
        <div className="flex items-center">
          <span className="text-[#50684B] font-medium mr-2 text-sm">{author}</span>
          <span className="text-gray-500 text-xs">- {date}</span>
        </div>
        <StarRating  rating={rating} />
      </div>
      <p className="text-gray-700 mb-3 text-sm">{content}</p>
      <button className="bg-[#B85C38] text-white px-2 py-0.5 rounded text-xs hover:bg-[#9d4e30] transition-colors duration-300">
        Reply ↗
      </button>
    </div>
  );
};

const CommentSection = () => {
  const comments = [
    {
      author: "Georgiana Silvana Gligor",
      date: "Oct. 14, 2024, 8:51 p.m.",
      rating: 5,
      content: "I like the combo of lentils, tomatoes and roasted peppers. Super idea for dinner with pantry staples."
    },
    {
      author: "Beatrice Valentini",
      date: "Oct. 11, 2024, 8:01 a.m.",
      rating: 5,
      content: "One of my favorite meals of the meal prep meal"
    },
    {
      author: "Stéphanie Le Jamtel",
      date: "Oct. 7, 2024, 11:50 a.m.",
      rating: 5,
      content: "Delicious & easy !"
    }
  ];

  return (
    <div className="max-w-[80%] lg:max-w-[60%] mx-auto p-6 cotrisFont">
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentSection;