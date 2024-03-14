"use client"
import React, { useState } from 'react';

const FilterBlock = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Furniture');

  const handleClick = (filter:string) => setSelectedFilter(filter);

  const filterOptions = [
    'All Furniture',
    'Bedroom',
    'Living Room',
    'Home Office',
    'Dining Table',
    'More',
  ];

  return (
    <div className="mt-[80px] flex items-center gap-2 overflow-scroll whitespace-nowrap w-full">
      {filterOptions.map((filter) => (
        <button
          key={filter}
          className={`
            py-2 px-4 rounded-full
            ${selectedFilter === filter ? 'bg-black text-white active' : 'bg-gray-300'}
          `}
          onClick={() => handleClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBlock;
