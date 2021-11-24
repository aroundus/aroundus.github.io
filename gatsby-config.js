const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'AROUND US',
    author: {
      name: 'Sally',
      summary: '프론트엔드 개발자',
    },
    description: 'Coding everything AROUND US',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~assets': path.resolve(__dirname, './src/assets'),
          '~components': path.resolve(__dirname, './src/components'),
          '~constants': path.resolve(__dirname, './src/constants'),
          '~containers': path.resolve(__dirname, './src/containers'),
          '~helpers': path.resolve(__dirname, './src/helpers'),
          '~pages': path.resolve(__dirname, './src/pages'),
          '~services': path.resolve(__dirname, './src/services'),
          '~shared': path.resolve(__dirname, './src/shared'),
          '~states': path.resolve(__dirname, './src/states'),
          '~types': path.resolve(__dirname, './src/types'),
          '~validations': path.resolve(__dirname, './src/validations'),
          '~views': path.resolve(__dirname, './src/views'),
        },
        extensions: ['ts', 'tsx'],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1920,
              quality: 100,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sass',
  ],
};
