import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Grid = styled.div`
  display: grid;
  width: 70vw;
  margin: 3rem auto;

  grid-template-columns: repeat(3, 1fr);
`

const Item = styled(Link)`

`

const Portfolio = ({ data: { allPrismicPortfolioItem: { nodes } } }) => (
  console.log(nodes),
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>This is a list of all the amazing stuff I've done during my life</p>
    <p>Now go build something great.</p>
    <Grid>
      {nodes.map(({ id, data }) => (
        <Item to={`/portfolio/${id}`}>
          <h1>{data.title.text}</h1>
          <p>{data.title.text}</p>
          <p>{data.project_description.text}</p>
        </Item>
      ))}
    </Grid>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query PortfolioItems {
    allPrismicPortfolioItem {
      nodes {
        id
        data {
          project_description {
            text
          }
          project_picture {
            url
          }
          title {
            text
          }
        }
      }
    }
  }
`

export default Portfolio
