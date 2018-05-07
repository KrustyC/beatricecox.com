import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import HeroImage from './HeroImage'
import HeroText from './HeroText'

const duration = 900

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

const Hero = ({ onClick, inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
        <HeroImage onClick={onClick}>
          <HeroText>
            <h1>Hi! I'm Beatrice Duguid Cox</h1>
            <p>And I'm a Designer</p>
          </HeroText>
        </HeroImage>
      </div>
    )}
  </Transition>
)

Hero.propTypes = {
  inProp: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Hero
