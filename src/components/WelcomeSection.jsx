import React from "react";
import welcomeImage from "../assets/welcome.png"; // Adjust the path according to your project structure

const WelcomeSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-10 px-4 bg-gradient-to-r from-[#f7e9e1] to-[#ffe1e1]">
      {/* Left Side - Image and Overlay */}
      <div className="flex flex-col items-end md:w-1/2 mb-6 md:mb-0">
  <h2 className="text-3xl font-bold text-gray-800 mb-2 text-right mr-[10%] lg:mr-[5%]">
    Welcome Friends!
  </h2>
  <img
    src={welcomeImage}
    alt="Welcome"
    className="rounded-lg w-fit shadow-lg"
  />
</div>


      {/* Right Side - Text Content */}
      <div className="w-full flex flex-col   md:w-1/2 md:pl-6">
      
        <h3 className="text-xl font-semibold mx-auto w-[50%] md:w-[100%]  text-gray-700 mb-4">
          We are Pick Up Limes!
        </h3>
        <p className="text-base text-gray-600 mb-6 mx-auto md:mx-0 w-full lg:w-[70%]">
          Our mission is to make a nourishing plant-based lifestyle accessible
          to everyone. We make videos, recipes, and nutrition articles to make
          you feel excited and supported in introducing more plant-based foods
          into your meals, snacks, desserts, and everything in between!
        </p>
        <a
          href="#learn-more"
          className="bg-orange-500 text-white w-fit mx-auto md:mx-0 py-2 px-4  rounded-lg"
        >
          Learn more
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;
