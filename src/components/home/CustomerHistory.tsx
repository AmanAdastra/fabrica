import React from 'react'

const CustomerHistory = () => {
    return (
        <div className='flex flex-wrap my-[100px] px-[20px] lg:px-[120px] '>
            <img src='./HeroImage2.png' className='rounded-3xl mx-auto block xl:mx-10 order-2 xl:order-1' />
            <div className='mx-auto p-10  order-1 xl:order-2'>
                <h3 className='font-bold text-[16px] mt-5'>Customer Stories</h3>
                <h1 className='text-[36px] lg:text-[56px] text-[#C900C1] font-extrabold'>
                    Success History of <br></br> Our Customer
                </h1>
                <p className=' text-[#C900C1]'>
                    Emphasise time-saving and use numbers to maximise credibility.
                </p>
                <div className='flex flex-wrap text-gray-500 mt-2'>
                    <div className='w-1/2 py-5'>
                        <h2 className='text-[36px] font-bold  '>10x</h2>
                        <p className='text-[12px]'> Increase in Productivity </p>
                    </div>
                    <div className='w-1/2 py-5'>
                        <h2 className='text-[36px] font-bold '>300%</h2>
                        <p className='text-[12px]'> Return on investment </p>
                    </div>
                    <div className='w-1/2 py-5'>
                        <h2 className='text-[36px] font-bold '>5k+</h2>
                        <p className='text-[12px]'> Happy customers </p>
                    </div>
                    <div className='w-1/2 py-5'>
                        <h2 className='text-[36px] font-bold '>100+</h2>
                        <p className='text-[12px]'> 5-star reviews </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerHistory