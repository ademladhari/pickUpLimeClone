import React from 'react';
import { FaFacebookF, FaPinterestP, FaEnvelope } from 'react-icons/fa';

const FeaturedRecipe = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-auto w-[90%] cotrisFont    rounded-lg overflow-hidden">
      <div className="relative w-full my-16 lg:w-1/2">
      <p className='text-3xl'>Featured Recipe
      </p>
        <img
          src="https://cdn.pickuplimes.com/recipe_pictures/the_best_chocolate_chip_cookies_12_AsNh26O.jpg" // Replace with your image URL
          alt="Chocolate Chip Cookies"
          className=" mt-6 rounded-lg w-2/3 mx-auto lg:w-full object-cover"
        />
   
      </div>
      <div className="p-6 w-full my-auto lg:w-2/3">
  <h2 className="text-2xl font-bold mb-2">The Best Chocolate Chip Cookies</h2>
  <p className="text-gray-700 text-[1.2rem] italic mb-4">
    My definition of the perfect chocolate chip cookie is one with a crispy outside, a chewy, soft center, and plenty of chocolate in every bite. This vegan cookie recipe delivers exactly that! After testing dozens of versions, we’ve perfected this eggless and dairy-free treat. It’s easy to make and gives you the best of both worlds: a satisfying crunch with a melt-in-your-mouth texture. Perfect for when you're craving something sweet, these cookies deliver bakery-quality results every time.
  </p>
  <div className="flex  ">
    <button className="bg-[#B04C35] text-white px-2 py-1 rounded-xl mx-auto text-base transition duration-300">
      View
    </button>
  </div>
</div>

    </div>
  );
};

export default FeaturedRecipe;