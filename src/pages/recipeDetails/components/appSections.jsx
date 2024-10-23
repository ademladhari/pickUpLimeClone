import React from 'react';
import ivy from "../../../assets/ivyy.png";

function AppSection() {
  return (
    <div className='h-fit relative w-[59%] bg-[#E8EDD5] mx-auto cotrisFont container'>
      {/* Decorative Ivy Images */}
      <img className='right-0 absolute max-h-[20vh] w-[4vw]' src={ivy} alt="decorative plant illustration right" />
      <img className='left-0 absolute max-h-[20vh] w-[4vw]' src={ivy} alt="decorative plant illustration left" />

      {/* Content Flexbox */}
      <div className='flex items-center justify-around'>
        {/* Left Section - Text & Buttons */}
        <div className="flex flex-col items-center justify-center py-4">
          {/* Title */}
          <h1 className="text-xs sm:text-xl font-light text-gray-800 mb-1 sm:mb-2">
            Start your health journey today
          </h1>
          <p className="text-xs sm:text-md text-gray-600 mb-3 sm:mb-4">
            and claim your 7 day free trial!
          </p>

          {/* Buttons and QR Code */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Google Play */}
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-12 sm:w-16"
              />
            </a>

            {/* App Store */}
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="w-12 sm:w-16"
              />
            </a>

            {/* QR Code */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YourAppLinkHere"
              alt="QR Code"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
        </div>

        {/* Right Section - Image */}
        <img className='h-24 w-24 sm:h-40 sm:w-40' src={"https://www.pickuplimes.com/static/images/app_download_banner/sadia_with_phone_v2.1a6e09cbc0ad.webp"} alt="Sadia with phone" />
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-10"></div> {/* Right Gradient */}

      </div>
    </div>
  );
}

export default AppSection;
