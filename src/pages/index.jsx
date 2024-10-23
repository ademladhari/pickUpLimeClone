// src/pages/index.jsx
//import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import ImageSlider from "../components/imageSlider";
import LatestRecipes from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import GetFoodVideos from "../components/getFoodVideos";
import LatestVideos from "../components/latesVideos";
import WelcomeSection from "../components/WelcomeSection";
import LatestArticles from "../components/latestArticles";
import JoinCommunitySection from "../components/CommunitySection";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
const Index = () => {
  const latestRecipes = [
    {
      imageUrl: 'https://i.pinimg.com/originals/f1/4c/8d/f14c8da1e948561ef130fc3dc94a1fc3.jpg', // Replace with your image URLs
      title: 'Red Lentil & Spinach Soup',
    },
    {
      imageUrl: 'https://www.tacapes-tours.com/wp-content/uploads/2022/07/Leblebi-Tunisian-special.jpg',
      title: 'Hummus Pasta Salad',
    },
    {
      imageUrl: 'https://i.pinimg.com/originals/85/a8/a6/85a8a621f8e8f89e7fd222a8b4d42589.jpg',
      title: 'Roasted Bell Pepper Pesto ',
    },
    {
      imageUrl: 'https://www.willflyforfood.net/wp-content/uploads/2022/01/tunisian-food-chakchouka.jpg.webp',
      title: 'Lentil Harvest Bowl',
    },
    {
      imageUrl: 'https://i1.wp.com/nickipoststravelstuff.com/wp-content/uploads/2024/05/img_7644-1-1024x768.jpg?ssl=1',
      title: 'Red Lentil Bolognese Pasta',
    },
    {
      imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpqOulYTH0aj6xyT-iZC0XKxQVKNCQceSK-m-h3Vfo-2Vbp3mct7EYFQ2BGCuprBYN7ubr4tcO0Vl1SkSqcSmOUWOOeIiQc2WEKQG6qJL3gCRhtK7Odx5hePrDXfc1lppPdkZ_dwsJVxew/s1600/100.JPG',
      title: 'Dan Dan Noodles',
    },
    {
      imageUrl: 'https://olyfo.com/wp-content/uploads/2022/10/mlewi.png',
      title: 'Dan Dan Noodles',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/a1/5a/cc/a15acc2f1ed79aeb0d4f3ee8419b0a17.jpg',
      title: 'Dan Dan ',
    },
    {
      imageUrl: 'https://www.tasteatlas.com/Images/Dishes/c658b5d1dccc432e853f1c2daa329455.jpg',
      title: 'Dan Dan Noodles',
    },
    {
      imageUrl: 'https://nefero.com/uploads/media/posts/20220827101509.jpg',
      title: 'Dan Dan Noodles',
    },
    {
      imageUrl: 'https://images.deliveryhero.io/image/hungerstation/restaurant/android_cover_photo/f378160c7e9382aa3ef5a6cbc98fc87d.jpg?width=1440&quality=75',
      title: 'Dan Dan Noodles',
    },
    {
      imageUrl: 'https://nickipoststravelstuff.com/wp-content/uploads/2024/03/img_7951-1-1024x768.jpg',
      title: 'Dan Dan Noodles',
    },
    {
      imageUrl: 'https://lp-cms-production.imgix.net/features/2019/01/makroudh-tunisia-bebbc90ec851.jpg?auto=compress&fit=crop&format=auto&q=50&w=1200&h=800',
      title: 'Dan Dan Noodles',
    },
    {
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/5e558c8165fc4c78f502938d/1622041349421-XMB7UEKKAC2R3U0HEZ2D/PIC+2.jpg',
      title: 'Dan Dan Noodles',
    },
    {
      imageUrl: 'https://news-tunisia.tunisienumerique.com/wp-content/uploads/2020/04/91007469_3202431749823836_7258671880461090816_o-94-1280x720.jpg',
      title: 'Dan Dan Noodles',
    },
    
  ];
  const articles = [
    {
      imageUrl: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/article_1200_800/public/Original_16848_cuisine-tunisienne.jpg.webp?itok=zMTgAsHh',
      title: 'Tunisian Food: 8 Favourite Dishes to Discover',
      link: 'https://www.finedininglovers.com/article/tunisian-food-8-favourite-dishes-discover'
    },
    {
      imageUrl: 'https://www.mosaicnorthafrica.com/wp-content/uploads/2023/04/tunisian-couscous.jpeg',
      title: 'A Foodie’s Guide to Tunisian Cuisine',
      link: 'https://www.mosaicnorthafrica.com/foodies-guide-tunisian-cuisine/'
    },
    {
      imageUrl: 'https://carthagemagazine.com/wp-content/uploads/2021/12/Rouz-Jerbi.jpg',
      title: '7 Things You Didn’t Know about Tunisian Food',
      link: 'https://carthagemagazine.com/tunisian-food/'
    },
    {
      imageUrl: 'https://i.guim.co.uk/img/media/bbc78ecaa731c3b95c59473ac3afa71cfe37eb6a/0_66_6000_3600/master/6000.jpg?width=1300&dpr=1&s=none',
      title: 'a chef’s tour of Tunis',
      link: 'https://www.theguardian.com/travel/article/2024/jul/04/tunis-a-chefs-tour-tunisia-food'
    },
    {
      imageUrl: 'https://carthagemagazine.com/wp-content/uploads/2020/09/Tunisian-Pumpkin-Shakshuka-1170x1237.jpg',
      title: 'Tunisian Cuisine — Mentality, Spirit & Character',
      link: 'https://carthagemagazine.com/tunisian-cuisine/'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bol_de_Leblabi_de_Tunisie%2C_21_mars_2017.jpg/220px-Bol_de_Leblabi_de_Tunisie%2C_21_mars_2017.jpg',
      title: 'Tunisian cuisine',
      link: 'https://en.wikipedia.org/wiki/Tunisian_cuisine'
    },
    {
      imageUrl: ' https://blog.tui-blue.com/wp-content/uploads/gewu%CC%88rze-1-1024x768.jpg',
      title: 'Tunisian Cuisine – Wanderlust in the Saucepan',
      link: 'https://blog.tui-blue.com/en/tunisian-cuisine/'
    },
    {
      imageUrl: ' https://www.willflyforfood.net/wp-content/uploads/2022/01/tunisian-food-chakchouka-pinterest.jpg.webp',
      title: 'Tunisian Food: 15 Traditional Dishes to Look For in Tunis',
      link: 'https://www.willflyforfood.net/tunisian-food/'
    }
    ,{
      imageUrl: 'https://www.my-travelmonkey.com/wp-content/uploads/2019/10/IMG_0321-759x500.jpg',
      title: 'The Ultimate Guide To The Food of Tunisia',
      link: 'https://www.my-travelmonkey.com/food-of-tunisia/'
    }
    ,{
      imageUrl: 'https://lp-cms-production.imgix.net/features/2019/01/makroudh-tunisia-bebbc90ec851.jpg?w=1440&h=810&fit=crop&auto=format&q=75',
      title: 'Seven typical Tunisian dishes you must try',
      link: 'https://www.lonelyplanet.com/articles/7-typical-tunisian-dishes-you-must-try'
    }
    ,{
      imageUrl: 'https://th-thumbnailer.cdn-si-edu.com/6-u0Tr2-nd_9X21MqLLDCAPcS-w=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b8/0f/b80f8157-cab7-4604-b33f-8ece5cb663dc/istock_63746221_medium.jpg',
      title: '10 Tunisian Wines and Dishes You Should Know',
      link: 'https://www.smithsonianmag.com/sponsored/10-tunisian-wines-and-dishes-you-should-know-180960229/'
    }
  ];
 
  const latestVideos = [
    {
      videoUrl: 'https://www.youtube.com/watch?v=xViq5D0q158&ab_channel=SaharMZ', // Full YouTube link
      title: 'Tunisian Food Recipe 1',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=618QsMaVXp8&ab_channel=HomeCookingAdventure', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=-hgq_wr-mic&ab_channel=CarthageMagazine', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=1zwydwk7IIc&ab_channel=ByEya', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=4RCuo8as14E&ab_channel=Fadila%27sKitchen', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=AIo1EJYP9vE&ab_channel=Cuisineolfa%D8%A7%D9%84%D9%85%D8%B7%D8%A8%D8%AE%D8%A7%D9%84%D8%AA%D9%88%D9%86%D8%B3%D9%8A%D9%85%D8%B9%D8%A3%D9%84%D9%81%D8%A9', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=aWruSfM16aQ&ab_channel=CookingwithYasmine%D8%A7%D9%84%D8%B7%D8%A8%D8%AE%D9%85%D8%B9%D9%8A%D8%A7%D8%B3%D9%85%D9%8A%D9%86', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=o2dELRRNvkc&ab_channel=Fadila%27sKitchen', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },

    {
      videoUrl: 'https://www.youtube.com/watch?v=EEmONXNi5m8&ab_channel=MiddleEats', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=-fy1wcpYQ98&ab_channel=Benna3Benna%D8%A8%D9%86%D9%91%D8%A9%D8%B9%D8%A8%D9%86%D9%91%D8%A9', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=Ct4VJdxOt10&ab_channel=Sarahiscooking', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=hRLlWwciaLI&ab_channel=TunisianCuisineInEnglish', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },

    {
      videoUrl: 'https://www.youtube.com/watch?v=Q20g14br_lA&ab_channel=SaharMZ', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=YFfSfCGhDzw&ab_channel=RajaCraves-%D9%85%D8%B9%D8%B1%D8%AC%D8%A7%D8%A1%D8%A7%D8%B4%D9%87%D9%89', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },

    {
      videoUrl: 'https://www.youtube.com/watch?v=wsM8AAE3LKY&ab_channel=MySavoryTable', // Replace with another valid YouTube link
      title: 'Tunisian Food Recipe 2',
    },
    // Add more video objects...
  ];
  
  
  return (
    <div className="h-screen w-full ">
 <ImageSlider></ImageSlider>
<LatestRecipes  latestRecipes={latestRecipes} name="Latest Recipes"/>
<WelcomeSection></WelcomeSection>

<LatestVideos name="Latest videos" latestVideos={latestVideos}/>
<SecondSection></SecondSection>
<LatestArticles latestArticles={articles} name="Latest Articles" />
<JoinCommunitySection></JoinCommunitySection>
<Footer></Footer>

    </div>
    
  );
};

export default Index;
