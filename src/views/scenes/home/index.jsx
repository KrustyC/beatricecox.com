import React, { Component } from 'react'
import { DefaultLayout as Layout } from 'layouts' 

import Hero from './components/hero'

export default class Home extends Component {
  state = {
    isHeroDisplayed: true
  }

  onHeroClick = () => this.setState({ isHeroDisplayed: false })

  render() {
    const { isHeroDisplayed } = this.state
    return (
      <Layout hideNavigation={isHeroDisplayed}>
        { isHeroDisplayed
          ? <Hero onClick={this.onHeroClick} />
          : (
            <section>
              Bimba's home
            </section>
          )
        }
      </Layout>
    )
  }
}
