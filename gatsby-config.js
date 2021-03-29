const config = require('./src/data/config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const getDeliveryClientConfig = () => {
  let config = {
    projectId: "e2e6f721-08fb-00ed-a10a-a6c8cfef817f",
    languageCodenames: [`default`],
  }

  if (process.env.USE_PREVIEW) {
    config.usePreviewUrl = true
    config.authorizationKey = process.env.KK_PREVIEW_KEY
  }

  return config
}

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        ...getDeliveryClientConfig(),
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    'gatsby-plugin-offline',
  ],
};
