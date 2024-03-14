"use client"
import React, { useState } from 'react';
import { ChevronDown, Menu, ShoppingBag, Search } from 'react-feather';

const NavigationBarComponent = () => {
    const [activeNavItem, setActiveNavItem] = useState(0);

    const handleNavItemClick = (index: number) => {
        setActiveNavItem(index === activeNavItem ? 0 : index);
    };

    const renderNavItem = (text: string, index: number) => (
        <div
            key={index}
            className={`flex justify-between w-[130px]  items-center ${index === activeNavItem ? 'border-b-2 border-[#C900C1]' : ''
                }`}
            onClick={() => handleNavItemClick(index)}
        >
            <span className='mx-[2px] py-[11px] font-bold text-[16px] break-keep'>{text}</span>
            <ChevronDown size={24} color={index === activeNavItem ? '#C900C1' : undefined} className='cursor-pointer' />
        </div>
    );

    return (
        <>
            <div className='md:flex justify-between  items-center mt-12 h-[64px] mb-[96px] xl:px-[120px] w-full hidden'>
                <img src='/fabricaLogo.png' alt='Website Logo' className='block mr-2' />
                <div className='flex justify-between gap-2 h-[40px] '>
                    <div className='flex gap-2 lg:gap-4 lg:mr-20 w-full'>
                        {['Shop Now', 'Furniture', 'Living Room', 'About Us', 'Contact Us'].map(
                            (text, index) => renderNavItem(text, index)
                        )}
                    </div>
                    <div className='flex items-center justify-center gap-2 mx-2 '>
                        <button className=' h-[40px] w-[84px] text-white     text-[14px] rounded-full bg-[#D020C9]'>Log in</button>
                        <button className=' h-[40px] w-[98px] text-[#D020C9] text-[14px] rounded-full border-[#C900C1] border-2'>
                            Get started
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex md:hidden justify-between items-center h-[64px] mb-[52px] px-[12px] w-full'>
                <Menu/>
                <div className='flex gap-4'>
                    <ShoppingBag/>
                    <Search/>
                </div>
            </div>
        </>
    );
};

export default NavigationBarComponent;
