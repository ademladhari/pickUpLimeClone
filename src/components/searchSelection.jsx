import { useState } from 'react';
import Select from './select';

const RecipeFilter = () => {
  // Example state management for selected options
  const [recipeType, setRecipeType] = useState('');
  const [quickAndEasy, setQuickAndEasy] = useState('');
  const [timeToMake, setTimeToMake] = useState('');
  const [allergens, setAllergens] = useState('');
  const [excludeIngredients, setExcludeIngredients] = useState('');
  const [includeIngredients, setIncludeIngredients] = useState('');
  const [sort, setSort] = useState('');

  return (
    <div className="flex flex-col items-center cotrisFont mt-[4vh]">
    <div className="grid grid-cols-3 gap-6 mb-8 w-[80%] mx-auto"> {/* Updated grid gap and width */}
      {/* Recipe Type */}
      <Select
        label="Recipe Type"
        value={recipeType}
        onChange={(e) => setRecipeType(e.target.value)}
        options={[
          { value: '', label: 'Nothing selected' },
          { value: 'breakfast', label: 'Breakfast' },
          { value: 'main', label: 'Main' },
          { value: 'snack', label: 'Snack' },
          { value: 'dessert', label: 'Dessert' },
        ]}
      />
  
      {/* Quick & Easy */}
      <Select
        label="Quick & Easy"
        value={quickAndEasy}
        onChange={(e) => setQuickAndEasy(e.target.value)}
        options={[
          { value: '', label: 'Nothing selected' },
          { value: 'quick', label: 'Quick' },
          { value: 'easy', label: 'Easy' },
        ]}
      />
  
      {/* Time to make */}
      <div className="flex flex-col  items-center w-[70%]">
        <label className="text-sm font-semibold mb-2">Time to Make</label>
        <input
          type="text"
          placeholder="-------"
          className="px-4 py-1 bg-gray-100 border w-[100%] text-xs rounded-md"
          value={timeToMake}
          onChange={(e) => setTimeToMake(e.target.value)}
        />
      </div>
  
      {/* Allergens */}
      <Select
        label="Allergens"
        value={allergens}
        onChange={(e) => setAllergens(e.target.value)}
        options={[
          { value: '', label: 'Nothing selected' },
          { value: 'nuts', label: 'Nuts' },
          { value: 'gluten', label: 'Gluten' },
          { value: 'dairy', label: 'Dairy' },
        ]}
      />
  
      {/* Exclude Ingredients */}
      <Select
        label="Exclude Ingredients"
        value={excludeIngredients}
        onChange={(e) => setExcludeIngredients(e.target.value)}
        options={[
          { value: '', label: 'Nothing selected' },
          { value: 'onion', label: 'Onion' },
          { value: 'garlic', label: 'Garlic' },
        ]}
      />
  
      {/* Include Ingredients */}
      <Select
        label="Include Ingredients"
        value={includeIngredients}
        onChange={(e) => setIncludeIngredients(e.target.value)}
        options={[
          { value: '', label: 'Nothing selected' },
          { value: 'chicken', label: 'Chicken' },
          { value: 'beef', label: 'Beef' },
        ]}
      />
  
      {/* Sort */}
      <Select
        label="Sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        options={[
          { value: '', label: '--------' },
          { value: 'rating', label: 'Rating' },
          { value: 'time', label: 'Time' },
        ]}
      />
    </div>
  
    {/* Submit and Reset Buttons */}
    <div className="flex space-x-2">
      <button className="px-3 py-1 bg-[#50684B] text-white text-xs rounded-md">Submit</button>
      <button className="px-3 py-1 bg-[#B04C35] text-white text-xs rounded-md">Reset</button>
    </div>
  </div>
  
  );
};

export default RecipeFilter;

