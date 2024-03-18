import React from 'react'

const FashionSlide = () => {
    return (
        <div className='flex flex-wrap  lg:w-full  lg:flex-wrap mt-[180px] z-10 relative mx-5 xl:px-[120px] mb-[10px]' >
            <div className='w-full lg:w-1/2 py-4 px-10'>
                <img src='Quarter.png' />
                <div className='relative inline-block'>
                    <h1 className='font-bold text-[32px] inline-block] mt-10'>Enjoy Our Latest Fashion Trends and Style</h1>
                    <img src='StrokeLine.png' className='absolute lg:-top-[0.5rem] lg:-right-[6rem] -right-[30px] top-[2rem]' />
                </div>
                <p className='mt-[14px] text-[18px]'>
                    Ship our curated collection of fashion items and stay ahead of the fashion game.
                </p>
                <div className='flex flex-wrap mt-10'>
                    <div className='w-full lg:w-1/2 mt-5 text-center lg:text-start '>
                        <h4 className='font-bold text-[24px] text-center lg:text-start mb-5'>Quality</h4>
                        <p className='text-gray-400 '>Our fashion items are crafted with the highest materials and attention to details.</p>
                    </div>
                    <div className='w-full lg:w-1/2 mt-5 text-center lg:text-start '>
                        <h4 className='font-bold text-[24px] text-center lg:text-start mb-5'>Style</h4>
                        <p className='text-gray-400 '>Express you unique style with our wide range of trendy items.</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <img src='HeroImage1.png' className='rounded-3xl  w-auto mx-auto z-10 mt-10 lg:mt-0 ' />
                <div className='relative'>
                    <div className="h-[570px] w-[650px] rounded-full -z-10 absolute -top-[48rem] lg:-top-[50rem] lg:-right-[100px]  blur-3xl "
                        style={{
                            background: 'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(221,134,217,1) 0%, rgba(237,237,237,0.9) 100%)'
                        }}></div>
                </div>
            </div>
        </div>
    )
}

export default FashionSlide