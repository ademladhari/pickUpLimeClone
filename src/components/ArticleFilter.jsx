import { useState } from "react";
import CustomSelect from "./select";

const ArticleFilter = () => {
    const [recipeType, setRecipeType] = useState('');
    const [quickAndEasy, setQuickAndEasy] = useState('');
    const [timeToMake, setTimeToMake] = useState('');
    const [allergens, setAllergens] = useState('');
    const [excludeIngredients, setExcludeIngredients] = useState('');
    const [includeIngredients, setIncludeIngredients] = useState('');
    const [sort, setSort] = useState('');
  
    return (
      <div className="flex flex-col items-center cotrisFont mt-[30vh] mb-[5vh] w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 w-full md:w-[80%] mx-auto"> {/* Responsive grid */}
          
          {/* Recipe Type */}
          <CustomSelect
            label="Topics"
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
          <CustomSelect
            label="Printable Guide"
            value={quickAndEasy}
            onChange={(e) => setQuickAndEasy(e.target.value)}
            options={[
              { value: '', label: 'Nothing selected' },
              { value: 'quick', label: 'Quick' },
              { value: 'easy', label: 'Easy' },
            ]}
          />
  
          {/* Time to make */}
        
          {/* Allergens */}
          <CustomSelect
            label="Time to read"
            value={allergens}
            onChange={(e) => setAllergens(e.target.value)}
            options={[
              { value: '', label: 'Nothing selected' },
              { value: 'nuts', label: 'Nuts' },
              { value: 'gluten', label: 'Gluten' },
              { value: 'dairy', label: 'Dairy' },
            ]}
          />
  
          {/* Sort */}
          <CustomSelect
            label="Published since"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            options={[
              { value: '', label: '--------' },
              { value: 'rating', label: 'Rating' },
              { value: 'time', label: 'Time' },
            ]}
          />
             <CustomSelect
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
  
  export default ArticleFilter;