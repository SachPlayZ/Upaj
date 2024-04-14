import React from 'react'
import MultiLayerParallax from './MultiLayeredParallax'
import Marketplace from './Marketplace'
import Footerus from './Footerus'

const LandingPage = () => {
  return (
    <div>
      <MultiLayerParallax />
      <Marketplace />
      <Footerus />
    </div>
  )
}

export default LandingPage