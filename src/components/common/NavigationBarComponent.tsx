"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';

const NavigationBarComponent = () => {
    const [activeNavItem, setActiveNavItem] = useState(0);

    const handleNavItemClick = (index: number) => {
        setActiveNavItem(index === activeNavItem ? 0 : index);
    };

    const renderNavItem = (text: string, index: number) => (
        <div
            key={index}
            className={`flex items-center ${index === activeNavItem ? 'border-b-2 border-[#C900C1]' : ''
                }`}
            onClick={() => handleNavItemClick(index)}
        >
            <span className='mx-[8px] py-[11px] font-bold text-[16px]'>{text}</span>
            <ChevronDown size={24} color={index === activeNavItem ? '#C900C1' : undefined} className='cursor-pointer'/>
        </div>
    );

    return (
        <div className='flex justify-between items-center h-[64px] mb-[96px] px-[120px] w-full'>
            <img src='/fabricaLogo.png' alt='Website Logo' className='block' />
            <div className='flex gap-2 h-[40px]'>
                <div className='flex gap-4 mr-20'>
                    {['Shop Now', 'Home Furniture', 'Living Room', 'About Us', 'Contact Us'].map(
                        (text, index) => renderNavItem(text, index)
                    )}
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <button className='py-2 px-5 text-white rounded-full bg-[#D020C9]'>Log in</button>
                    <button className='py-2 px-2 text-[#D020C9] text-[16px] rounded-full border-[#C900C1] border-2'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBarComponent;
