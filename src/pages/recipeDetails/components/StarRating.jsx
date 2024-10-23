import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating({size}) {
  const [hover, setHover] = useState(null); // For tracking the hover state
  const [rating, setRating] = useState(null); // For tracking the selected rating
 console.log(size)
  return (
    <div className="flex space-x-1">
      {Array(5).fill(0).map((_, index) => {
        const starValue = index + 1; // Set the star value (1 to 5)

        return (
          <FaStar
            key={index}
            className={`${size} cursor-pointer ${
              starValue <= (hover || rating) ? 'text-[#FFCC36]' : 'text-gray-400'
            }`}
            onMouseEnter={() => setHover(starValue)} // Set hover on mouse enter
            onMouseLeave={() => setHover(null)} // Remove hover on mouse leave
            onClick={() => setRating(starValue)} // Set the rating on click
          />
        );
      })}
    </div>
  );
}

export default StarRating;
