import React from 'react';

// Sample images for kitchen staples
const kitchenStaples = [
  { image: 'https://cdn.pickuplimes.com/cache/56/e6/56e6e81018cf1eb9f8f7db7fc8456b86.jpg', label: 'Baking trays' },
  { image: 'https://cdn.pickuplimes.com/cache/5f/74/5f74ea20a44d5faf9306d062f2ad6f7c.jpg', label: 'Kitchen scale' },
  { image: 'https://cdn.pickuplimes.com/cache/92/a7/92a7a91b34439131327ebe0856c3c788.jpg', label: 'Cooling rack' },
  { image: 'https://cdn.pickuplimes.com/cache/71/8e/718ed79c5787c834c47a36d2767caf51.jpg', label: 'Gold measuring cups' },
  { image: 'https://cdn.pickuplimes.com/cache/51/60/5160bfaecaedb4422b797f3321f7100b.jpg', label: 'Large glass storage jar' },
];

const KitchenStaples = () => {
  return (
    <div className=" mx-auto my-8">
      <h2 className="text-2xl font-thin text-left cotrisFont mb-6">Kitchen staples</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {kitchenStaples.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.image} alt={item.label} className="w-16 h-16 rounded-lg object-fit mb-2" />
            <span className="text-center cotrisFont text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KitchenStaples;