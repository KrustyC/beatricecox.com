import React, { Component, Fragment } from 'react'

import Hero from './components/hero'
import Main from './components/main'

export default class Home extends Component {
  state = {
    isHeroDisplayed: true
  }

  onHeroClick = () => this.setState({ isHeroDisplayed: false })

  render() {
    const { isHeroDisplayed } = this.state
    return (
      <Fragment>
        <Hero onClick={this.onHeroClick} inProp={isHeroDisplayed} />
        {isHeroDisplayed && <Main />}
      </Fragment>
    )
  }
}
