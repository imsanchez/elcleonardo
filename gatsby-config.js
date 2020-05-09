require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Shaun Leonardo`,
    description: `Shaun El C. Leonardo is an American artist, and performer best known for his work exploring the relationships between masculinity, sports, race, and culture.`,
    author: `Isaiah Marc Sanchez <isaiah@mymx.io>`,
  },
  pathPrefix: '/elcleonardo',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: true,
          analytics: true,
        },
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FIREBASE_APP_ID,
          measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shaun-leonardo`,
        short_name: `elcleonardo`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#8C7B5E`,
        display: `minimal-ui`,
        icon: `src/static/favicon-32x32.png`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: '[hash:base64:5]'
        },
      }
    },
  ],
}
