import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa'; // For clock icon
import Pagination from './pagination';

const RecipeCard = ({ image, title, time, tags }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden mx-auto w-[90%]  bg-white">
      <div className="aspect-[2/3] w-[60%] mx-auto lg:w-full relative overflow-hidden rounded-xl">
      
      <img 
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 brightness-105 filter contrast-125" 
    src={image} 
    alt={title} 
  />
  <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-20"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-20"></div> 
  
  </div>

      <div className=" py-4  text-center lg:text-left cotrisFont  text-[3vh]">
        <div className=" text-lg mb-2">{title}</div>
        <div className="flex flex-wrap mt-2 mx-auto">
          {/* Time Tag */} 
          <span className="inline-block bg-[#B04C35] rounded-md h-fit px-2 py-0.5 text-[0.5rem] font-semibold text-white mr-1 ">
            <FaClock className="inline-block mr-1" />
            {time}
          </span>
          {/* Other Tags with Smaller Text */}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#50684B] rounded-md px-2 h-fit py-0.5 text-[0.5rem] font-semibold text-white mr-1 mb-1 "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecipeGallery = () => {
  const recipes = [
    {
      image: 'https://cdn.pickuplimes.com/cache/d2/dd/d2dd4979a18e411d085f372c86a71c17.jpg',
      title: 'Red Lentil & Spinach Soup',
      time: '35 min',
      tags: ['Main', 'Soup', '10 ingredients or less', 'One-bowl / one-pot', 'Freezer-friendly'],
    },
    {
      image: 'https://cdn.pickuplimes.com/cache/bb/cb/bbcb6ca7eb262b86fd807a44437aab83.jpg',
      title: 'Hummus Pasta Salad',
      time: '30 min',
      tags: ['Main', 'Salad'],
    },
    {
      image: 'https://cdn.pickuplimes.com/cache/21/56/2156252b4e085470faf91d186002c106.jpg',
      title: 'Roasted Bell Pepper Pesto Sandwich',
      time: '20 min',
      tags: ['Sandwich', 'Breakfast', '10 ingredients or less'],
    },
    {
      image: 'https://cdn.pickuplimes.com/cache/08/6f/086fbbe8bae020020135089efa557589.jpg',
      title: 'Lentil Harvest Bowl',
      time: '1 hr',
      tags: ['Main'],
    },
    {
      image: 'https://cdn.pickuplimes.com/cache/6e/74/6e74cb28093a4dd9d6be11156ecd7e2e.jpg',
      title: 'Another Dish',
      time: '45 min',
      tags: ['Main', 'Vegan'],
    },
    {
        image: 'https://cdn.pickuplimes.com/cache/d2/dd/d2dd4979a18e411d085f372c86a71c17.jpg',
        title: 'Red Lentil & Spinach Soup',
        time: '35 min',
        tags: ['Main', 'Soup', '10 ingredients or less', 'One-bowl / one-pot', 'Freezer-friendly'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/bb/cb/bbcb6ca7eb262b86fd807a44437aab83.jpg',
        title: 'Hummus Pasta Salad',
        time: '30 min',
        tags: ['Main', 'Salad'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/21/56/2156252b4e085470faf91d186002c106.jpg',
        title: 'Roasted Bell Pepper Pesto Sandwich',
        time: '20 min',
        tags: ['Sandwich', 'Breakfast', '10 ingredients or less'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/08/6f/086fbbe8bae020020135089efa557589.jpg',
        title: 'Lentil Harvest Bowl',
        time: '1 hr',
        tags: ['Main'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/6e/74/6e74cb28093a4dd9d6be11156ecd7e2e.jpg',
        title: 'Another Dish',
        time: '45 min',
        tags: ['Main', 'Vegan'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/d2/dd/d2dd4979a18e411d085f372c86a71c17.jpg',
        title: 'Red Lentil & Spinach Soup',
        time: '35 min',
        tags: ['Main', 'Soup', '10 ingredients or less', 'One-bowl / one-pot', 'Freezer-friendly'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/bb/cb/bbcb6ca7eb262b86fd807a44437aab83.jpg',
        title: 'Hummus Pasta Salad',
        time: '30 min',
        tags: ['Main', 'Salad'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/21/56/2156252b4e085470faf91d186002c106.jpg',
        title: 'Roasted Bell Pepper Pesto Sandwich',
        time: '20 min',
        tags: ['Sandwich', 'Breakfast', '10 ingredients or less'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/08/6f/086fbbe8bae020020135089efa557589.jpg',
        title: 'Lentil Harvest Bowl',
        time: '1 hr',
        tags: ['Main'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/6e/74/6e74cb28093a4dd9d6be11156ecd7e2e.jpg',
        title: 'Another Dish',
        time: '45 min',
        tags: ['Main', 'Vegan'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/d2/dd/d2dd4979a18e411d085f372c86a71c17.jpg',
        title: 'Red Lentil & Spinach Soup',
        time: '35 min',
        tags: ['Main', 'Soup', '10 ingredients or less', 'One-bowl / one-pot', 'Freezer-friendly'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/bb/cb/bbcb6ca7eb262b86fd807a44437aab83.jpg',
        title: 'Hummus Pasta Salad',
        time: '30 min',
        tags: ['Main', 'Salad'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/21/56/2156252b4e085470faf91d186002c106.jpg',
        title: 'Roasted Bell Pepper Pesto Sandwich',
        time: '20 min',
        tags: ['Sandwich', 'Breakfast', '10 ingredients or less'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/08/6f/086fbbe8bae020020135089efa557589.jpg',
        title: 'Lentil Harvest Bowl',
        time: '1 hr',
        tags: ['Main'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/6e/74/6e74cb28093a4dd9d6be11156ecd7e2e.jpg',
        title: 'Another Dish',
        time: '45 min',
        tags: ['Main', 'Vegan'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/d2/dd/d2dd4979a18e411d085f372c86a71c17.jpg',
        title: 'Red Lentil & Spinach Soup',
        time: '35 min',
        tags: ['Main', 'Soup', '10 ingredients or less', 'One-bowl / one-pot', 'Freezer-friendly'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/bb/cb/bbcb6ca7eb262b86fd807a44437aab83.jpg',
        title: 'Hummus Pasta Salad',
        time: '30 min',
        tags: ['Main', 'Salad'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/21/56/2156252b4e085470faf91d186002c106.jpg',
        title: 'Roasted Bell Pepper Pesto Sandwich',
        time: '20 min',
        tags: ['Sandwich', 'Breakfast', '10 ingredients or less'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/08/6f/086fbbe8bae020020135089efa557589.jpg',
        title: 'Lentil Harvest Bowl',
        time: '1 hr',
        tags: ['Main'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/6e/74/6e74cb28093a4dd9d6be11156ecd7e2e.jpg',
        title: 'Another Dish',
        time: '45 min',
        tags: ['Main', 'Vegan'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/d2/dd/d2dd4979a18e411d085f372c86a71c17.jpg',
        title: 'Red Lentil & Spinach Soup',
        time: '35 min',
        tags: ['Main', 'Soup', '10 ingredients or less', 'One-bowl / one-pot', 'Freezer-friendly'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/bb/cb/bbcb6ca7eb262b86fd807a44437aab83.jpg',
        title: 'Hummus Pasta Salad',
        time: '30 min',
        tags: ['Main', 'Salad'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/21/56/2156252b4e085470faf91d186002c106.jpg',
        title: 'Roasted Bell Pepper Pesto Sandwich',
        time: '20 min',
        tags: ['Sandwich', 'Breakfast', '10 ingredients or less'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/08/6f/086fbbe8bae020020135089efa557589.jpg',
        title: 'Lentil Harvest Bowl',
        time: '1 hr',
        tags: ['Main'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/6e/74/6e74cb28093a4dd9d6be11156ecd7e2e.jpg',
        title: 'Another Dish',
        time: '45 min',
        tags: ['Main', 'Vegan'],
      },

      {
        image: 'https://cdn.pickuplimes.com/cache/d2/dd/d2dd4979a18e411d085f372c86a71c17.jpg',
        title: 'Red Lentil & Spinach Soup',
        time: '35 min',
        tags: ['Main', 'Soup', '10 ingredients or less', 'One-bowl / one-pot', 'Freezer-friendly'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/bb/cb/bbcb6ca7eb262b86fd807a44437aab83.jpg',
        title: 'Hummus Pasta Salad',
        time: '30 min',
        tags: ['Main', 'Salad'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/21/56/2156252b4e085470faf91d186002c106.jpg',
        title: 'Roasted Bell Pepper Pesto Sandwich',
        time: '20 min',
        tags: ['Sandwich', 'Breakfast', '10 ingredients or less'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/08/6f/086fbbe8bae020020135089efa557589.jpg',
        title: 'Lentil Harvest Bowl',
        time: '1 hr',
        tags: ['Main'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/6e/74/6e74cb28093a4dd9d6be11156ecd7e2e.jpg',
        title: 'Another Dish',
        time: '45 min',
        tags: ['Main', 'Vegan'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/d2/dd/d2dd4979a18e411d085f372c86a71c17.jpg',
        title: 'Red Lentil & Spinach Soup',
        time: '35 min',
        tags: ['Main', 'Soup', '10 ingredients or less', 'One-bowl / one-pot', 'Freezer-friendly'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/bb/cb/bbcb6ca7eb262b86fd807a44437aab83.jpg',
        title: 'Hummus Pasta Salad',
        time: '30 min',
        tags: ['Main', 'Salad'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/21/56/2156252b4e085470faf91d186002c106.jpg',
        title: 'Roasted Bell Pepper Pesto Sandwich',
        time: '20 min',
        tags: ['Sandwich', 'Breakfast', '10 ingredients or less'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/08/6f/086fbbe8bae020020135089efa557589.jpg',
        title: 'Lentil Harvest Bowl',
        time: '1 hr',
        tags: ['Main'],
      },
      {
        image: 'https://cdn.pickuplimes.com/cache/6e/74/6e74cb28093a4dd9d6be11156ecd7e2e.jpg',
        title: 'Another Dish',
        time: '45 min',
        tags: ['Main', 'Vegan'],
      },

  ];

 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of recipes per page
  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  // Calculate the current recipes to display
  const indexOfLastRecipe = currentPage * itemsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mt-[4vh] mx-auto ">
        {currentRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </>
  );
};

export default RecipeGallery;
