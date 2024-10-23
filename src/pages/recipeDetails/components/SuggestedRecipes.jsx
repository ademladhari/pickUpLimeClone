import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import React Icons
import pic1 from '../../../assets/pic1.jpg'; // Example image

const slideImages = [
  { url: pic1, caption: 'Peanut Butter & Jelly Mug Cake' },
  { url: "https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x900_crop_center-center_82_line/Recipe-Cards-Hero.png", caption: 'Fluffy Vegan Pancakes' },
  { url: "https://www.allrecipes.com/thmb/Q84xeMgnOJPZAUOdNyrb9dbFZr4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/285625-ChefsSalad_MFS_006-2550ecee70ae46dbaec530a58314c99c.jpg", caption: 'Ooey-Gooey Cinnamon Buns' },
  { url: "https://your-image-url.com/image4.jpg", caption: 'One-Bowl Chocolate Banana Bread' },
  { url: pic1, caption: 'Peanut Butter & Jelly Mug Cake' },
  { url: "https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x900_crop_center-center_82_line/Recipe-Cards-Hero.png", caption: 'Fluffy Vegan Pancakes' },

  { url: "https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x900_crop_center-center_82_line/Recipe-Cards-Hero.png", caption: 'Fluffy Vegan Pancakes' },


  { url: "https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x900_crop_center-center_82_line/Recipe-Cards-Hero.png", caption: 'Fluffy Vegan Pancakes' },

  { url: "https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x900_crop_center-center_82_line/Recipe-Cards-Hero.png", caption: 'Fluffy Vegan Pancakes' },

  { url: "https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x900_crop_center-center_82_line/Recipe-Cards-Hero.png", caption: 'Fluffy Vegan Pancakes' },



];

const SuggestedRecipes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(slideImages.length / imagesPerPage) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= Math.ceil(slideImages.length / imagesPerPage) - 1 ? 0 : prevIndex + 1
    );
  };

  const startIndex = currentIndex * imagesPerPage;
  const displayedImages = slideImages.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div className="flex flex-col  relative w-full">
      <h2 className="text-2xl w-[80%] lg:w-[60%] mx-auto text-left font-semibold mb-6 cotrisFont">Suggested recipes</h2>
      <div className="w-full relative flex items-center">
        <div className="w-[80%] lg:w-[60%] mx-auto  grid grid-cols-4 gap-3  overflow-hidden">
          {displayedImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden   shadow-lg">
              <img
                src={image.url}
                alt={image.caption}
                className=" h-64 rounded-xl  object-cover"
              />
              <p className="text-center mt-2 font-medium">{image.caption}</p>
            </div>
          ))}
        </div>

        {/* Arrows at the bottom */}
        
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center relative justify-between mt-4 w-[80%] lg:w-[60%] mx-auto">
      <button onClick={handlePrev} className="text-xl outline-none border-none bg-transparent p-0 text-[#738E6E]  ">
            <FaChevronLeft />
          </button>
          <div className='inline-flex'>
        {Array.from({ length: Math.ceil(slideImages.length / imagesPerPage) }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1 h-1 max-w-[50px] rounded-full mx-1 cursor-pointer ${currentIndex === index ? 'bg-green-600' : 'bg-gray-300'}`}
          />
        ))}
        </div>
        <div className="     space-x-6">
       
          <button  onClick={handleNext} className="text-xl outline-none border-none bg-transparent p-0 text-[#738E6E]    ">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestedRecipes;
