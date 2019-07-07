import React from "react"
import { graphql } from "gatsby"

const PortfolioItem = ({ data: { prismicPortfolioItem } }) => {
  const { data } = prismicPortfolioItem
  return (
    <React.Fragment>
      <h1>{data.title.text}</h1>
      <p>{data.project_description.text}</p>
      <img src={data.project_picture.url} />
    </React.Fragment>
  )
}

export default PortfolioItem

export const pageQuery = graphql`
  query PortfolioItemBySlug($id: String!) {
    prismicPortfolioItem(id: { eq: $id }) {
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
`