import React from 'react';

function Index() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-8 mt-[10vh]">
      <div className="md:w-1/2 flex justify-end">
        <div className="w-[55%]">
          <img 
            src="https://img.freepik.com/free-vector/video-game-developer-concept-illustration_114360-5976.jpg" 
            alt="Couple in a plant-filled kitchen" 
            className="w-full h-[80vh] rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8 text-center md:text-left">
      <div className='w-[60%]'>
        <h1 className="text-4xl font-light mb-6">Oh hey there!</h1>
        <p className="text-xs mb-4">
        I am Adem Ladhari, the developer. I don't claim any credit for the design; my role was purely to replicate it to showcase my web development skills. I recreated this site from the Pick Up Limes website because I found it well-designed and interesting, and I wanted to use it as a learning experience.        </p>
        <a className="text-xs" href='https://www.pickuplimes.com/' target='blank'>
          and here is the actual site, feel free to support the creator 😊
        </a>
        
      </div>
      </div>
    </div>
  );
}

export default Index;