import React from 'react';

function Index() {
  return (
    <>
      {/* Background Section */}
      <div
        className=" bg-cover -z-20"
        style={{
          height: "calc(70vh - 10vh)",
          backgroundImage: "url(https://cdn.pickuplimes.com/cache/46/e1/46e1b79343d2acc200ad03609bc1326b.jpg)",
        }}
      />

      {/* Article Content */}
      <div className="w-[60%] text-[#212529]  mx-auto -mt-12 bg-white p-4 rounded-lg cotrisFont">
        {/* Article Header */}
        <h1 className="text-5xl   mb-6">How to Reduce Food Waste</h1>

        {/* Subheader Section */}
        <div className="flex items-start flex-col gap-4 mb-6">
          <div className="text-4xl  ">7 tips</div>
          <div className="flex ">
            <span className="inline-block bg-[#B04C35] rounded-sm h-fit px-2 py-0.5 text-[0.5rem] font-semibold text-white mr-1">
              📅 8 min
            </span>
            <span className="inline-block bg-[#50684B] rounded-sm px-2 h-fit py-0.5 text-[0.5rem] font-semibold text-white mr-1 mb-1 ">Health & wellness</span>
          </div>
        </div>

        {/* Intro Paragraph */}
        <div className='inline-flex'>
        <p className="text-base italic w-[75%] mb-4">
        Many of us have faced the frustration of buying ingredients with high hopes, only to watch them go to waste. In this article, we explore strategies to give our food a second chance, and 7 tips to help us reduce food waste like a pro.

        </p>

        {/* Date and Subtitle */}
        <div className="text-gray-500 text-base text-center mb-8">22 Apr 2024</div>
        </div>

        {/* Section Title */}
        <div className='w-[60%] mx-auto'>
        <h2 className="text-xl mt-3 mb-4">Food waste in brief</h2>

        {/* Main Content */}
        <p className="text-base leading-8">
          We've all been there – freshly stocked with delicious ingredients, only to 
          find them spoiling before we know it. It's disheartening, especially when it's 
          <span className="underline"> estimated </span> that one-third of the world's food for 
          humans goes to waste each year. Not only do we miss out on the nutritional 
          benefits these foods offer, but we're also watching our hard-earned dollars 
          disappear before our eyes. With savvy strategies at our disposal, though, 
          we can minimize waste and maximize the potential of our food.
        </p>
    <div className=" mx-auto  py-8">
      <h2 className="text-base font-semibold text-[#6A7E66] mb-4">The impact of reducing food waste on the environment</h2>
      
      <p className="text-base mb-4">
        Reducing food waste isn't just about saving money or getting the most out of our groceries – it's also about making a positive impact on the environment. While it's easy to feel like a small piece in the climate crisis, household waste is the largest contributor to food waste. If we work together to reduce our food waste over time, we can help lessen the demand for food production. It also reduces the amount of waste going to landfills, which contributes to methane production.
      </p>
      
      <div className="bg-orange-50 p-4 mb-6 rounded-lg">
        <p className="text-base italic">
          Methane is a gas that contributes to climate change and is produced when organic matter, like food waste, breaks down without oxygen. Food waste generates methane in landfills where it's often buried under layers of other waste.
        </p>
      </div>
      
      <h2 className="text-base font-semibold text-[#6A7E66] mb-4">The science behind spoilage</h2>
      
      <p className="text-base mb-4">
        When our food starts to look, feel, smell, or taste different from its fresh state, it's a sign of spoilage. A few factors are central to these changes:
      </p>
      
      <ul className="list-disc list-inside text-base space-y-2 ml-4">
        <li>
          <span className="font-semibold">Oxygen:</span> exposure to oxygen allows harmful bacteria to grow faster. A process called oxidation is a chemical reaction responsible for undesirable changes in the colour, flavour, and nutrition profile of foods.
        </li>
        <li>
          <span className="font-semibold">Temperature:</span>  light can trigger chemical reactions that lead to the breakdown of certain nutrients and negatively impact the colour and flavour of foods.
        </li>
        <li>
          <span className="font-semibold">Light:</span> warmer temperatures speed up the growth of bacteria and microorganisms, making food spoil faster.
        </li>
        <li>
          <span className="font-semibold">Moisture:</span>  excess moisture provides an ideal environment for mould and bacteria to grow, contributing to spoilage. Foods stored in damp conditions or with high moisture contents are particularly vulnerable to quick spoilage.
        </li>
      </ul>
    </div>
        </div>
        
        
      </div>
    </>
  );
}

export default Index;
