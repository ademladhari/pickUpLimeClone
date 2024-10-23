import React from 'react';
import pic1 from "../assets/bgforapp.png";

function SecondSection() {
  return (
    <div 
      className='h-auto w-full bg-cover bg-center flex flex-col lg:flex-row justify-center items-center py-8 lg:py-16' 
      style={{ backgroundImage: `url(${pic1})` }}
    >
      {/* Image Section */}
      <img 
        src="https://www.pickuplimes.com/static/images/main_app.3a0686347592.webp" 
        alt="Pick Up Limes App" 
        className="w-3/4 sm:w-1/3 lg:w-1/4 h-auto object-contain mb-6 lg:mb-0 lg:mr-8"
      />

      {/* Text Section */}
      <div className=" text-white p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-cursive mb-4">
          Start your 7 day free trial!
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl mb-6">
          Plant-based nourishment made simple with the <span className="font-bold">Pick Up Limes app</span>.
        </p>
        <ul className="list-none space-y-2 md:space-y-3 lg:space-y-4">
          <li className="flex items-start justify-center lg:justify-start">
            <span className="text-green-400 mr-2">✔️</span> Over 1200 recipes
          </li>
          <li className="flex items-start justify-center lg:justify-start">
            <span className="text-green-400 mr-2">✔️</span> New recipes added every weekday
          </li>
          <li className="flex items-start justify-center lg:justify-start">
            <span className="text-green-400 mr-2">✔️</span> Step-by-step cook-along mode
          </li>
          <li className="flex items-start justify-center lg:justify-start">
            <span className="text-green-400 mr-2">✔️</span> Personalized nutrition & meal planner
          </li>
          <li className="flex items-start justify-center lg:justify-start">
            <span className="text-green-400 mr-2">✔️</span> Customized grocery shopping list
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SecondSection;
