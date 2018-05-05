import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const HeroImage = styled.div`
  background-image: url("http://2.bp.blogspot.com/-byLCViJDCng/UasDblkAWBI/AAAAAAAAAR0/N_2NaibEKz4/s1600/Cool+3d+Background.jpg");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-size: 50px;
  }
`

const Hero = ({ onClick }) => (
  <HeroImage onClick={onClick}>
    <HeroText>
      <h1>I am Beatrice Duguid</h1>
      <p>And I'm a Designer</p>
    </HeroText>
  </HeroImage>
)

Hero.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Hero
