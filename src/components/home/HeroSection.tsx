import React from 'react'
import NavigationBarComponent from '../common/NavigationBarComponent'
import HeroSlide from './HeroSlide'
import FilterSlide from './FilterSlide'
import ProductCards from './ProductCards'
import DiscoverTrends from './DiscoverTrends'
import ArticleSlide from './ArticleSlide'
import FashionSlide from './FashionSlide'
import CustomerHistory from './CustomerHistory'
import FooterSection from '../common/FooterSection'

const HeroSection = () => {
    return (
        <div className='mt-[24px] md:mt-12 relative overflow-clip'>
            <NavigationBarComponent />
            <HeroSlide />
            <FilterSlide />
            <div className="h-[650px] w-[650px] rounded-full z-0 absolute top-[400px] blur-3xl  -right-[300px]"
                style={{
                    background: 'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(221,134,217,1) 0%, rgba(237,237,237,0.9) 100%)'
                }}></div>

            <ProductCards />
            <div className='relative'>
                <div className="h-[570px] w-[650px] rounded-full -z-5 absolute -left-[20rem] -top-[10rem]  blur-3xl "
                    style={{
                        background: 'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(221,134,217,1) 0%, rgba(237,237,237,0.9) 100%)'
                    }}></div>
            </div>
            <DiscoverTrends />
            <ArticleSlide />
            <FashionSlide/>
            <CustomerHistory/>
            <FooterSection/>
        </div>
    )
}

export default HeroSection