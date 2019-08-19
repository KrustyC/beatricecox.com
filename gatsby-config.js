require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Beatrice Duguid Cox`,
    description: `I'm an italo-english designer based in London.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#292929`,
        theme_color: `#292929`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'beatricecox.com',
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `beatricecox`,
        accessToken: `${process.env.GATSBY_PRISMIC_API_KEY}`,
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
