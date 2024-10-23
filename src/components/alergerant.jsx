import React from 'react';

const AllergensComponent = () => {
  return (
    <div className="flex justify-center h-24 space-x-4 cotrisFont">
      {/* Contains Section */}
      <div className="bg-[#F2EAE3] rounded-lg flex flex-col space-y-2 w-20 p-2">
        <span className="text-gray-700 text-xs text-left font-semibold">Contains</span>
        <div className="flex items-center flex-col justify-center rounded-full">
          <img
            src="https://www.pickuplimes.com/static/images/allergy_symbols/Gluten_icon_v01_200.e97ca7118e0d.png"
            alt="Gluten Icon"
            className="object-contain"
            style={{ width: '32px', height: '32px' }} // 32px = w-8
          />
          <p className="text-xs text-red-500">gluten</p>
        </div>
      </div>

      {/* Swap out Section (updated) */}
      <div className="bg-[#F2EAE3] rounded-lg flex flex-col space-y-2 w-20 p-2">
        <span className="text-gray-700 text-xs text-left font-semibold">Swap out</span>
        <div className="flex items-center flex-col justify-center rounded-full">
          <img
            src="https://www.pickuplimes.com/static/images/allergy_symbols/Soy_icon_v03_200.abfad0d53965.png"
            alt="Soy Icon"
            className="object-contain"
            style={{ width: '32px', height: '32px' }} // 32px = w-8
          />
          <p className="text-xs text-green-500">soy</p>
        </div>
      </div>

      {/* Free from Section (updated) */}
      <div className="bg-[#F2EAE3] rounded-lg flex flex-col space-y-2 w-40 p-2">
        <span className="text-gray-700 text-xs text-left font-semibold">Free from</span>
        <div className="flex flex-row gap-4  items-center">
          <div className="  rounded-full">
            <img
              src="https://www.pickuplimes.com/static/images/allergy_symbols/Peanut_icon_v02_200.b4c263b0de8e.png"
              alt="Peanut Icon"
              className="object-contain"
              style={{ width: '32px', height: '32px' }} // 32px = w-8
            />
                    <p className="text-xs text-gray-500">peanut</p>

          </div>
          <div className=" rounded-full">
            <img
              src="https://www.pickuplimes.com/static/images/allergy_symbols/Treenut_icon_v02_200.2d1a524a7944.png"
              alt="Tree Nut Icon"
              className="object-contain"
              style={{ width: '32px', height: '32px' }} // 32px = w-8
            />
                    <p className="text-xs text-gray-500">tree nut</p>

          </div>
          <div className=" rounded-full">
            <img
              src="https://www.pickuplimes.com/static/images/allergy_symbols/Sesame_icon_v01_200.6b6fe61f49f8.png"
              alt="Sesame Icon"
              className="object-contain"
              style={{ width: '32px', height: '32px' }} // 32px = w-8
            />
                    <p className="text-xs text-gray-500"> sesame</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AllergensComponent;
