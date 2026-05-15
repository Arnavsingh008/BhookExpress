import React, { useState } from 'react'
import styles from './Home.module.css';
import Hero from '../../components/Hero/Hero';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import SpecialOffers from '../../components/SpecialOffers/SpecialOffers';
import AboutUs from '../../components/AboutUs/AboutUs';

function Home() {
  
    const [category, setCategory] = useState("")

  return (
    <div>
      <Hero/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AboutUs/>
      <WhyChooseUs/>
      <SpecialOffers/>
      <HowItWorks/>
    </div>
  )
}

export default Home
