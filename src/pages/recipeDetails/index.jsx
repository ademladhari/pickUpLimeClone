import React, { useState } from 'react';
import { FaClock, FaEnvelope, FaFacebookF, FaPinterestP, FaPrint } from 'react-icons/fa';
import AllergensComponent from '../../components/alergerant';
import AppSection from './components/appSections';
import IngredientsSection from './components/ingredients';
import FAQSection from './components/FaqSections';
import SuggestedRecipes from './components/SuggestedRecipes';
import DiscussionAndRating from './components/discussionSection';
import CommentSection from './components/CommentSection';
import Footer from '../../components/footer';

const CookieSection = () => {
  const [cookieCount, setCookieCount] = useState(14);
const    tags= ['Main', 'Soup', '10 ingredients or less',]
const time= '35 min'

  const increaseCount = () => setCookieCount(cookieCount + 1);
  const decreaseCount = () => setCookieCount(cookieCount > 1 ? cookieCount - 1 : 1);

  return (
    <>
<div className="flex flex-col cotrisFont lg:flex-row items-center justify-center p-8 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-8 w-full h-screen mx-auto mt-[10vh]">
{/* Left Section - Image */}
<div   className='relative'  style={{ width: '350px', height: '550px' }}>
<img
  src="https://cdn.pickuplimes.com/cache/03/b0/03b0f6d96f4147799043ba508ae5145a.jpg"
  alt="Chocolate Chip Cookies"
  className="rounded-md brightness-105 filter h-full contrast-125 "

/>
  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-20"></div> {/* Right Gradient */}
  
  </div>

      {/* Right Section - Content */}
      <div className="lg:w-1/2 text-center cotrisFont " style={{width:"30%",marginLeft:"5%",textAlign:"left"}}>
        {/* Title */}
        <h1 className="text-5xl w-[80%]  font-normal mb-4" style={{textAlign:"left"}}>
          The Best Chocolate Chip Cookies
        </h1>

        {/* Description */}
        <p className="text-xs leading-relaxed mb-2 ">
        My definition of the perfect chocolate chip cookie is one with a crispy outside, a chewy, soft center, and plenty of chocolate in every bite. This vegan cookie recipe delivers exactly that! After testing dozens of versions, we’ve perfected this eggless and dairy-free treat. It’s easy to make and gives you the best of both worlds: a satisfying crunch with a melt-in-your-mouth texture. Perfect for when you're craving something sweet, these cookies deliver bakery-quality results every time.        </p>

        {/* Labels */}
        <span className="inline-block bg-[#B04C35] rounded-md h-fit px-2 py-0.5 text-[0.5rem] font-semibold text-white mr-1 ">
            <FaClock className="inline-block mr-1" />
            {time}
          </span>
        {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#50684B] rounded-md px-2 h-fit py-0.5 text-[0.5rem] font-semibold text-white mr-1 mb-2 "
            >
              {tag}
            </span>
          ))}

        {/* Time and Serving */}
        <div className="flex justify-between items-center coltrisFont mb-6 space-x-4">
          <div className="text-center">
            <h3 className="text-sm font-normal">Cookies</h3>
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={decreaseCount}
                className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded"
              >
                -
              </button>
              <span className="px-3 py-1 bg-gray-100 text-xs rounded">{cookieCount}</span>
              <button
                onClick={increaseCount}
                className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div className="text-center ">
            <h3 className="text-sm font-normal">Total</h3>
            <p className="text-xs">1 hr + 40 min</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-normal">Prep</h3>
            <p className="text-xs">10 min</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-normal">Cook</h3>
            <p className="text-xs">30 min</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-normal">Cool</h3>
            <p className="text-xs">1 hr</p>
          </div>
        </div>

        {/* Allergens and Options */}
        <AllergensComponent></AllergensComponent>
   
      </div>
     
    </div>
       
  
    <AppSection></AppSection>
    <div className='h-fit'>
      
 
    <IngredientsSection></IngredientsSection>
    <div className="flex flex-col sticky self-start w-fit left-[15%] top-20 mr-6">
  <a href="#" className="text-gray-600 text-sm hover:text-gray-800 py-2">
    <FaFacebookF className="w-4 h-4" />
  </a>
  <a href="#" className="text-gray-600 text-sm hover:text-gray-800 py-2">
    <FaPinterestP className="w-4 h-4" />
  </a>
  <a href="#" className="text-gray-600 text-sm hover:text-gray-800 py-2">
    <FaEnvelope className="w-4 h-4" />
  </a>
  <a href="#" className="text-gray-600 text-sm hover:text-gray-800 py-2">
    <FaPrint className="w-4 h-4" />
  </a>
</div>
    <FAQSection></FAQSection>
    <SuggestedRecipes></SuggestedRecipes>
   < DiscussionAndRating></DiscussionAndRating>
   <CommentSection></CommentSection>
   </div>
   <Footer></Footer>
    </>
  );
};

export default CookieSection;
