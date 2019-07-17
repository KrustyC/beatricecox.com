/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicPortfolioItem {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  const template = path.resolve('src/templates/PortfolioItem/index.js');

  pages.data.allPrismicPortfolioItem.edges.forEach(edge => {
    createPage({
      path: `portfolio/${edge.node.id}`,
      component: template,
      context: {
        id: edge.node.id,
      },
    });
  });
};
