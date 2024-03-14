import React from 'react'
import HeroSection from './components/HeroSection'
import Trusted from './components/Trusted'
import Services from './components/Services'
import FeaturProducts from './components/FeaturProducts'
const Home = () => {

  return (
    <>
      <HeroSection myData="Ez Shop"/>
      <FeaturProducts/>
      <Services/>
      <Trusted/>
    </>
  )
}


export default Home