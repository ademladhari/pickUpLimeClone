import  { useState } from 'react';

const LatestRecipes = ({ latestRecipes, name }) => {
  const [visibleCount, setVisibleCount] = useState(5); // Start with 5 visible recipes

  const handleMoreClick = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 5, latestRecipes.length)); // Show next 5 or total available
  };

  return (
    <>
      {latestRecipes && (
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center w-[90%] mx-auto md:text-left mb-6">{name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-[90%] mx-auto gap-4">
            {latestRecipes.slice(0, visibleCount).map((recipe, index) => (
              <div key={index} className="max-w-xs flex flex-col justify-between w-full mx-auto mb-4">
                <a href={recipe.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <h3 className="mt-2 text-lg font-semibold text-center flex-grow">{recipe.title}</h3>
                </a>
              </div>
            ))}
          </div>
          {visibleCount < latestRecipes.length && ( // Show button only if there are more recipes
            <div className="flex justify-center mt-6">
              <button
                onClick={handleMoreClick}
                className="bg-orange-500 text-white py-2 px-4 rounded-lg"
              >
                More
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default LatestRecipes;