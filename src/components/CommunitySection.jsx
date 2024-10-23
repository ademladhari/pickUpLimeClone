import React from 'react';
import jumpstartImage from '../assets/community.png'; // Adjust the path according to your project structure

const JoinCommunitySection = () => {
  return (
    <section className="py-10 px-4 bg-[#EAEDE8]">
      <div className="max-w-2xl mx-auto w-[90%] flex flex-col md:flex-row items-center bg-[#EAEDE8] p-6 rounded-lg ">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Join the Community!
          </h2>

          <img
            src={jumpstartImage}
            alt="Jumpstart Guide"
            className="rounded-lg "
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0 bg-[#EAEDE8]">
          <p className="text-lg text-gray-600 mb-4">
            Stay in the loop!
          </p>
          <p className="text-base text-gray-600 mb-6">
            Sign up for our Newsletter to stay up-to-date with everything Pick Up Limes. When you join, we will send the link to our plant-based jumpstart guide right to your inbox!
          </p>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email*"
              className="border border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="subscribe" className="mr-2" />
            <label htmlFor="subscribe" className="text-base text-gray-600">
              I agree to receive emails and may easily opt-out at any time.
            </label>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
