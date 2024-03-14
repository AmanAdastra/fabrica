import React from 'react'
import FilterBlock from './FilterBlock'

const FilterSlide = () => {
    return (
        <div className='mt-[140px] xl:mx-[120px] mx-[30px] text-center lg:text-left '>
            <div className='relative inline-block mx-auto'>
                <p className={'text-[36px] lg:text-[56px] justify-center font-bold w-full'}>Stylish Collection of Furniture</p>
                <img src='/curve_2.png' className='absolute h-20 w-20 lg:w-32 -top-[4rem] right-0  lg:-top-[3rem] lg:left-[690px] ' />
            </div>
            <p className='mt-[24px]  text-center lg:text-left text-[#6A6D70] text-[18px] justify-center mx-auto lg:mx-0  w-[450px] lg:w-[766px]'>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>
            <FilterBlock />
        </div>
    )
}

export default FilterSlide