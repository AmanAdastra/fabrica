import React from 'react'
import NavigationBarComponent from '../common/NavigationBarComponent'
import HeroSlide from './HeroSlide'
import FilterSlide from './FilterSlide'

const HeroSection = () => {
    return (
        <div className='mt-12 mx-[120px]'>
            <NavigationBarComponent/>
            <HeroSlide/>
            <FilterSlide/>
        </div>
    )
}

export default HeroSection