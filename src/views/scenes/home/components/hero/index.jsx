import React from 'react'
import PropTypes from 'prop-types'
import TransitionGroup from 'react-addons-transition-group'

import HeroImage from './HeroImage'
import HeroText from './HeroText'

const Hero = ({ onClick, display }) => (
  <TransitionGroup>
    {display && (
      <HeroImage onClick={onClick}>
        <HeroText>
          <h1>Hi! I'm Beatrice Duguid Cox</h1>
          <p>And I'm a Designer</p>
        </HeroText>
      </HeroImage>
    )}
  </TransitionGroup>
)

Hero.propTypes = {
  display: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Hero
