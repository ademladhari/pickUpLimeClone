import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa'; // For clock icon
import Pagination from './pagination';
import { Link } from 'react-router-dom';

const ArticleCard = ({ image, title, time, tags,linkTo }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden mx-auto h-[100%] w-[95%] bg-white">
        <div className="w-[100%] mx-auto h-[150px]  lg:w-full relative overflow-hidden rounded-xl">
        <a
  className=''
  href={linkTo}
  target="_blank"
  rel="noopener noreferrer"
>
        <img
            className="absolute cursor-pointer inset-0 w-full object-cover h-full transition-transform duration-300 ease-in-out hover:scale-105 brightness-105 filter contrast-125"
            src={image}
            alt={title}
          />
    
          <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-20"></div> {/* Left Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-20"></div> {/* Right Gradient */}
          </a>
        </div>
  
        <div className="py-2 text-center lg:text-left cotrisFont text-[2vh]">
          <div className="text-lg mb-1">{title}</div>
          <div className="flex flex-wrap mt-1 mx-auto">
            {/* Time Tag */}
            <span className="inline-block bg-[#B04C35] rounded-md h-fit px-2 py-0.5 text-[0.5rem] font-semibold text-white mr-1">
              <FaClock className="inline-block mr-1" />
              {time}
            </span>
            {/* Other Tags */}
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-[#50684B] rounded-md px-2 h-fit py-0.5 text-[0.5rem] font-semibold text-white mr-1 mb-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

const ArticleGallery = ({linkTo}) => {
    const articles = [
        {
            id: 1,
            title: "The Rise of Modern Chefs",
            author: "Alice Gordon",
            publicationDate: "2023-06-10",
            tags: ["Chefs", "Culinary Arts", "Food Trends"],
            summary: "Exploring the journeys of renowned chefs shaping modern cuisine.",
            image: "https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8="
        },
        {
            id: 2,
            title: "Gourmet Food Trends of 2024",
            author: "Samuel Baker",
            publicationDate: "2024-01-15",
            tags: ["Gourmet", "Food Trends", "Culinary Arts"],
            summary: "A look at the gourmet food trends that are set to dominate 2024.",
            image: "https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=6DjpoYqgYVDLmtj3-q7H7wvoiwkVgzi1rn7a_XUZ_Ng="
        },
        {
            id: 3,
            title: "How Sustainable Cooking is Changing the Culinary World",
            author: "Laura King",
            publicationDate: "2023-09-05",
            tags: ["Sustainability", "Cooking", "Food"],
            summary: "A focus on chefs using sustainable practices to reinvent the dining experience.",
            image: "https://t4.ftcdn.net/jpg/03/57/91/11/360_F_357911175_lUNZj0iZx0B6UEj3JyJwhKnJQv1jT1i4.jpg"
        },
        {
            id: 4,
            title: "Street Food Revolution: From Simple to Gourmet",
            author: "David Wells",
            publicationDate: "2022-12-18",
            tags: ["Street Food", "Gourmet", "Food Culture"],
            summary: "How street food is transforming into gourmet dishes that attract food lovers worldwide.",
            image: "https://previews.123rf.com/images/lestertair/lestertair1311/lestertair131100136/23359506-chef-preparing-food-in-the-kitchen-at-the-restaurant.jpg"
        },
        {
            id: 5,
            title: "Inside the Kitchens of Michelin Star Restaurants",
            author: "Sophie Hernandez",
            publicationDate: "2021-08-25",
            tags: ["Michelin", "Fine Dining", "Chefs"],
            summary: "A behind-the-scenes look at what makes Michelin star kitchens so exceptional.",
            image: "https://img.freepik.com/premium-photo/chef-preparing-food-ai-generative-hd-8k-wallpaper-stock-photographic-image_871881-6055.jpg"
        },
        {
            id: 1,
            title: "The Rise of Modern Chefs",
            author: "Alice Gordon",
            publicationDate: "2023-06-10",
            tags: ["Chefs", "Culinary Arts", "Food Trends"],
            summary: "Exploring the journeys of renowned chefs shaping modern cuisine.",
            image: "https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8="
        },
        {
            id: 2,
            title: "Gourmet Food Trends of 2024",
            author: "Samuel Baker",
            publicationDate: "2024-01-15",
            tags: ["Gourmet", "Food Trends", "Culinary Arts"],
            summary: "A look at the gourmet food trends that are set to dominate 2024.",
            image: "https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=6DjpoYqgYVDLmtj3-q7H7wvoiwkVgzi1rn7a_XUZ_Ng="
        },
        {
            id: 3,
            title: "How Sustainable Cooking is Changing the Culinary World",
            author: "Laura King",
            publicationDate: "2023-09-05",
            tags: ["Sustainability", "Cooking", "Food"],
            summary: "A focus on chefs using sustainable practices to reinvent the dining experience.",
            image: "https://t4.ftcdn.net/jpg/03/57/91/11/360_F_357911175_lUNZj0iZx0B6UEj3JyJwhKnJQv1jT1i4.jpg"
        },
        {
            id: 4,
            title: "Street Food Revolution: From Simple to Gourmet",
            author: "David Wells",
            publicationDate: "2022-12-18",
            tags: ["Street Food", "Gourmet", "Food Culture"],
            summary: "How street food is transforming into gourmet dishes that attract food lovers worldwide.",
            image: "https://previews.123rf.com/images/lestertair/lestertair1311/lestertair131100136/23359506-chef-preparing-food-in-the-kitchen-at-the-restaurant.jpg"
        },
        {
            id: 5,
            title: "Inside the Kitchens of Michelin Star Restaurants",
            author: "Sophie Hernandez",
            publicationDate: "2021-08-25",
            tags: ["Michelin", "Fine Dining", "Chefs"],
            summary: "A behind-the-scenes look at what makes Michelin star kitchens so exceptional.",
            image: "https://img.freepik.com/premium-photo/chef-preparing-food-ai-generative-hd-8k-wallpaper-stock-photographic-image_871881-6055.jpg"
        },
        {
            id: 1,
            title: "The Rise of Modern Chefs",
            author: "Alice Gordon",
            publicationDate: "2023-06-10",
            tags: ["Chefs", "Culinary Arts", "Food Trends"],
            summary: "Exploring the journeys of renowned chefs shaping modern cuisine.",
            image: "https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8="
        },
        {
            id: 2,
            title: "Gourmet Food Trends of 2024",
            author: "Samuel Baker",
            publicationDate: "2024-01-15",
            tags: ["Gourmet", "Food Trends", "Culinary Arts"],
            summary: "A look at the gourmet food trends that are set to dominate 2024.",
            image: "https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=6DjpoYqgYVDLmtj3-q7H7wvoiwkVgzi1rn7a_XUZ_Ng="
        },
        {
            id: 3,
            title: "How Sustainable Cooking is Changing the Culinary World",
            author: "Laura King",
            publicationDate: "2023-09-05",
            tags: ["Sustainability", "Cooking", "Food"],
            summary: "A focus on chefs using sustainable practices to reinvent the dining experience.",
            image: "https://t4.ftcdn.net/jpg/03/57/91/11/360_F_357911175_lUNZj0iZx0B6UEj3JyJwhKnJQv1jT1i4.jpg"
        },
        {
            id: 4,
            title: "Street Food Revolution: From Simple to Gourmet",
            author: "David Wells",
            publicationDate: "2022-12-18",
            tags: ["Street Food", "Gourmet", "Food Culture"],
            summary: "How street food is transforming into gourmet dishes that attract food lovers worldwide.",
            image: "https://previews.123rf.com/images/lestertair/lestertair1311/lestertair131100136/23359506-chef-preparing-food-in-the-kitchen-at-the-restaurant.jpg"
        },
        {
            id: 5,
            title: "Inside the Kitchens of Michelin Star Restaurants",
            author: "Sophie Hernandez",
            publicationDate: "2021-08-25",
            tags: ["Michelin", "Fine Dining", "Chefs"],
            summary: "A behind-the-scenes look at what makes Michelin star kitchens so exceptional.",
            image: "https://img.freepik.com/premium-photo/chef-preparing-food-ai-generative-hd-8k-wallpaper-stock-photographic-image_871881-6055.jpg"
        },

        {
            id: 1,
            title: "The Rise of Modern Chefs",
            author: "Alice Gordon",
            publicationDate: "2023-06-10",
            tags: ["Chefs", "Culinary Arts", "Food Trends"],
            summary: "Exploring the journeys of renowned chefs shaping modern cuisine.",
            image: "https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8="
        },
        {
            id: 2,
            title: "Gourmet Food Trends of 2024",
            author: "Samuel Baker",
            publicationDate: "2024-01-15",
            tags: ["Gourmet", "Food Trends", "Culinary Arts"],
            summary: "A look at the gourmet food trends that are set to dominate 2024.",
            image: "https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=6DjpoYqgYVDLmtj3-q7H7wvoiwkVgzi1rn7a_XUZ_Ng="
        },
        {
            id: 3,
            title: "How Sustainable Cooking is Changing the Culinary World",
            author: "Laura King",
            publicationDate: "2023-09-05",
            tags: ["Sustainability", "Cooking", "Food"],
            summary: "A focus on chefs using sustainable practices to reinvent the dining experience.",
            image: "https://t4.ftcdn.net/jpg/03/57/91/11/360_F_357911175_lUNZj0iZx0B6UEj3JyJwhKnJQv1jT1i4.jpg"
        },
        {
            id: 4,
            title: "Street Food Revolution: From Simple to Gourmet",
            author: "David Wells",
            publicationDate: "2022-12-18",
            tags: ["Street Food", "Gourmet", "Food Culture"],
            summary: "How street food is transforming into gourmet dishes that attract food lovers worldwide.",
            image: "https://previews.123rf.com/images/lestertair/lestertair1311/lestertair131100136/23359506-chef-preparing-food-in-the-kitchen-at-the-restaurant.jpg"
        },
        {
            id: 5,
            title: "Inside the Kitchens of Michelin Star Restaurants",
            author: "Sophie Hernandez",
            publicationDate: "2021-08-25",
            tags: ["Michelin", "Fine Dining", "Chefs"],
            summary: "A behind-the-scenes look at what makes Michelin star kitchens so exceptional.",
            image: "https://img.freepik.com/premium-photo/chef-preparing-food-ai-generative-hd-8k-wallpaper-stock-photographic-image_871881-6055.jpg"
        },
        {
            id: 1,
            title: "The Rise of Modern Chefs",
            author: "Alice Gordon",
            publicationDate: "2023-06-10",
            tags: ["Chefs", "Culinary Arts", "Food Trends"],
            summary: "Exploring the journeys of renowned chefs shaping modern cuisine.",
            image: "https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8="
        },
        {
            id: 2,
            title: "Gourmet Food Trends of 2024",
            author: "Samuel Baker",
            publicationDate: "2024-01-15",
            tags: ["Gourmet", "Food Trends", "Culinary Arts"],
            summary: "A look at the gourmet food trends that are set to dominate 2024.",
            image: "https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=6DjpoYqgYVDLmtj3-q7H7wvoiwkVgzi1rn7a_XUZ_Ng="
        },
        {
            id: 3,
            title: "How Sustainable Cooking is Changing the Culinary World",
            author: "Laura King",
            publicationDate: "2023-09-05",
            tags: ["Sustainability", "Cooking", "Food"],
            summary: "A focus on chefs using sustainable practices to reinvent the dining experience.",
            image: "https://t4.ftcdn.net/jpg/03/57/91/11/360_F_357911175_lUNZj0iZx0B6UEj3JyJwhKnJQv1jT1i4.jpg"
        },
        {
            id: 4,
            title: "Street Food Revolution: From Simple to Gourmet",
            author: "David Wells",
            publicationDate: "2022-12-18",
            tags: ["Street Food", "Gourmet", "Food Culture"],
            summary: "How street food is transforming into gourmet dishes that attract food lovers worldwide.",
            image: "https://previews.123rf.com/images/lestertair/lestertair1311/lestertair131100136/23359506-chef-preparing-food-in-the-kitchen-at-the-restaurant.jpg"
        },
        {
            id: 5,
            title: "Inside the Kitchens of Michelin Star Restaurants",
            author: "Sophie Hernandez",
            publicationDate: "2021-08-25",
            tags: ["Michelin", "Fine Dining", "Chefs"],
            summary: "A behind-the-scenes look at what makes Michelin star kitchens so exceptional.",
            image: "https://img.freepik.com/premium-photo/chef-preparing-food-ai-generative-hd-8k-wallpaper-stock-photographic-image_871881-6055.jpg"
        },
        {
            id: 1,
            title: "The Rise of Modern Chefs",
            author: "Alice Gordon",
            publicationDate: "2023-06-10",
            tags: ["Chefs", "Culinary Arts", "Food Trends"],
            summary: "Exploring the journeys of renowned chefs shaping modern cuisine.",
            image: "https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8="
        },
        {
            id: 2,
            title: "Gourmet Food Trends of 2024",
            author: "Samuel Baker",
            publicationDate: "2024-01-15",
            tags: ["Gourmet", "Food Trends", "Culinary Arts"],
            summary: "A look at the gourmet food trends that are set to dominate 2024.",
            image: "https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=6DjpoYqgYVDLmtj3-q7H7wvoiwkVgzi1rn7a_XUZ_Ng="
        },
        {
            id: 3,
            title: "How Sustainable Cooking is Changing the Culinary World",
            author: "Laura King",
            publicationDate: "2023-09-05",
            tags: ["Sustainability", "Cooking", "Food"],
            summary: "A focus on chefs using sustainable practices to reinvent the dining experience.",
            image: "https://t4.ftcdn.net/jpg/03/57/91/11/360_F_357911175_lUNZj0iZx0B6UEj3JyJwhKnJQv1jT1i4.jpg"
        },
        {
            id: 4,
            title: "Street Food Revolution: From Simple to Gourmet",
            author: "David Wells",
            publicationDate: "2022-12-18",
            tags: ["Street Food", "Gourmet", "Food Culture"],
            summary: "How street food is transforming into gourmet dishes that attract food lovers worldwide.",
            image: "https://previews.123rf.com/images/lestertair/lestertair1311/lestertair131100136/23359506-chef-preparing-food-in-the-kitchen-at-the-restaurant.jpg"
        },
        {
            id: 5,
            title: "Inside the Kitchens of Michelin Star Restaurants",
            author: "Sophie Hernandez",
            publicationDate: "2021-08-25",
            tags: ["Michelin", "Fine Dining", "Chefs"],
            summary: "A behind-the-scenes look at what makes Michelin star kitchens so exceptional.",
            image: "https://img.freepik.com/premium-photo/chef-preparing-food-ai-generative-hd-8k-wallpaper-stock-photographic-image_871881-6055.jpg"
        },

        
    ];


 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of recipes per page
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Calculate the current recipes to display
  const indexOfLastRecipe = currentPage * itemsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
  const currentRecipes = articles.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] mt-[4vh]  mx-auto ">
        {currentRecipes.map((recipe, index) => (
          <ArticleCard key={index} {...recipe} linkTo={linkTo} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </>
  );
};

export default ArticleGallery;
