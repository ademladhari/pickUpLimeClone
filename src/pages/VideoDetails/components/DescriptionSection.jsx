import React from 'react';

const RecipeHeader = () => {
  return (
    <div className="w-[80%] mx-auto cotrisFont my-8">
      <h1 className=" text-5xl font-light  leading-normal  mb-2">The BEST Bakery-Style Chocolate Chip Cookies</h1>
      <h2 className="text-2xl font-light mb-4">egg-free, dairy-free!</h2>
      <div className="flex  mb-4">
       
          <span className="inline-block bg-[#B04C35] rounded-md h-fit px-2 py-0.5  text-[0.5rem] font-semibold text-white mr-1">🕒  7 min</span>
     
        <span className="inline-block bg-[#50684B] rounded-md px-2 h-fit py-0.5 text-[0.5rem] font-semibold text-white mr-1 mb-1">Recipes</span>
        <span className="inline-block bg-[#50684B] rounded-md px-2 h-fit py-0.5 text-[0.5rem] font-semibold text-white mr-1 mb-1">do-it-yourself</span>
        <span className="inline-block bg-[#50684B] rounded-md px-2 h-fit py-0.5 text-[0.5rem] font-semibold text-white mr-1 mb-1">quick & easy</span>
      </div>
      <div className='flex flex-row'>
      <p className="text-xs text-gray-700 w-[80%] mb-4">
        This is the ultimate chocolate chip cookie recipe—crunchy on the outside, soft on the inside, and packed with rich, complex flavour. In this video, we’ll dive into the science behind the steps and ingredients, from browning the butter to balancing sugars, to ensure you get the perfect cookie every time. Tested and perfected, this recipe is sure to become your new go-to chocolate chunk cookie recipe.
      </p>
      <p className="text-gray-500 text-xs">10 Oct 2024</p>
      </div>
    </div>
  );
};

export default RecipeHeader;