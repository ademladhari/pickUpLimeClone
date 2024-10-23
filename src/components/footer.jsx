import { useEffect, useState } from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaPinterest, FaTiktok, FaRss, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the buttons based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 0); // Visible when not at the top
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-50 py-16 w-full">
      <div className="container mx-auto flex justify-around items-center">
        {/* Social Icons */}
        <div className="flex space-x-8">
          <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-gray-600">
            <FaYoutube className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-600">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-600">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Pinterest" className="text-gray-400 hover:text-gray-600">
            <FaPinterest className="w-5 h-5" />
          </a>
          <a href="#" aria-label="TikTok" className="text-gray-400 hover:text-gray-600">
            <FaTiktok className="w-5 h-5" />
          </a>
          <a href="#" aria-label="RSS" className="text-gray-400 hover:text-gray-600">
            <FaRss className="w-5 h-5" />
          </a>
        </div>

        {/* Logo and Info */}
        <div className="text-center">
          <img
            src="https://www.pickuplimes.com/static/images/logo/pul_logo_small_flat_250_279.d0527deb1499.png"
            alt="PUL Logo"
            className="mx-auto w-16 h-auto mb-2"
          />
          <p className="text-xs text-gray-500">&copy; 2017 - 2024 pickuplimes.com</p>
          <p className="text-xs text-gray-500">kvk: 94392234</p>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6 cotrisFont text-lg">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Privacy
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Support
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Terms
          </a>
        </div>
      </div>

      {/* Floating Buttons */}
      {isVisible && (
        <div className="fixed bottom-6 left-6 flex flex-col space-y-4">
          <button
            onClick={scrollToTop}
            className="bg-red-400 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          >
            <FaArrowUp className="text-white w-4 h-4 absolute" />
          </button>
          <button className="bg-green-400 w-6 h-10 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xs">💬</span>
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
