import React from 'react';
import { FaChevronLeft, FaChevronRight, FaEnvelope, FaFacebookF, FaPinterestP, FaPrint } from 'react-icons/fa';
import SuggestedRecipes from '../recipeDetails/components/SuggestedRecipes';
import RelatedContent from './components/relatedContent';
import DescriptionSection from './components/DescriptionSection';
import FeaturedRecipe from './components/FeatureReciper';
import KitchenStaples from './components/KitchenStaples';
import ForCreators from './components/ForCreators';
import Footer from '../../components/footer';

const Index = () => {
  const relatedContent = [
    { title: 'Take AMAZING Food Photos', subtitle: '5 tips', image: 'https://via.placeholder.com/150' },
    { title: 'Budget Meals Under €2 / $2', subtitle: 'vegan curries', image: 'https://via.placeholder.com/150' },
    { title: 'Cooking Skills I Wish I Learned Sooner', subtitle: '', image: 'https://via.placeholder.com/150' },
    { title: 'The Best Vegan ICED COFFEE Recipes', subtitle: '', image: 'https://via.placeholder.com/150' },
    { title: 'Vegan Snacks', subtitle: 'easy + healthy (meal prep)', image: 'https://via.placeholder.com/150' },
  ];

  return (
    
    <div className="relative h-screen">
        
      {/* Background Divided into Two Parts */}
      <div className="absolute inset-0 flex">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom,#E7F7E4  , white)`,
        }}
      ></div>
        <div
        className="absolute inset-0 w-1/2"
        style={{
          background: `linear-gradient(to bottom, #F9F0DB, white)`,
        }}
      ></div>
      </div>

      {/* Content Section */}
      <div className="relative w-[60%] mx-auto space-y-6 mt-[10vh] z-10">
        <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/hqd8i8eXDsQ?autoplay=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <RelatedContent />
        <div className="flex flex-col sticky self-start w-fit   top-20  mr-6">
          
  <a href="#" className="text-gray-600 text-base absolute right-9 top-1 hover:text-gray-800 py-2">
    <FaFacebookF className="w-4 h-4" />
  </a>
  <a href="#" className="text-gray-600 text-base absolute top-9 right-9 hover:text-gray-800 py-2">
    <FaPinterestP className="w-4 h-4" />
  </a>
  <a href="#" className="text-gray-600 text-base absolute top-16 right-9 hover:text-gray-800 py-2">
    <FaEnvelope className="w-4 h-4" />
  </a>
  <a href="#" className="text-gray-600 text-base absolute top-24 right-9 hover:text-gray-800 py-2">
    <FaPrint className="w-4 h-4" />
  </a>

</div>
        <DescriptionSection />

        <div className='h-screen w-screen left-[-35%] bg-[#F5F2F0]  -z-30  absolute '></div>
       
        <FeaturedRecipe>
        </FeaturedRecipe>
        <div className='pt-16'>
        <KitchenStaples ></KitchenStaples>
        </div>
        <ForCreators></ForCreators>
        <Footer></Footer>

      
      </div>
      
    </div>
  );
};

export default Index;
