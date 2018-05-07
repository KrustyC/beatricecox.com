import React, { Component, Fragment } from 'react'
import { DefaultLayout as Layout } from 'layouts'

import Hero from './components/hero'
import Main from './components/main'

export default class Home extends Component {
  state = {
    isHeroDisplayed: false
  }

  onHeroClick = () => this.setState({ isHeroDisplayed: false })

  render() {
    const { isHeroDisplayed } = this.state
    return (
      <Fragment>
        <Hero onClick={this.onHeroClick} display={isHeroDisplayed} />
        {!isHeroDisplayed && (
          <Layout>
            <Main />
          </Layout>
        )}
      </Fragment>
    )
  }
}
