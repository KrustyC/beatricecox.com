import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import { TweenMax } from 'gsap'

const ImageContainer = styled.div`
  background-image: url("http://2.bp.blogspot.com/-byLCViJDCng/UasDblkAWBI/AAAAAAAAAR0/N_2NaibEKz4/s1600/Cool+3d+Background.jpg");
  background: black;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;

  display: ${ifProp({ display: true }, 'flex', 'flex')};
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export default class HeroImage extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    onClick: PropTypes.any.isRequired
  }

  constructor(props) {
    super(props)
    this.container = React.createRef()
  }

  componentWillLeave(callback) {
    const { current } = this.container
    TweenMax.fromTo(
      current,
      0.3,
      { y: 0, opacity: 1 },
      { y: -100, opacity: 0, onComplete: callback }
    )
  }

  render() {
    return (
      <ImageContainer innerRef={this.container} onClick={this.props.onClick}>
        {this.props.children}
      </ImageContainer>
    )
  }
}
