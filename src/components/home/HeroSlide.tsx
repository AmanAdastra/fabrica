import React from 'react'
import { Jim_Nightshade, Inter } from 'next/font/google'

export const interFont = Inter({ subsets: ["latin"] })

const HeroSlide = () => {
    return (
        <div className={'flex flex-wrap h-fit w-full xl:px-[120px] relative z-10'}>
            <div className=' h-fit w-full lg:w-1/2   '>
                <div className=' lg:mt-[37px] h-fit lg:h-[480px] text-[36px] lg:text-[56px] text-center lg:text-start font-bold w-full '>
                    <p className=' '>
                        Discover the Latest
                    </p>
                    <p className=''>
                        Furniture Trends
                    </p>
                    <div className='flex justify-center lg:justify-start w-full'>
                        <img src='/Brush.png' className='relative -left-[3.5rem] lg:left-0  lg:-top-8 -top-6  ' />
                    </div>
                    <div className='text-gray-400 '>
                        <p className={'lg:mt-[20px] mx-auto lg:mx-0 text-xl font-medium w-[400px] lg:w-[480px] justify-center lg:justify-start px-2' + interFont.className}>
                            Shop the Latest Fashion Items and Stay ahead of the style game
                        </p>
                    </div>
                </div>

            </div>
            <div className='flex flex-col items-center lg:items-end h-fit w-full lg:w-1/2 mt-12 lg:mt-0'>
                <div className='flex px-2 items-center gap-2 '>
                    <img src='/couch.png' className='rounded-2xl  object-cover h-[200px] md:h-[280px] w-[180px] md:w-[350px] ' />
                    <img src='/chair.jpg' className='rounded-2xl  object-cover h-[200px] md:h-[280px] w-[180px] md:w-[350px] ' />
                </div>
                <div className='flex px-2 mt-4 '>
                    <img src='/sofa.png' className='rounded-2xl object-cover  md:h-[280px] h-[240px]  w-[360px] md:w-[700px]' />
                </div>
            </div>
        </div>
    )
}

export default HeroSlide