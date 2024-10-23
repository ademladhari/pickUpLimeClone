import  { useState, useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineMail } from 'react-icons/md';
import ivy from "../assets/ivyy.png";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show the navbar when scrolling up or when at the top
      if (currentScrollPos < lastScrollPos || currentScrollPos === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  const navbarStyle = {
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.5s ease',
  };

  return (
    <div
      className="h-[10%] w-full flex flex-row justify-around mx-auto top-0 z-30 fixed text-[2.5vh] cotrisFont bg-white/30 backdrop-blur-lg"
      style={navbarStyle}
    >
      <div className="flex flex-row my-auto gap-3 text-sm">
        <IoIosSearch className="my-auto" />
        <Link className='text-black' to="/recipe"><p>Recipes</p></Link>
        <Link className='text-black' to="/articles"><p>Articles</p></Link>
        <Link className='text-black' to="/videos"><p>Videos</p></Link>
      </div>

      <img className='left-0 absolute max-h-[20vh] lg:max-h-[30vh] xl:max-h-[40vh]' src={ivy} alt="decorative plant illustration left 2" />
      <img className='right-0 absolute  max-h-[20vh] lg:max-h-[30vh] xl:max-h-[40vh]' src={ivy} alt="decorative plant illustration left 2" />

     <Link className='h-[60%] my-auto' to=""><img className="  h-full" src="https://www.pickuplimes.com/static/images/logo/pul_logo_main_flat_987_247.9cf5ed7b1374.png" alt="logo" />
     </Link> 
      <div className="flex flex-row gap-3 my-auto  text-sm">
        <p>App</p>
        <Link className='text-black' to="/aboutus"><p>About</p></Link>
        <MdOutlineMail className="my-auto" />
      </div>
    </div>
  );
}

export default Navbar;
