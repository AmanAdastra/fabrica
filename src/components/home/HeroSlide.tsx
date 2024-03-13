import React from 'react'
import { Jim_Nightshade, Inter } from 'next/font/google'

export const interFont = Inter({ subsets: ["latin"] })

const HeroSlide = () => {
    return (
        <div className={'flex  h-[554px] w-full px-[120px] relative z-10'}>
            <div className='h-full w-1/2 relative  '>
                <div className='mt-[37px] h-[480px] '>
                    <p className='text-[56px] font-bold'>
                        Discover the Latest
                    </p>
                    <p className='text-[56px] font-bold'>
                        Furniture Trends
                    </p>
                    <img src='/Brush.png' className='relative -top-8' />
                    <p className={'mt-[60px] text-xl font-medium w-[480px] ' + interFont.className}>
                        Shop the Latest Fashion Items and Stay ahead of the style game
                    </p>
                </div>

            </div>
            <div className='h-full w-1/2'>
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