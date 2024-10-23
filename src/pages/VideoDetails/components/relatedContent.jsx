import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import React Icons

const relatedContent = [
    { title: 'Take AMAZING Food Photos', subtitle: '5 tips', image: 'https://img.youtube.com/vi/CPbKkb1hn7I/maxresdefault.jpg' },
    { title: 'Budget Meals Under €2 / $2', subtitle: 'vegan curries', image: 'https://img.youtube.com/vi/_ME1dEXcT_I/maxresdefault.jpg' },
    { title: 'Cooking Skills I Wish I Learned Sooner', subtitle: '', image: 'https://img.youtube.com/vi/hcOycPWR7is/maxresdefault.jpg' },
    { title: 'The Best Vegan ICED COFFEE Recipes', subtitle: '', image: 'https://img.youtube.com/vi/S1OJ3U2T4PY/maxresdefault.jpg' },
    { title: 'Vegan Snacks', subtitle: 'easy + healthy (meal prep)', image: 'https://img.youtube.com/vi/0e3M5Jyh6Z8/maxresdefault.jpg' },
  ];

const RelatedContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 5;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(relatedContent.length / imagesPerPage) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= Math.ceil(relatedContent.length / imagesPerPage) - 1 ? 0 : prevIndex + 1
    );
  };

  const startIndex = currentIndex * imagesPerPage;
  const displayedImages = relatedContent.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div className="flex flex-col relative cotrisFont  w-full">
      
      <div className="w-full relative flex items-center">
        <div className=" w-full mx-auto grid grid-cols-5  gap-3 overflow-hidden">
          {displayedImages.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
             <a href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank" rel="noopener noreferrer">
  <img src={item.image} alt={item.title}                 className="lg:h-32 h-24  rounded-xl object-cover" />
</a>
              <p className="text-left mt-2 text-xs  font-medium">{item.title}</p>
              {item.subtitle && <p className="text-left  text-[0.6rem]  text-gray-600">{item.subtitle}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center relative justify-between mt-4  lg:w-[100%] mx-auto">
        <button onClick={handlePrev} className="text-xl outline-none border-none bg-transparent p-0 text-[#738E6E]">
          <FaChevronLeft />
        </button>
        <div className='inline-flex'>
          {Array.from({ length: Math.ceil(relatedContent.length / imagesPerPage) }).map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1 h-1 max-w-[50px] rounded-full mx-1 cursor-pointer ${currentIndex === index ? 'bg-green-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button onClick={handleNext} className="text-xl outline-none border-none bg-transparent p-0 text-[#738E6E]">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RelatedContent;