import React, { useState } from 'react';
import { FaPlus, FaMinus, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

const faqs = [
  {
    question: "Why do you recommend using a mix of white and brown sugar?",
    answer:
      "We use a mix of white and brown sugar to get the best texture. White sugar helps the cookies crisp up, while brown sugar adds chewiness and a richer flavor. When we used only granulated sugar, the cookies were too crunchy, and with only brown sugar, they were too soft."
  },
  {
    question: "Do I have to brown the vegan butter?",
    answer:
      "Browning vegan butter enhances its flavor by adding a nutty  depth, but it's not essential. If you skip it, the flavor will be a bit lighter, but the cookies will still taste great."
  },
  {
    question: "Can I use coconut oil instead of vegan butter?",
    answer:
      "Yes, but the flavor will change slightly, and the texture might be a little softer. It's best to use solid coconut oil for a closer consistency to vegan butter."
  },
  {
    question: "Can I make vegan chocolate chip cookies gluten-free?",
    answer:
      "Yes, you can use a 1:1 gluten-free flour substitute. Make sure the flour blend includes xanthan gum to help with binding."
  },
  {
    question: "Can you freeze vegan chocolate chip cookie dough?",
    answer:
      "Yes, you can freeze the cookie dough balls and bake them later. Bake them directly from the freezer, adding a couple of extra minutes to the baking time."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 cotrisFont">
      <h2 className="text-2xl font-medium mb-6 text-gray-800">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 border-b border-[#daebd0]">
          <button
            className="w-full flex justify-between items-center bg-[#EAEDE8] py-3 px-4 text-left text-gray-700 font-normal text-md hover:bg-[#e5ece1] transition-all"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {openIndex === index ? (
          <FaMinusCircle  />
        ) : (
              <FaPlusCircle className="text-gray-500" />
            )}
          </button>
          {openIndex === index && (
            <div className="bg-[#EAEDE8] px-6 py-4 text-base text-gray-600">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
