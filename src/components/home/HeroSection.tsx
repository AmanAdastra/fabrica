import React from 'react'
import NavigationBarComponent from '../common/NavigationBarComponent'
import HeroSlide from './HeroSlide'
import FilterSlide from './FilterSlide'
import ProductCards from './ProductCards'

const HeroSection = () => {
    return (
        <div className='mt-[24px] md:mt-12 relative overflow-clip'>
            <NavigationBarComponent />
            <HeroSlide />
            <FilterSlide />
            <div className="h-[650px] w-[650px] rounded-full z-0 absolute top-[400px] blur-3xl  -right-[300px]"
                style={{
                    background: 'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(221,108,217,1) 0%, rgba(237,237,237,0.9) 100%)'
                }}></div>

            <ProductCards/>
        </div>
    )
}

export default HeroSection