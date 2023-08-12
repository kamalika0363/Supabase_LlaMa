"use client"
import React from 'react';
import Icon from '../public/Icon.svg';

const SideBar: React.FC = () => {
  // Replace this with your data from the database
  const icons = [
    { color: 'yellow-400', borderColor: 'purple-600', src: '/path/to/yellow-fish-icon.png', alt: 'Yellow Fish' },
    { color: 'blue-500', borderColor: 'purple-600', src: '/path/to/pink-fish-icon.png', alt: 'Pink Fish' },
    { color: 'beige', borderColor: 'purple-600', src: '/path/to/yellow-cat-icon.png', alt: 'Yellow Cat' },
    { color: 'purple-600', borderColor: 'yellow-400', src: '/path/to/green-frog-icon.png', alt: 'Green Frog' },
  ];

  return (
    <div className="bg-gradient-to-b from-[#262626] to-[#141414] p-6 rounded-xl flex flex-col items-center justify-center h-full w-32 border-2 border-[#292929]">
      {icons.map((icon) => (
        <button
          key={icon.alt}
          className={`bg-${icon.color} border-${icon.borderColor} border-2 rounded-full p-2 mb-4`}
        >
          <img src={icon.src} alt={icon.alt} width="36" height="36" />
        </button>
      ))}
      <button className="text-[#bd837f] py-2 rounded-lg mt-auto">
        Sign Out
      </button>
    </div>
  );
};

export default SideBar;
