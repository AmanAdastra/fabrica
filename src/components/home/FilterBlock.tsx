import React from 'react'

const FilterBlock = () => {
    return (
        <ul className='mt-[80px] flex gap-4  h-[40px] w-full'>
            <li className='flex items-center rounded-full bg-black h-full'><p className='text-white px-4'>All Furniture</p></li>
            <li className='flex items-center rounded-full bg-gray-300 h-full'><p className=' px-4'>Bedroom</p></li>
            <li className='flex items-center rounded-full bg-gray-300 h-full'><p className=' px-4'>Living Room</p></li>
            <li className='flex items-center rounded-full bg-gray-300 h-full'><p className=' px-4'>Home Office</p></li>
            <li className='flex items-center rounded-full bg-gray-300 h-full'><p className=' px-4'>Dining Table</p></li>
            <li className='flex items-center rounded-full bg-gray-300 h-full'><p className=' px-4'>More</p></li>
        </ul>
    )
}

export default FilterBlock