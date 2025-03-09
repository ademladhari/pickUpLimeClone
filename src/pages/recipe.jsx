import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import RecipeFilter from '../components/searchSelection';
import RecipeGallery from '../components/recipeGallery';
import Footer from '../components/footer';
const Home = (name) => {
  return (
    <div className=''>

      <div 
        className="relative h-[50vh] mt-[10vh] bg-cover bg-center"
        style={{ backgroundImage: "url(https://as2.ftcdn.net/v2/jpg/04/15/70/21/1000_F_415702125_O8QE0HiiF9IuTaZL9Rq7d80ufV0OlV5z.jpg)" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* 40% black overlay */}

        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          {/* Spacer to push the title down */}
          <div className="flex-grow"></div>

          {/* Title */}
          <h1 className="text-5xl text-white font-bold mb-4">Recipes</h1>

          {/* Spacer to push the search bar to the bottom */}
          <div className="flex-grow"></div>

          {/* Search Bar */}
          <div   style={{ border: '1.5px solid #50684B',  }}
 className="w-3/4 max-w-lg bg-white rounded-full text-md shadow-md px-4 translate-y-8   outline-black  mb-4">
            <div className="flex items-center">
              <input
                type="text"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
                placeholder="Search recipes"
              />
              <button className="text-gray-500 bg-white p-2 pr-0">
                <IoIosSearch />
              </button>
            </div>
          </div>
        </div>
      </div>

  <RecipeFilter></RecipeFilter>
  <RecipeGallery></RecipeGallery>
  <Footer></Footer>

    </div>
  );
};

export default Home;
