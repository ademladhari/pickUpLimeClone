import React from 'react';
import StarRating from './StarRating';

function RecipeSection() {
  return (
    <div className="relative flex mx-auto  w-[70%] p-8 rounded-lg cotrisFont">
      {/* Social Icons Section */}
      
      
      {/* Ingredients Section */}
      
      <div className="sticky top-4 flex flex-col w-[40%] text-gray-800 bg-[#F5F3ED] p-4 cotrisFont space-y-2">
        <div className='flex-col flex sticky top-9 self-start'>
        <h2 className="text-2xl font-normal">Ingredients</h2>
        <div>
          <h3 className="text-base font-medium mb-2">Chocolate chunk cookies</h3>
          <ul className="text-base">
            <li>½ cup (112 g) unsalted vegan butter†</li>
            <li>¾ cup (165 g) brown sugar, packed</li>
            <li>¼ cup (56 g) granulated sugar</li>
            <li>¼ cup (60 mL) unsweetened soy milk</li>
            <li>1 Tbsp (15 mL) pure vanilla extract</li>
            <li>2 cups (276 g) all-purpose flour</li>
            <li>1 tsp (5 g) baking powder</li>
            <li>½ tsp baking soda</li>
            <li>¼ tsp salt</li>
            <li>4.6 oz (130 g) dairy-free dark chocolate, chopped</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-normal" style={{ fontWeight: 400 }}>
            Optional topping
          </h3>
          <p className="text-base ml-3 mb-5">flaked sea salt</p>
        </div>

        {/* Get Ingredients Button */}
        <a
          href="#"
          className="bg-[#003D29] text-white px-4 py-2 text-base w-fit rounded-full mx-auto inline-block mt-4"
        >
          Get ingredients with Instacart
        </a>
      </div>
      </div>

      {/* Directions Section */}
      <div
        className="flex flex-col w-[55%] text-gray-800 space-y-4 pl-12"
        style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}
      >
        <h2 className="text-xl font-medium cotrisFont">Directions</h2>
        <ol className="text-base space-y-2 list-decimal list-inside w-[90%]">
          <li>
            Add the butter to a saucepan over medium-high heat*. Let it melt
            while stirring continuously.
          </li>
          <li>
            When melted, it will start to brown and become fragrant; keep
            stirring. Some foam will start to form, and this is normal.
          </li>
          <li>
            Then, you will see grainy solids form at the bottom of the pan. The
            butter is now golden brown and smells nutty. Take it off the heat
            and let cool slightly.
          </li>
          <li>
            In a large bowl, mix together the cooled brown butter, sugars, milk,
            and vanilla extract.
          </li>
          <li>
            Place a sieve over the bowl and add the flour, baking powder, baking
            soda, and salt. Mix until partly combined.
          </li>
          <li>
            Gently fold in the chocolate chunks until just combined, then place
            in the fridge for 1 hour**.
          </li>
          <li>
            When ready to bake, line two baking trays and preheat the oven to
            350°F (180°C)***.
          </li>
          <li>
            Use a 2 Tbsp ice cream scoop to place the dough onto the prepared
            tray. Leave 2 inches (5 cm) of space between each cookie.
          </li>
          <li>
            Optionally, add some more chocolate chunks to the top of each cookie
            for a bakery-style look.
          </li>
          <li>
            Bake one sheet at a time on the middle rack of the oven for 12 - 14
            minutes, or until golden.
          </li>
          <li>
            Let cool on the baking tray a little before transferring it to a
            cooling rack to cool off some more. The cookies will set as they
            cool. Enjoy!
          </li>
        </ol>

        {/* Notes Section */}
        <h3 className="text-lg font-semibold crimsonFont">Notes</h3>
        <ul className="text-base list-disc list-inside w-[90%]">
          <li>† We used the Violife brand.</li>
          <li>
            * Note: The ability to brown vegan butter depends on the brand, as
            those with more water may not brown easily. To get a golden, nutty
            result, choose a butter with higher fat content. If it doesn’t
            brown, you can still use it, but the flavor will be slightly
            different. Alternatively, skip the browning step and cream
            room-temperature butter directly into the sugar.
          </li>
          <li>
            ** Refrigerating the batter before baking helps to firm it up,
            prevents excessive spreading, and enhances the texture of the final
            cookies.
          </li>
          <li>*** We used top and bottom heating (not fan-assisted/convection).</li>
        </ul>

        {/* Storage Section */}
        <h3 className="text-lg font-semibold crimsonFont">Storage</h3>
        <ul className="text-base list-disc list-inside w-[90%]">
          <li>
            For the best taste and texture, enjoy these cookies within the first
            2 - 3 days after baking. Store them in an airtight container at room
            temperature, where they will keep for up to 5 days.
          </li>
          <li>
            To freeze baked cookies, wrap them well and store them in the
            freezer for up to 2 months.
          </li>
          <li>
            For freezing cookie dough, place the dough balls on a lined plate or
            tray in the freezer. Once fully frozen, transfer them to an airtight
            container or sealed bag. Bake from frozen at 14 - 16 minutes without
            thawing.
          </li>
        </ul>
        <div className="flex flex-col items-center space-y-4 mt-8">
      {/* Print Button */}
      <button className="bg-[#607052] text-white px-3 py-1.5 rounded-md text-base">
        Print
      </button>

      {/* Feedback Text */}
      <p className="text-xl italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
        Let us know what you think
      </p>

      {/* Star Rating */}
  <StarRating size={"w-6 h-6 "}></StarRating>
    </div>
      </div>
    </div>
  );
}

export default RecipeSection;
