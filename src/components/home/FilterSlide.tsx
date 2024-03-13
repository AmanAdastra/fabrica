import React from 'react'
import FilterBlock from './FilterBlock'

const FilterSlide = () => {
    return (
        <div className='mt-[140px] relative mx-[120px]'>
            <p className={'text-[56px] font-bold'}>Stylish Collection of Furniture</p>
            <img src='/curve_2.png' className=' absolute -top-[4rem] left-[690px] ' />
            <p className='mt-[24px] text-[#6A6D70] text-[18px] w-[766px]'>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>
            <FilterBlock/>
        </div>
    )
}

export default FilterSlide