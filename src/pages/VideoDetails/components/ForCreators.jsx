import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample images for kitchen staples
const kitchenStaples = [
  { image: 'https://cdn.pickuplimes.com/cache/56/e6/56e6e81018cf1eb9f8f7db7fc8456b86.jpg', label: 'Baking trays' },
  { image: 'https://cdn.pickuplimes.com/cache/5f/74/5f74ea20a44d5faf9306d062f2ad6f7c.jpg', label: 'Kitchen scale' },
  { image: 'https://cdn.pickuplimes.com/cache/92/a7/92a7a91b34439131327ebe0856c3c788.jpg', label: 'Cooling rack' },
  { image: 'https://cdn.pickuplimes.com/cache/71/8e/718ed79c5787c834c47a36d2767caf51.jpg', label: 'Gold measuring cups' },
  { image: 'https://cdn.pickuplimes.com/cache/51/60/5160bfaecaedb4422b797f3321f7100b.jpg', label: 'Large glass storage jar' },
  { image: 'https://cdn.pickuplimes.com/cache/56/e6/56e6e81018cf1eb9f8f7db7fc8456b86.jpg', label: 'Baking trays' },
  { image: 'https://cdn.pickuplimes.com/cache/5f/74/5f74ea20a44d5faf9306d062f2ad6f7c.jpg', label: 'Kitchen scale' },

  { image: 'https://cdn.pickuplimes.com/cache/71/8e/718ed79c5787c834c47a36d2767caf51.jpg', label: 'Gold measuring cups' },
  { image: 'https://cdn.pickuplimes.com/cache/51/60/5160bfaecaedb4422b797f3321f7100b.jpg', label: 'Large glass storage jar' },
  { image: 'https://cdn.pickuplimes.com/cache/92/a7/92a7a91b34439131327ebe0856c3c788.jpg', label: 'Cooling rack' },
];

const KitchenStaples = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, kitchenStaples.length - itemsPerPage) : prevIndex - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= kitchenStaples.length ? 0 : prevIndex + itemsPerPage));
  };

  return (
    <div className="mx-auto my-8">
      <h2 className="text-2xl font-thin text-left cotrisFont mb-6">Kitchen staples</h2>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {kitchenStaples.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.image} alt={item.label} className="w-16 h-16 rounded-lg object-fit mb-2" />
              <span className="text-center cotrisFont text-xs">{item.label}</span>
            </div>
          ))}
        </div>
        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xl outline-none border-none bg-transparent p-0 text-[#738E6E] ">
          <FaChevronLeft className="text-[#738E6E]" />
        </button>
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xl outline-none border-none bg-transparent p-0 ">
          <FaChevronRight className="text-[#738E6E]" />
        </button>
      </div>
    </div>
  );
};

export default KitchenStaples;