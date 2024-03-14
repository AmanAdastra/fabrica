import React from 'react'
import { Jim_Nightshade, Inter } from 'next/font/google'

export const interFont = Inter({ subsets: ["latin"] })

const HeroSlide = () => {
    return (
        <div className={'flex flex-wrap h-[554px] w-full lg:px-[120px] relative z-10'}>
            <div className='h-full w-full md:w-1/2   '>
                <div className=' lg:mt-[37px] h-[480px] text-[36px] md:text-[40px] text-center md:text-start lg:text-[56px] font-bold w-full '>
                    <p className=' '>
                        Discover the Latest
                    </p>
                    <p className=''>
                        Furniture Trends
                    </p>
                    <div className='flex justify-center md:justify-start w-full'>
                        <img src='/Brush.png' className='relative -left-[3.5rem] md:left-0  md:-top-8 -top-6  ' />
                    </div>
                    <div className='text-gray-400 '>
                        <p className={'md:mt-[20px] mx-auto md:mx-0 text-xl font-medium w-[400px] md:w-[480px] text-justify' + interFont.className}>
                            Shop the Latest Fashion Items and Stay ahead of the style game
                        </p>
                    </div>
                </div>

            </div>
            <div className='h-full w-full md:w-1/2'>
                <div className='w-[85%] h-full'>
                    <div className='flex justify-around h-1/2 gap-2'>
                        <img src='/chair.jpg' className='rounded-[33px] h-full ' />
                        <img src='/couch.png' className='rounded-[33px] h-full' />
                    </div>
                    <div className='flex justify-around h-1/2 w-full pt-8'>
                        <img src='/sofa.png' className='rounded-[33px] h-full w-full ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSlide