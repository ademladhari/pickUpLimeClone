import React, { useEffect, useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic1 from "../assets/pic1.jpg";

const slideImages = [
  {
    url: pic1,
    caption: 'Recipes',
    text: ' A diverse selection of dishes.',
  },
  {
    url: 'https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x900_crop_center-center_82_line/Recipe-Cards-Hero.png',
    caption: 'Videos',
    text: ' A delicious meal awaits you.',
  },
  {
    url: 'https://www.allrecipes.com/thmb/Q84xeMgnOJPZAUOdNyrb9dbFZr4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/285625-ChefsSalad_MFS_006-2550ecee70ae46dbaec530a58314c99c.jpg',
    caption: 'Articles',
    text: ' Explore a wide range of information',
  },
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleChange = (newIndex) => {
    console.log(newIndex)
    setCurrentIndex(newIndex);
  };
  return (
    <div className="slide-container w-full relative cotrisFont mt-[10vh]">
      <Fade duration={2000} transitionDuration={700} indicators={true} arrows={false}  defaultIndex={0}   onChange={()=>handleChange} // Track the current slide index
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} className="w-full h-[700px]">
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={slideImage.url}
                alt={slideImage.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute z-20 bottom-16 left-0 m-4 p-[1%] bg-white bg-opacity-10 backdrop-blur-md  w-[30%] h-[25%]  rounded-lg shadow-lg">
      <span className="text-white text-[6vh] text-center font-semibold">
        {console.log(currentIndex)}
          {slideImage.caption}
        </span>
        <p className="text-white text-[4vh]">{slideImage.text}</p>
      </div>
          </div>
        ))}
      </Fade>
      {/* Glass Container */}
  
    </div>
  );
};

export default Index;
