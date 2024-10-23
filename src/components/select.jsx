import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const CustomSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center w-[70%] ">
      <label className="text-sm font-semibold mb-2">{label}</label>

      {/* Glass Effect Select Box */}
      <div
        className="flex items-center justify-between px-2 py-1 bg-[#EAEDE8] text-black border w-[100%] border-gray-300 rounded-md cursor-pointer backdrop-blur-lg shadow-lg text-xs opacity-80"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backdropFilter: 'blur(10px)', // Frosted glass effect
          WebkitBackdropFilter: 'blur(10px)', // For Safari
        }}
      >
        <span>{value ? options.find(option => option.value === value).label : 'Nothing selected'}</span>
        {/* Dropdown icon */}
        <FaChevronDown className={`w-2 h-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full  bg-[#EAEDE8] rounded-md shadow-lg backdrop-blur-lg opacity-80 z-10 text-xs">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 text-black cursor-pointer"
              onClick={() => handleSelect(option.value)}
              style={{
                backgroundColor: 'transparent', // Keeping background transparent for full glass effect
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
